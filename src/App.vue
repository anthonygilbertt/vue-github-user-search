<template>
  <div class="row">
    <div class="col-md-12">
      <form v-on:keyup.enter="handleSubmit" id="userForm">
        <h1 class="h3 mb-3 font-weight-normal">Search for a GitHub User</h1>
        <input
          type="text"
          id="inputUser"
          class="form-control"
          name="username"
          v-model="username"
          placeholder="Username"
          required
          autofocus
        />
        <br />
        <button
          class="btn btn-lg btn-primary btn-block"
          type="button"
          id="searchUser"
          @click.prevent="handleSubmit"
        >
          Search
        </button>
      </form>
      <br />
      <div class="container mt-4">
        <h3 class="header">Found Users</h3>
        <div v-show="users">
          <table id="results_table" class="table" width="100%">
            <thead>
              <tr>
                <th class="th-sm" v-show="showAvatar == true">Avatar</th>
                <th class="th-sm">Name</th>
                <th class="th-sm">Bio</th>
                <th class="th-sm">Followers</th>
                <th class="th-sm">Following</th>
                <th class="th-sm">Twitter</th>
                <th class="th-sm">Github Link</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td v-show="showAvatar == true">
                  <img
                    v-bind:src="user.avatar_url"
                    alt="github user avatar"
                    class="user-avatar"
                  />
                </td>
                <td>{{ user.name }}</td>
                <td>{{ user.bio }}</td>
                <td>{{ user.followers }}</td>
                <td>{{ user.following }}</td>
                <td>
                  <a
                    v-bind:href="'https://twitter.com/' + user.twitter_username"
                    >{{ user.twitter_username }}</a
                  >
                </td>
                <td>
                  <a v-bind:href="user.html_url">{{ user.html_url }}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p class="mt-5 mb-3 text-black">
        Made with <img alt="Vue logo" src="./assets/logo.png" />ue.js by Anthony
        Gilbert
      </p>
    </div>
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from "axios";
import $ from "jquery";
import { ref } from "@vue/reactivity";

export default {
  methods: {
    forceUpdate() {
      this.$forceUpdate();
    },
  },
  setup() {
    const username = ref("");
    const users = ref(null);
    const showAvatar = ref(true);
    const checked = ref(true);

    const handleToggle = () => {
      checked.value == !checked.value;
    };
    const handleShowAvatar = () => {
      console.log("checkbox clicked");
      showAvatar.value = !showAvatar.value;
      console.log(showAvatar.value);
    };

    const handleSubmit = async () => {
      const gh_api = "https://api.github.com/search/users?q=";
      const userInput = username.value;
      const gh_endpoint = gh_api + userInput;
      const newUserArray = [];

      await axios
        .get(gh_endpoint)
        .then((res) => {
          const fetchRequest = res.data;

          return fetchRequest;
        })
        .then(async (res) => {
          for (let userIdx in res.items) {
            const userEP = "https://api.github.com/users/";

            const fetchRequest = await fetch(userEP + res.items[userIdx].login)
              .then((res) => {
                return res.json();
              })
              .then((res) => {
                return res;
              });

            newUserArray.push(fetchRequest);
          }
        });
      users.value = newUserArray;
    };

    return {
      handleSubmit,
      username,
      users,
      handleToggle,
      checked,
      handleShowAvatar,
      showAvatar,
    };
  },
  mounted() {
    $("#results_table").DataTable();
  },
};
</script>

<style scoped>
img {
  width: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body,
html,
td {
  /* background-color: #061328 !important; */
  background-color: #223e6b;
  color: #ffff;
}
tr,
p {
  color: turquoise;
}
.useravatar {
  width: 100px;
  height: 100px;
}
h3 {
  text-decoration: underline;
}
.container {
  max-width: 1000px;
}
#results_table {
  height: auto;
}
h1,
h3 {
  color: white;
}
.user-avatar {
  width: 100px;
  height: 100px;
}
img {
  vertical-align: middle;
  border-style: none;
}
#results_table_filter {
  background-color: white;
}
.foundUsers {
  color: purple;
}
select {
  background: white;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
}
#results_table_filter label input {
  background-color: pink;
}
</style>
