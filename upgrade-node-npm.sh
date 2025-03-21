#!/bin/bash
set -e

REQUIRED_NODE="22.9.0"

# Function to compare two semantic versions
version_ge() {
  # Returns 0 (true) if $1 >= $2
  [ "$1" = "$2" ] && return 0
  local IFS=.
  local i ver1=($1) ver2=($2)
  # Fill empty fields in ver1 with zeros
  for ((i=${#ver1[@]}; i<${#ver2[@]}; i++)); do
    ver1[i]=0
  done
  for ((i=0; i<${#ver1[@]}; i++)); do
    if [[ -z ${ver2[i]} ]]; then
      ver2[i]=0
    fi
    if ((10#${ver1[i]} > 10#${ver2[i]})); then
      return 0
    elif ((10#${ver1[i]} < 10#${ver2[i]})); then
      return 1
    fi
  done
  return 0
}

# Check if Node.js is installed
if ! command -v node &>/dev/null; then
  echo "Node.js is not installed. Installing Node.js..."
  UPDATE_NODE=true
else
  CURRENT_NODE=$(node -v | sed 's/^v//')
  echo "Current Node.js version: $CURRENT_NODE"
  if version_ge "$CURRENT_NODE" "$REQUIRED_NODE"; then
    echo "Node.js version meets the requirement (>= $REQUIRED_NODE)."
    UPDATE_NODE=false
  else
    echo "Node.js version is lower than $REQUIRED_NODE."
    UPDATE_NODE=true
  fi
fi

if [ "$UPDATE_NODE" = true ]; then
  echo "Updating Node.js via NodeSource..."
  # This script is for Debian/Ubuntu. Adjust for your distro if needed.
  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt-get install -y nodejs
  echo "Updated Node.js version: $(node -v)"
fi

echo "Upgrading npm to version 11.2.0..."
sudo npm install -g npm@11.2.0

echo "New npm version: $(npm -v)"
echo "Upgrade completed."
