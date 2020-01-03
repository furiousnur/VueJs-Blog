require('./bootstrap');
window.Vue = require('vue');

//form validation..............

import { Form, HasError, AlertError } from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

//end form validation............


//Vue Router......
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

const router = new VueRouter({
  routes,// short for `routes: routes`
    mode:'history' //vue js has 3 mode, #hasmode, history and another one
})



const app = new Vue({
    el: '#app',
    router
});
