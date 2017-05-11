<template>
    <div>

        <header class="logo animated animatedSlide slideInDown"
                :class="{ 'at-home' : BOTB.home,
                           'in-page' : ! BOTB.home,
                           'in-article' : BOTB.inArticle,
                           'animated animatedSlide slideOutUp' : BOTB.inGrid

                        }">

            <div class="level">
                <div class="level-item">
                    <img src="/images/logo_text.png" alt="Cleveland Browns Logo">

                    <button class="button has-svg is-large"
                            @click="[ BOTB.inGrid = ! BOTB.inGrid, stopSlider() ]"
                    >
                        <i class="fa fa-th"></i>

                    </button>
                </div>

                <div class="level-right">
                    <div v-for="league in leagues" class="league" :class="{ 'active' : 'NFL' === league.name }">
                        <img :src="leagueLogoURL + league.logo" alt="">
                    </div>
                </div>
            </div>

        </header>

        <div class="close">
            <button v-show="BOTB.inGrid"
                    @click="BOTB.inGrid = false"
                    class="button has-svg animated animatedSlide slideInUp"
            >
                <svg><use xlink:href="#close"></use></svg>
            </button>
        </div>

        <transition name="slide-down">

            <grid v-show="BOTB.inGrid"></grid>

        </transition>

        <div v-show="! BOTB.home" class="side-bar animated animatedSlide animatedDelay slideInUp"
             :class="{ 'is-active' : BOTB.filterBy != '',
                        'animated animatedSlide slideOutDown' : BOTB.home,
                        'animated animatedSlide slideOutDown' : BOTB.inArticle
                    }"
        >


            <div v-for="(league, index) in leagues"
                 class="item animated bounceIn"
                 :class="[{ 'is-hover' : BOTB.active == league.name || BOTB.filterBy == league.name },
                            'is-nth-' + index ]"
                 @click="BOTB.filterBy = league.name"
            >
                <img :src="leagueLogoURL + league.logo" alt="">
            </div>

        </div>

        <div v-show="BOTB.home" class="slider-bar animated fadeIn"></div>

        <section class="hero section-body no-margin no-padding has-background"
    >
        <div class="hero-body no-margin no-padding" :class="{ 'in-page' : ! BOTB.home }">

            <transition name="slide" mode="in-out">

                <router-view

                >

                </router-view>

            </transition>

        </div>


    </section>

        <transition-group tag="div"
                          class="bg"
                          :name="BOTB.slideTransition"
                          :class="{ 'in-grid' : BOTB.inGrid }"
        >

            <div v-for="bg in filtered"
                 :key="bg.title"
                 class="image"
            >

                <img :src="slideImageURL + bg.link + slideImage" alt="">

            </div>

        </transition-group>


</div>

</template>

<script>

    import BOTB from '../data/BestOfTheBest';

    import Slider from '../classes/Slider';

    window.slider = new Slider();

    Vue.component('Bp', require('../views/bestofthebest/components/BpItem.vue'));
    Vue.component('BgImage', require('../views/bestofthebest/components/BgImage.vue'));
    Vue.component('Grid', require('../views/bestofthebest/Grid.vue'));

    export default {

        components: [
            'Bp',
            'BgImage',
            'Grid'
        ],

        data() {
            return {
                BOTB,
                slideImageURL: '/images/bestofthebest/',
                slideImage: '/bg_new.jpg',
                leagueLogoURL: '/images/bestofthebest/leagues/',
                leagues: [
                    { name: 'NFL', logo: 'NFL.png', theme: 'is-NFL' },
                    { name: 'NBA', logo: 'NBA.png', theme: 'is-NBA' },
                    { name: 'NHL', logo: 'NHL.png', theme: 'is-NHL' },
                    { name: 'BPL', logo: 'BPL.png', theme: 'is-BPL' },
                ]
            }
        },

        computed: {
            filtered() {
                return _.filter(this.BOTB.bps, ['link', this.BOTB.active]);
            }
        },

        methods: {
            next(page) {
                router.push(page);
            },

            stopSlider() {
                slider.stop();
            },

            startSlider() {
                slider.slide();
            }
        }


    }
</script>
