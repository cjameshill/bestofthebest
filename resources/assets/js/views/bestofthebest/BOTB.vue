<template>

    <div>

    <div class="wrapper botb-wrapper" :class="{ 'slide' : BOTB.filterBy != '' }">

                    <transition-group
                         name="shuffle"
                         tag="div"
                         class="columns no-margin no-padding"
                    >

                        <bp v-for="(bp, index) in sortedBps"
                            :bp="bp"
                            :index="index"
                            :key="bp.title"
                            :class="{ 'not-active' : BOTB.filterBy != bp.league && BOTB.filterBy != '',
                                      'active' : BOTB.filterBy == ''
                                    }"
                        >

                        </bp>

                    </transition-group>

             </div>

        </div>

</template>


<script>

    import BOTB from '../../data/BestOfTheBest';


    export default {

        components: [
            'Bp'
        ],

        data() {
            return {
                BOTB
            }
        },

        computed: {

            activeTheme() {
                return 'is-' + BOTB.active;
            },

            sortedBps() {
                if (this.BOTB.filterBy === '') {
                    return this.BOTB.bps;
                } else {
                    let sort = _.partition(this.BOTB.bps, ['league', this.BOTB.filterBy]);

                    return _.flattenDeep(sort);
                }
            }
        },

        methods: {
            next(page) {
                router.push(page);
            }
        }

    }
</script>

