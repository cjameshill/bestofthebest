<template>

    <div class="column is-4 bp-item animated slideInUp"
        :class="'is-nth-' + index"
    >

        <div class="columns is-multiline no-margin no-padding"
             @click="next('/bestofthebest/article/' + bp.link)"
        >

            <p class="large-title">{{ bp.title }} </p>

            <div class="column is-12 no-margin no-padding">
                <article class="article">
                    <img :src="backgroundURI + bp.link + imageSport" alt="">
                </article>
            </div>
            <div class="column is-12 no-margin no-padding">
                <article class="article">
                    <img :src="backgroundURI + bp.link + imageBrand" alt="">
                </article>
            </div>


            <p class="small-title">{{ bp.title }}</p>

        </div>

    </div>

</template>


<script>

    import BOTB from '../../../data/BestOfTheBest';

    export default {

        props: [
            'bp',
            'index'
        ],

        data() {
            return {
                BOTB,
                backgroundImage: '/bg.jpg',
                imageSport: '/image_sport.jpg',
                imageBrand: '/image_brand.jpg',
                backgroundURI: '/images/bestofthebest/'
            }
        },

        methods: {
            next(page) {
                router.push(page);
            }
        }


    }
</script>

