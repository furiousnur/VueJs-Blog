require('./bootstrap');
window.Vue = require('vue');

//Vue Router......
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue') },
    { path: '/profile', component: require('./components/Profile.vue') }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const app = new Vue({
    el: '#app',
    router
});
