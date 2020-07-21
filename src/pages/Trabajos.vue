<template>
    <Layout class="">
        <div class="conatiner mx-auto mt-32">
            <div class="mt-20">
                <div class="flex flex-wrap card">
                    <div
                            class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4"
                            v-for="(work, index) in works" :key="index"
                    >
                        <div>
                            <div
                                    class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg"
                            >
                                <div
                                        class="right-0  absolute
                                        "
                                >
                                    <p      class=" rounded-l-full mt-2 text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75"
                                            v-for="(service, index) in work.services" :key="index">
                                        {{service}}
                                    </p>
                                </div>
                                <g-image
                                        :src="require(`!!assets-loader!@images/${work.img}`)"
                                        fit="cover"
                                        class="h-64 rounded-lg w-full object-cover"
                                        :alt="work.alt"
                                />
                                <div class="flex justify-center">

                                </div>
                                <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                    <div class=" font-bold font-title text-center">
                                        {{work.title}}
                                    </div>

                                    <div class="text-sm font-light text-center my-2">
                                        {{work.description}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </Layout>
</template>

<style lang="scss" scoped>
    .vh20 {
        height: 200px;
    }
</style>

<script>
    import gsap from 'gsap'

    export default {
        metaInfo: {
            title: "Apimosa",
        },
        data() {
            return {
                works: [
                    {
                        "title": "Rencinto Ferial de Santa Cruz de Tenerife",
                        "description" : "Monumento emblemático de Sevilla en el que impermeabilizamos con poliuretano proyectado toda su estructura de madera.",
                        "services": [
                            "Protección Anticorrosiva"
                        ],
                        "img": "tenerife.jpg",
                        "alt": "Rencinto Ferial de Santa Cruz de Tenerife",

                    },
                    {
                        "title": "Ciudad de las Artes y las Ciencias",
                        "description"  : "Complejo arquitectónico cultural diseñado por Santiago Calatrava. Realización de distintos pavimentos en resina y hormigón.",
                        "services": [
                            "Pavimentos Industriales"
                        ],
                        "img": "ciudad.jpg",
                        "alt": "Ciudad de las Artes y las Ciencias",

                    },
                    {
                        "title": "Las Setas De Sevilla",
                        "description" :" Monumento emblemático de Sevilla en el que impermeabilizamos con poliuretano proyectado toda su estructura de madera.",
                        "services": [
                            "Tratamiento de Impermeabilizaciones"
                        ],
                        "img": "metropol.jpg",
                        "alt": "Las Setas De Sevilla",

                    },
                    {
                        "title": "Puente del Alamillo",
                        "description" :" Uno de los puentes de Sevilla que se construyó para la exposición universal 1992" +
                            ".Se trató el acero del puente con chorro de arena y se pintó.",
                        "services": [
                            "Preparación de Superficies"
                        ],
                        "img": "Alamillo.jpg",
                        "alt": "Puente del Alamillo",

                    },
                    {
                        "title": "Aeropuerto Palma de Mallorca",
                        "description" :"Llevamos establecidos en Mallorca desde el año 2015, realizando todo tipo de trabajos de mantenimiento (tratamientos de acero,patologías de hormigón e impermeabilizaciones) en el Aeropuerto de Palma y Tirme (incineradora de basuras).",
                        "services": [
                            "Tratamiento de Impermeabilizaciones",
                            "Patologías de Hormigón",
                            "Trabajo de Protecciones Pasiva",
                        ],
                        "img": "PMI.jpg",
                        "alt": "Aeropuerto Palma de Mallorca",

                    },
                    {
                        "title": "El puente Samuel De Champlain",
                        "description" :"Puente de 3.440m m de longitud que une Montreal (Canadà) con la ribera del sur. " +
                            "Ejecuciòn del tratamiento anticorrosivo de su esctructura.",
                        "services": [
                            "Trabajo de Protección Anticorrosiva"
                        ],
                        "img": "champlain.jpg",
                        "alt": "El puente Samuel De Champlain.",

                    },
                    {
                        "title": "Estadio de Fútbol Manuel Ruíz de Lopera",
                        "description" :"Centro Internacional de Estadio del Real Betis Balompiè." +
                            "Reparaciones en hormigones y refuerzo estructural.",
                        "services": [
                            "Patologías de Hormigones",
                            "Refuerzos Estructurales",
                        ],
                        "img": "estadion1.jpg",
                        "alt": "Estadio de Fútbol Manuel Ruíz de Lopera",

                    },
                    {
                        "title": "Estadio El Arcangel",
                        "description" :"Centro Internacional de Estadio del Córdoba Club de Fútbol." +
                            "Reparaciones en hormigones y refuerzo estructural. Reparacione de patologìa de hormigones.",
                        "services": [
                            "Protección Anticorrosiva"
                        ],
                        "img": "estadion2.jpg",
                        "alt": "Estadio El Arcangel",

                    },
                    {
                        "title": "Gran hipódromo de Andalucía",
                        "description" :"Centro Internacional de Hipódromo situado en Dos Hermanas." +
                            "Refuerzo estructural con fibra de carbono",
                        "services": [
                            "Refuerzos Estructurales"
                        ],
                        "img": "hipodrom.jpg",
                        "alt": "Gran hipódromo de Andalucía",

                    },
                    {
                        "title": "Centro de convenciones El Toyo",
                        "description" :"Palacio de congresos de Granada." +
                            "Realizacion de suelos de resina.",
                        "services": [
                            "Pavimentos Industriales"
                        ],
                        "img": "tunel.jpg",
                        "alt": "Centro de convenciones El Toyo",

                    },
                    {
                        "title": "Estación depuradora de Ranilla",
                        "description" :"Estaciòn depuradora de aguas residuales en Alcalà de Guadaíra." +
                            "Impermeabilizaciòn de digestores.",
                        "services": [
                            "Tratamiento de Impermeabilizaciones",
                            "Depòsitos y Tanques",
                        ],
                        "img": "depuradora.jpg",
                        "alt": "Estación depuradora de Ranilla",

                    },
                    {
                        "title": "Rehabilitación del Palacio de San Telmo",
                        "description" :"Palacio barroco ubicado en Sevilla." +
                            "Restauracion de techos de madera y pinturas decorativas.",
                        "services": [
                            "Trabajo de Protecciones Pasiva"
                        ],
                        "img": "palacio.jpg",
                        "alt": "Palacio de San Telmo",

                    },
                    {
                        "title": "Puente de Ventas",
                        "description" :"Puente emblemàtico de Madrid." +
                            "Proteccion anticorrosiva de su estructura.",
                        "services": [
                            "Trabajo de Protección Anticorrosiva"
                        ],
                        "img": "ventas.jpg",
                        "alt": "Puente de Ventas",

                    },
                    {
                        "title": "Factoría Heineken de Sevilla",
                        "description" :"Suelos de resina en càmaras frigorìficas.",
                        "services": [
                            "Pavimentos Industriales"
                        ],
                        "img": "hainiken.jpg",
                        "alt": "Factoría Heineken de Sevilla",

                    },
                    {
                        "title": "Palacio Martin Carpena",
                        "description" :"Palacio de deportes de Màlaga. Rehabilitación de elementos estructurales.",
                        "services": [
                            " Refuerzos Estructurales",
                            " Tratamientos Preventivos",
                        ],
                        "img": "pMartin.jpg",
                        "alt": "Palacio Martin Carpena",

                    }
                ]
            }
        },
        mounted() {
            gsap.from('.card', {
                duration: 0.5,
                opacity: 0,
                scale: 0,
                y: 200,
                ease: 'power1',
                stagger: {
                    from: 'edges',
                    each: 0.1
                }
            })
        }
    };
</script>

<page-query>

</page-query>
