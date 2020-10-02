<template>
 <div class="row">
        <div class="col-md-12">

            
            <form onSubmit="return false;" id="userForm">
        
              <h1 class="h3 mb-3 font-weight-normal">Search 4 A GitHub User</h1>
              <input type="text" id="inputUser" class="form-control"  name="username" value="" placeholder="User Name" required autofocus>
              <br>
              <button class="btn btn-lg btn-primary btn-block" type="button" id="searchUser" onclick="clickButton()">Search</button>
              
            </form><br>
            <div>
                <h3 class="header">Found Users</h3>
                <p id="foundUsers"></p>
            </div>
        
        
                <table id="results_table" class="table" width="100%">
                    <thead>
                      <tr>
                        <th class="th-sm">Avatar
                        </th>
                        <th class="th-sm">Name
                        </th>
                        <th class="th-sm">Bio
                        </th>
                        <th class="th-sm">Followers
                        </th>
                        <th class="th-sm">Following
                        </th>
                        <th class="th-sm">Twitter
                        </th>
                        <th class="th-sm">Github Link
                        </th>
                      </tr>
                    </thead>
                     <tbody>
                      
                    </tbody>
        
                    
                  </table>
                <p class="mt-5 mb-3 text-muted">Made with <img alt="Vue logo" src="./assets/logo.png"/>ue.js  by Anthony Gilbert</p>
                
        </div>

    </div>

</template>

<script>


export default {
  methods: {
    clickButton() {

    //    const api = 'https://api.github.com/search/users?q=';
    // const inputValue = document.querySelector('#inputUser').value;
    // const apiUser = api + inputValue;

    // table.clear().draw();

    // fetch(apiUser)
    //     .then(response => {

    //         return response.json();
    //     }).then(response => {

    //         for (var userIdx in response.items) {
    //             const userEP = 'https://api.github.com/users/';
    //             fetch(userEP + response.items[userIdx].login)
    //                 .then(function (response) {

    //                     return response.json();
    //                 }).then(response => {


    //                     table.row.add([
    //                         '<img class="useravatar" src="' + response.avatar_url + '"></img>',
    //                         response.name,
    //                         response.bio,
    //                         response.followers,
    //                         response.following,
    //                         response.twitter_username,
    //                         '<a target=_blank" href="' + response.html_url + '">' + response.html_url + '</a>'
    //                     ]).draw();

    //                 })
    //         }
    //     });

    },
    mounted(){

//       this.dataTable = $(document).ready(function (e) {
//     const api = 'https://api.github.com/users/';
//     const input = document.querySelector('#inputUser');
//     const inputValue = input.value;
//     const apiUser = api + inputValue;

//     table = $('#results_table').DataTable();
//     input.addEventListener("keyup", function (event) {

//         if (event.keyCode == 13) {
//             event.preventDefault();

//             console.log(e);
//             clickButton();
//         }
//     });
// });

    }
  },
}
</script>

<style>
img {
  width: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
body {
    background-color: #061328;
    color: #ffff;
}
td {
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
</style>