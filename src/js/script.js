import * as flsFunctions from "./modules/functions.js";
import * as Mobile from "./modules/mobile.js";
import * as dynamicAdapt from "./dynamicAdapt/dynamicAdapt.js"
import * as Splide from "./modules/splidejs.js"


flsFunctions.isWebp();
Mobile.isMobile();
dynamicAdapt.arrayDataDa();
Splide.splide();


// Swiper slider
import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();
