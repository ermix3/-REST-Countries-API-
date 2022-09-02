import {createRouter, createWebHistory} from 'vue-router'
import Countries from '@/views/countries/Countries.vue'
import Country from '@/views/countries/DetailsOfCountry.vue'
import NotFound from '@/views/NotFound.vue'


const routes = [
    {
        path: '/',
        name: 'Countries',
        component: Countries,
    },
    {
        path: '/country/:id',
        name: 'Country',
        component: Country,
        props: true
    },
    // redirect to countries
    {
        path: '/all-countries',
        redirect: '/'
    },
    // redirect to 404
    {
        path:'/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
