const { build } = require('vite');

build({
  configFile: './vite.config.js',
  mode: 'production'
}).catch(err => {
  console.error('Build error:', err);
  process.exit(1);
});
