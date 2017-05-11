<template>
    <div class="wrapper is-full-height has-padding article-wrapper"
         :class="{ 'in-grid' : BOTB.inGrid }"
        >

        <div class="columns is-full-height center-column">
            <div class="column is-full-height center-column">
                <h1 class="title">{{ article.title }}</h1>
            </div>
        </div>



    </div>

</template>



<script>

    import BOTB from '../../data/BestOfTheBest';

    export default {

        data() {
            return {
                BOTB,
                article: []
            }
        },

        created() {
            this.getPage();
        },

        methods: {
            next(page) {
                router.push(page);
            },

            getPage() {

                BOTB.inGrid = false;

                axios.get('/api/bp/' + this.$route.params.article)
                    .then((response) => {
                        this.article = response.data;

                    });
            }
        },

        watch: {
            '$route.params.article' () {
                this.getPage();
            }
        }


    }
</script>

