import Vue from "vue";
import Vuex from 'vuex'
import * as services from './modules/services.js'
import * as works from './modules/works.js'
import DefaultLayout from "~/layouts/Default.vue";
/*Add AOS ANIMATION*/
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function (Vue, {router, head, isClient, isServer, appOptions, process}) {
    //VUEX INTEGRATION
    Vue.use(Vuex)
    /*AOS INIT*/
    if (process.isClient) {
        AOS.init()
    }
    appOptions.store = new Vuex.Store({
        modules: {
            services,
            works
        },
        state: {
            count: 0,
            serviceNames: [
                "Lista Completa",
                "Ingeniería",
                "Protección",
                "Hormigones",
                "Pavimentos",
                "Impermeabilizaciones",
                "Inyecciones",
                "Rehabilitación"
            ],
            selectedService: 'Lista Completa',
        },
        mutations: {
            SET_SERVICE(state, selected) {
                state.selectedService = selected;
            }
        },
        actions: {
            updateServiceList({commit}, payload) {
                commit(SET_SERVICE, payload);
            }
        }
    })
    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);
    // Add an external Javascript before the closing </body> tag
    /*    head.script.push({
            src: 'https://www.google.com/recaptcha/api.js',
        })*/
    head.link.push({
        rel: "stylesheet",
        href:
            "https://fonts.googleapis.com/css?family=Work+Sans|Amatic+SC&display=swap"
    })
    // Add a meta tag
    head.meta.push(
        {
            name: 'description',
            content: 'Grupo Apimosa lleva más de 50 años en el mercado, investigando, desarrollando y comprobando el resultado de sus trabajos a lo largo del tiempo. '
        },
        {property: 'language', content: 'ES'},
        {
            property: 'og:title',
            content: "Ingenieria | Protección Anticorrosiva | Preparación de Superficies | Protecciones Pasiva | Pavimentos Industriales | Impermeabilizaciones | Inyecciones"
        },
        {property: 'og:site_name', content: 'apimosa'},
        {property: 'og:url', content: ''},
        {property: 'og:type', content: 'website'},
        {
            property: 'og:image',
            content: 'https://scontent.fpmi1-1.fna.fbcdn.net/v/t1.0-1/51709353_1143587805818388_6243076857017663488_n.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=dQ2k2wIrkgsAX_Fc7nj&_nc_ht=scontent.fpmi1-1.fna&oh=96831fcc2aad857107e220764a3be58e&oe=5EE006DC'
        },
        {name: 'robots', content: 'index,follow'},
        {
            property: 'twitter:description',
            content: 'Ingenieria | Protección Anticorrosiva | Preparación de Superficies | Protecciones Pasiva | Pavimentos Industriales | Impermeabilizaciones | Inyecciones.'
        },
        {
            property: 'twitter:title',
            content: "Ingenieria | Protección Anticorrosiva | Preparación de Superficies | Protecciones Pasiva | Pavimentos Industriales | Impermeabilizaciones | Inyecciones"
        },
        {property: 'twitter:creator', content: 'apimosa'},
        {property: 'twitter:site', content: ''},
        {property: 'twitter:type', content: 'website'},
        {
            property: 'twitter:image',
            content: 'https://scontent.fpmi1-1.fna.fbcdn.net/v/t1.0-1/51709353_1143587805818388_6243076857017663488_n.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=dQ2k2wIrkgsAX_Fc7nj&_nc_ht=scontent.fpmi1-1.fna&oh=96831fcc2aad857107e220764a3be58e&oe=5EE006DC'
        },
    )
}
