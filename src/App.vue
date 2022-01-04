<template>
  <div class="row">
    <div class="col-md-12">
      <form onSubmit="return false;" id="userForm">
        <h1 class="h3 mb-3 font-weight-normal">Search 4 A GitHub User</h1>
        <input
          type="text"
          id="inputUser"
          class="form-control"
          name="username"
          v-model="username"
          placeholder="User Name"
          required
          autofocus
        />
        <br />
        <p>{{ username }}</p>
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
        <div v-if="users">
          <p id="foundUsers"></p>
          <p>
            {{ users[0].message }}:
            <span
              ><a :href="users[0].documentation_url">{{
                users[0].documentation_url
              }}</a></span
            >
          </p>
          <table id="results_table" class="table" width="100%">
            <thead>
              <tr>
                <th class="th-sm">Avatar</th>
                <th class="th-sm">Name</th>
                <th class="th-sm">Bio</th>
                <th class="th-sm">Followers</th>
                <th class="th-sm">Following</th>
                <th class="th-sm">Twitter</th>
                <th class="th-sm">Github Link</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr> -->

              <tr v-for="user in users" :key="user.id">
                <!-- <p>{{ users.name }}</p> -->
                <td><img v-bind:src="user.avatar_url" alt="" /></td>
                <td>{{ user.name }}</td>
                <td>{{ user.bio }}</td>
                <td>{{ user.followers }}</td>
                <td>{{ user.following }}</td>
                <td>{{ user.twitter_username }}</td>
                <td>{{ user.html_url }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else><p>No users found</p></div>
      </div>
      <p class="mt-5 mb-3 text-muted">
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
  setup() {
    const username = ref("");
    const users = ref(null);

    const handleSubmit = async () => {
      const gh_api = "https://api.github.com/search/users?q=";
      const userInput = username.value;
      const gh_endpoint = gh_api + userInput;
      const newUserArray = [];

      await axios
        .get(gh_endpoint)
        .then((res) => {
          const axiosRequest = res.data;

          return axiosRequest;
        })
        .then((response) => {
          for (var userIdx in response.items) {
            const userEP = "https://api.github.com/users/";
            fetch(userEP + response.items[userIdx].login)
              .then(function (response) {
                return response.json();
              })
              .then((response) => {
                newUserArray.push(response);
                console.log("newUserArray: ", newUserArray);
                users.value = newUserArray;

                return users;
              })
              .then((users) => {
                console.log("users.value: ", users.value);
                // response1.forEach((element) => {
                //   console.log("element: ", element);
                //   users.value = element;
                // });

                return users;
              });
            $("#results_table").DataTable();
          }
        });
    };

    return { handleSubmit, username, users };
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
  background-color: #061328 !important;
  color: #ffff;
}

tr {
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
</style>

