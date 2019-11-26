import AdminHome from './components/admin/AdminHome.vue'
// import List from './components/admin/category/List.vue'
import List from './components/admin/category/List'
import Ex from './components/ExampleComponent'
import AddCategory from './components/admin/category/new'
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
        path: '/add-category',
        component: AddCategory
    },

    {
        path: '/post',
        component: Ex
    }
]
