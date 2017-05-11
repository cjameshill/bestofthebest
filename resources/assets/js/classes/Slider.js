import BOTB from '../data/BestOfTheBest';

export default class Slider {

    constructor(fn, t) {
        this.fn = fn;
        this.time = t;
    }


    slide(fn = function () { BOTB.slide(); }, t = 5000){

        let timerObj = setInterval(fn, t);

        let w = 0;

        let loader = setInterval(function () {

            if(w === 100){
                w = 0;
            } else {
                w++;

                let bar = document.querySelector('.slider-bar');

                bar.style.width = w + '%';

            }

        }, 50);

        this.stop = function() {
            if (timerObj) {
                clearInterval(timerObj);
                clearInterval(loader);
                loader = null;
                timerObj = null;
            }
            return this;
        }

        this.start = function() {
            if (!timerObj) {
                this.stop();
                timerObj = setInterval(fn, t);

                let w = 0;

                loader = setInterval(function () {
                    if(w === 100){
                        w = 0;
                    } else {
                        w++;

                        let bar = document.querySelector('.slider-bar');

                        bar.style.width = w + '%';

                    }
                }, 50);
            }
            return this;
        }

        this.reset = function(newT = 5000) {
            t = newT;
            return this.stop().start();
        }

    }



}