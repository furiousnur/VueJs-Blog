import AdminHome from './components/admin/AdminHome.vue'
import List from './components/admin/category/List.vue'
import Users from './components/admin/users/Users.vue'
import Profile from './components/admin/users/Profile.vue'
import Ex from './components/ExampleComponent'
import AddCategory from './components/admin/category/new.vue'
export const routes = [
    /*{
        path: '/dashboard',
        component: require('./components/Dashboard.vue')
    },

    { path: '/profile', component: require('./components/Profile.vue') },

*/




    {
        path: '/home',
        component: AdminHome
    },

    {
        path: '/category-list',
        component: List
    },

    {
        path: '/users',
        component: Users
    },

    {
        path: '/profile',
        component: Profile
    },

    {
        path: '/add-category',
        component: AddCategory
    },

    {
        path: '/post',
        component: Ex
    }
]
