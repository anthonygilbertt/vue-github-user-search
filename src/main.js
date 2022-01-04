import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// // import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// import './app.scss'

import 'bootstrap/dist/css/bootstrap.css'


// // createApp(App).use(router, BootstrapVue, BootstrapVueIcons).mount('#app')
createApp(App).use(router).mount('#app')


// import Vue from 'vue';
// import App from './App.vue';
// import { ClientTable } from 'vue-tables-2';
// import router from './router'
// Vue.config.productionTip = false;


// Vue.use(ClientTable, [], false, 'bootstrap4', 'default');
// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app');




// 'use strict'

// import Vue from 'vue'
// import Vuetify from 'vuetify/lib'
// import '@mdi/font/css/materialdesignicons.css'
// import './components'

// import App from './App.vue'
// import plugins from './plugins'
// import i18n from './i18n'
// import router from './routes'
// import store from './store'

// Vue.config.productionTip = false

// Vue.use(plugins)
// Vue.use(Vuetify)

// /* eslint-disable no-new */
// new Vue({
//     el: '#app',
//     i18n,
//     render: h => h(App),
//     router,
//     store,
//     vuetify: new Vuetify({
//         icons: {
//             iconfont: 'mdiSvg',
//         },
//         lang: { t: (key, ...params) => i18n.t(key, params) }
//     })
// })