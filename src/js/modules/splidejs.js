// Splide slider
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export const splide = new Splide( '.splide', {
    type   : 'loop',
    drag: false,
    perPage: 3,
    arrows: false,
    pagination: false,
    autoScroll: {
        pauseOnHover: false,
        pauseOnFocus: false,
        rewind: false,
        speed: 3,
    },
});

/* export const sliderTicker = new Splide( '.slider__ticker', {
    type   : 'loop',
    drag: false,
    perPage: 3,
    arrows: false,
    pagination: false,
    autoScroll: {
        pauseOnHover: false,
        pauseOnFocus: false,
        rewind: false,
        speed: 3,
    },
}); */

splide.mount( { AutoScroll } );
// sliderTicker.mount( { AutoScroll } );