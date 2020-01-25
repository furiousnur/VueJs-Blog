require('./bootstrap');
window.Vue = require('vue');

//form validation..............

import { Form, HasError, AlertError } from 'vform'
import moment from "moment";

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
//end form validation............

// Sweetalert start....................
import swal from 'sweetalert2'
window.swal = swal;

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer)
    }
});

window.toast = toast;

//end sweetalert....................................


//Vue Router......
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes';
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px'
})

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

window.Fire = new Vue();


Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);

//this filter for date time moment......
Vue.filter('myDate', function (created) {
    return moment(created).format('MMMM Do YYYY');
});

const app = new Vue({
    el: '#app',
    router
});
