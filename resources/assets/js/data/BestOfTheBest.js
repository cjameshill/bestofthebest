export default {

    bps: [],
    home: true,
    inArticle: false,
    inGrid: false,
    filterBy: '',
    nextPageIndex: 0,
    active: 'bluejackets-nationwide',
    slideTransition: 'slide-down',
    bgs: [
        { name: 'Home', image: 'images/backgrounds/bg_stadium_1.jpg' },
        { name: 'NFL', image: 'images/bestofthebest/cavaliers-uber/uber.jpg' },
        { name: 'NBA', image: 'images/backgrounds/bg_stadium_1.jpg' },
        { name: 'NHL', image: 'images/bestofthebest/bluejackets-nationwide/bg_new.jpg' },
        { name: 'BPL', image: 'images/backgrounds/bg_stadium_1.jpg' }
    ],

    watch: {
        inGrid: function () {
            if(this.inGrid){
                slider.stop();
            } else {
                slider.start();
            }
        }
    },

    slide() {

        ++this.nextPageIndex;

        if(this.nextPageIndex >= this.bps.length){
            this.nextPageIndex = 0;
        }

        this.slideTransition = 'slide-down';

        this.changeSlide();

    },

    previousSlide() {
        if(this.nextPageIndex === 0){
            this.nextPageIndex = this.bps.length - 1;
        } else {
            this.nextPageIndex = this.nextPageIndex - 1;

            this.slideTransition = 'slide-up';

            this.changeSlide();
        }

    },

    nextSlide() {
        if(this.nextPageIndex >= this.bps.length - 1){
            this.nextPageIndex = 0;
        } else {
            this.nextPageIndex = this.nextPageIndex + 1;

            this.slideTransition = 'slide-down';

            this.changeSlide();
        }

    },

    changeSlide() {
        this.active = this.bps[this.nextPageIndex].link;
    }


}