import VueRouter from 'vue-router';

import BOTB from './data/BestOfTheBest';

let routes = [

    {
        name: 'home',
        path: '/',
        component: require('./views/bestofthebest/Home.vue'),
        beforeEnter: (to, from, next) => {
            BOTB.inGrid = false;
            console.log('loading');
            axios.get('/api/bps')
                .then((response) => {
                    BOTB.bps = response.data;
                    console.log('LOADED');
                })
                .then((response) => {
                    console.log('next');
                    next();
                });
        }
    },
    {
        name: 'article',
        path: '/bestofthebest/article/:article',
        component: require('./views/bestofthebest/Article.vue'),
        beforeEnter: (to, from, next) => {
            BOTB.inGrid = false;
            next()
        }
    },

];

export default new VueRouter({
    routes
});