<template>
    <div>

        <button class="button has-svg left-arrow animated animatedDelay fadeInRight"
                :class="{ 'slideOutLeft' : BOTB.inGrid }"
                @click="[ BOTB.previousSlide(), restartSlider() ]"
        >
            <svg><use xlink:href="#arrow-left"></use></svg>
        </button>

        <button class="button has-svg right-arrow animated animatedDelay fadeInLeft"
                :class="{ 'slideOutRight' : BOTB.inGrid }"
                @click="[ BOTB.nextSlide(), restartSlider() ]"
        >
            <svg><use xlink:href="#arrow-right"></use></svg>
        </button>



        <div class="container has-padding is-full-height overflow-hidden has-text-centered">
            
            <div class="columns is-full-height"
                :class="{ 'animated fadeOut' : BOTB.inGrid
                 }"
            >
                <div class="column is-12 center-start">

                    <transition-group name="swipe" tag="div" class="center-start">

                        <h1 v-for="number in [BOTB.nextPageIndex]"
                            class="title is-3 no-margin"
                            :key="number"
                        >
                            {{ BOTB.bps[BOTB.nextPageIndex].title }}
                        </h1>

                    </transition-group>

                </div>

                
            </div>

        </div>

    </div>

</template>

<script>

    import BOTB from '../../data/BestOfTheBest';

    export default {

        data() {
            return {
                BOTB
            }
        },


        methods: {
            next(page) {
                router.push(page);
            },

            restartSlider() {
                //
            }
        }

    }
</script>
