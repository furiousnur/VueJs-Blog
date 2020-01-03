require('./bootstrap');
window.Vue = require('vue');

//form validation..............

import { Form, HasError, AlertError } from 'vform'

import moment from "moment";

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

// this filter for first character is going to upper case
Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
});

//this filter for date time moment......
Vue.filter('myDate', function (created) {
    return moment(created).format('MMMM Do YYYY');
});

const app = new Vue({
    el: '#app',
    router
});
