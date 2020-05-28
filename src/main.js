import Vue from "vue";


import DefaultLayout from "~/layouts/Default.vue";

export default function (Vue, {router, head, isClient, isServer}) {
    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);
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
        {property: 'og:title', content: "Ingenieria | Protección Anticorrosiva | Preparación de Superficies | Protecciones Pasiva | Pavimentos Industriales | Impermeabilizaciones | Inyecciones"},
        {property: 'og:site_name', content: 'apimosa'},
        {property: 'og:url', content: ''},
        {property: 'og:type', content: 'website'},
        {property: 'og:image', content: 'https://scontent.fpmi1-1.fna.fbcdn.net/v/t1.0-1/51709353_1143587805818388_6243076857017663488_n.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=dQ2k2wIrkgsAX_Fc7nj&_nc_ht=scontent.fpmi1-1.fna&oh=96831fcc2aad857107e220764a3be58e&oe=5EE006DC'},
        {name: 'robots', content: 'index,follow'},
        {
            property: 'twitter:description',
            content: 'My blog will give you an idea of ​​my daily fashion adventures. It is also a way to share some of my favorite things in life, fashion, inspiration, beauty tips and style.'
        },
        {property: 'twitter:title', content: "Ingenieria | Protección Anticorrosiva | Preparación de Superficies | Protecciones Pasiva | Pavimentos Industriales | Impermeabilizaciones | Inyecciones"},
        {property: 'twitter:creator', content: 'apimosa'},
        {property: 'twitter:site', content: ''},
        {property: 'twitter:type', content: 'website'},
        {property: 'twitter:image', content: 'https://scontent.fpmi1-1.fna.fbcdn.net/v/t1.0-1/51709353_1143587805818388_6243076857017663488_n.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=dQ2k2wIrkgsAX_Fc7nj&_nc_ht=scontent.fpmi1-1.fna&oh=96831fcc2aad857107e220764a3be58e&oe=5EE006DC'},
)
}
