import {
    createRouter,
    createWebHashHistory
}from 'vue-router';

import MultipleChoice from './components/MultipleChoice.vue';
import Index from './components/Inicio.vue';
import ConversorDeTemperatura from './components/ConversorDeTemperatura.vue';

const routes = [
    {path: '/', redirect: '/index'},

    { path: '/multipleChoice', component: MultipleChoice },
    { path: '/ConversorDeTemperaturas', component: ConversorDeTemperatura},
    {path: '/index', component: Index},

    {path: '/:pathMatch(.*)*', redirect: '/index'},
]

const router = createRouter({
    // your router options here
    // historial de rutas
    history: createWebHashHistory(),
    routes: routes
});

export default router;