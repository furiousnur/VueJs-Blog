require('./bootstrap');
window.Vue = require('vue');

//Vue Router......
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes';

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const router = new VueRouter({
  routes,// short for `routes: routes`
    mode:'history' //vue js has 3 mode, #hasmode, history and another one
})



const app = new Vue({
    el: '#app',
    router
});
