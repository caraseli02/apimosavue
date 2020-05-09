import Vue from "vue";
import Carousel3d from 'vue-carousel-3d';

import DefaultLayout from "~/layouts/Default.vue";

export default function (Vue, {router, head, isClient, isServer}) {
    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);
    Vue.use(Carousel3d);
    head.link.push({
        rel: "stylesheet",
        href:
            "https://fonts.googleapis.com/css?family=Work+Sans|Amatic+SC&display=swap"
    });
}
