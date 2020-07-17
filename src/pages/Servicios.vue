<template class="bg-gray-100">
    <Layout>
        <serviceList/>
        <transition
                appear
                @before-enter="beforeEnter"
                @enter="enter"
                :css="false"
        >
            <article
                    class="relative py-12 px-2 md:px-6 xl:px-12
                        grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4 ">

                <figure
                        v-for="(service, index) in getServices" :key="index"
                        v-show="service.show"
                        class="max-w-sm overflow-hidden shadow-lg j-self"
                >
                    <g-image
                            :src="require(`!!assets-loader!@images/${service.img}`)"
                            :alt="service.alt"
                            fit="cover"
                            class="h-64"
                    />
                    <figcaption class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{{service.title}}</div>
                        <h3
                                class="italic"
                                v-for="(title, index) in service.services"
                                :key="index"
                        >{{title}}</h3>
                    </figcaption>
                </figure>
                <!--<figure
                        v-show="selectedService === 'Lista Completa' || selectedService === 'Ingeniería'"
                        class="max-w-sm overflow-hidden shadow-lg j-self"
                >
                    <g-image src="../assets/images/ingenieria2.jpg"
                             height="335.48"
                             width="480"
                             alt="Ingeniería Constructiva Apimosa"
                             fit="cover"
                    />
                    <figcaption class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Ingeniería Constructiva</div>
                        <p class="text-gray-700 text-base">
                        <h3 class="italic">Prescripciones Técnicas</h3>
                        <h3 class="italic">Diagnosis de Superficies</h3>
                        <h3 class="italic">Especificaciones de Nuevas Tecnologías</h3>
                        <h3 class="italic">Estudios y Seguimientos de Mantenimientos Preventivos</h3>
                        </p>
                    </figcaption>
                    &lt;!&ndash; <figcaption class="px-6 py-4">
                         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Ciudad de las Artes y las Ciencias </span>
                     </figcaption>&ndash;&gt;
                </figure>
                <figure
                        v-show="selectedService === 'Lista Completa' || selectedService === 'Protección'"
                        class="max-w-sm overflow-hidden shadow-lg j-self"
                >
                    <g-image src="../assets/images/corrosivo.jpg"
                             height="335.48"
                             width="480"
                             fit="cover"
                             alt="Trabajo de Protección Anticorrosiva Apimosa"/>
                    <figcaption class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Trabajo de Protección Anticorrosiva</div>
                        <p class="text-gray-700 text-base">
                        <h3 class="apimosa__popups">Puentes ,
                            Estructuras</h3>
                        <h3 class="apimosa__popups">Tuberías ,
                            Conductos</h3>
                        <h3 class="apimosa__popups">Tanques ,
                            Aerogeneradores</h3>
                        </p>
                    </figcaption>
                    &lt;!&ndash;<figcaption class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Puente del Alamillo</span>
                    </figcaption>&ndash;&gt;
                </figure>
                <figure
                        v-show="selectedService === 'Lista Completa' || selectedService === 'Protección'"
                        class="max-w-sm overflow-hidden shadow-lg j-self"
                >
                    <g-image src="../assets/images/superficies3.jpg"
                             height="335.48"
                             width="480"
                             fit="cover"
                             alt="Preparación de Superficies Apimosa"/>
                    <figcaption class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> Preparación de Superficies</div>
                        <p class="text-gray-700 text-base">
                        <h3>Chorro de Arena Fijo</h3>
                        <h3>Chorro de Arena Móvil</h3>
                        <h3>Hidrolimpiezas</h3>
                        </p>
                    </figcaption>
                    <figcaption class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
                    </figcaption>
                </figure>
                <figure
                        v-show="selectedService === 'Lista Completa' || selectedService === 'Protección'"
                        class="max-w-sm overflow-hidden shadow-lg j-self"
                >
                    <g-image src="../assets/images/protecciones1.jpg"
                             height="335.48"
                             width="480"
                             fit="cover"
                             alt="Trabajo de Protecciones Pasiva Apimosa"/>
                    <figcaption class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> Trabajo de Protecciones Pasiva</div>
                        <p class="text-gray-700 text-base">
                        <h3>Pinturas Intumescentes</h3>
                        <h3>Mortero Ignífugo</h3>
                        <h3>Sellado Intumescentes</h3>
                        <h3>Sellado de Juntas Ignífugas</h3>
                        </p>
                    </figcaption>
                    <figcaption class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
                    </figcaption>
                </figure>
                <figure
                        v-show="selectedService === 'Lista Completa' || selectedService === 'Hormigones'"
                        class="max-w-sm overflow-hidden shadow-lg j-self"
                >
                    <g-image src="../assets/images/hormigones1.jpg"
                             height="335.48"
                             width="480"
                             fit="cover"
                             alt="Patologías de Hormigones Apimosa"/>
                    <figcaption class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> Patologías de Hormigones</div>
                        <p class="text-gray-700 text-base">
                        <h3>Reparaciones de Hormigones</h3>
                        <h3>Morteros y Resinas de Alta Resistencia</h3>
                        <h3>Tratamientos de Fisuras y Grietas</h3>
                        <h3>Protecciones Catódicas y Anódicas</h3>
                        </p>
                    </figcaption>
                    <figcaption class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
                    </figcaption>
                </figure>
                <figure
                        v-show="selectedService === 'Lista Completa' || selectedService === 'Hormigones'"
                        class="max-w-sm overflow-hidden shadow-lg j-self"
                >
                    <g-image src="../assets/images/hormigones2.jpg"
                             height="335.48"
                             width="480"
                             fit="cover"
                             alt="Patologías de Hormigones Apimosa"/>
                    <figcaption class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> Refuerzos Estructurales , Tratamientos Preventivos</div>
                        <p class="text-gray-700 text-base">
                        <h3>Fibra de Carbono</h3>
                        <h3>Anclajes</h3>
                        <h3>Morteros de alta resistencia</h3>
                        </p>
                    </figcaption>
                    <figcaption class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
                    </figcaption>
                </figure>
                <figure
                        v-show="selectedService === 'Lista Completa' || selectedService === 'Pavimentos'"
                        class="max-w-sm overflow-hidden shadow-lg j-self"
                >
                    <g-image src="../assets/images/pavimentos2.jpg"
                             height="335.48"
                             width="480"
                             fit="cover"
                             alt="Pavimentos Industriales Apimosa"/>
                    <figcaption class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> Pavimentos Industriales</div>
                        <p class="text-gray-700 text-base">
                        <h3>Mortero Cementoso , Mortero Cementoso-Epoxídico</h3>
                        <h3>Mortero Epoxídico , Mortero Epoxídico-Conductivo</h3>
                        <h3>Mortero Cementoso / Epoxídico de Fraguado Ultra Rápido</h3>
                        <h3>Sistemas Multicapas , Tratamientos Antipolvos</h3>
                        <h3>Morteros de altas prestaciones físicas y químicas</h3>
                        </p>
                    </figcaption>
                    <figcaption class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
                    </figcaption>
                </figure>
                <figure
                        v-show="selectedService === 'Lista Completa' || selectedService === 'Pavimentos'"
                        class="max-w-sm overflow-hidden shadow-lg j-self"
                >
                    <g-image src="../assets/images/decorativos1.jpg"
                             height="335.48"
                             width="480"
                             fit="cover"
                             alt="Pavimentos Decorativos Apimosa"/>
                    <figcaption class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> Pavimentos Decorativos</div>
                        <p class="text-gray-700 text-base">
                        <h3>Mortero Cementoso , Mortero Cementoso-Epoxídico</h3>
                        <h3>Mortero Epoxídico , Mortero Epoxídico-Conductivo</h3>
                        <h3>Mortero Epoxídico , Sistemas Multicapas</h3>
                        <h3>Morteros Autonivelantes con Adición de Cuarzocolor, Chips y
                            Microesferas</h3>
                        </p>
                    </figcaption>
                    <figcaption class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
                    </figcaption>
                </figure>
                <figure
                        v-show="selectedService === 'Lista Completa' || selectedService === 'Impermeabilizaciones'"
                        class="max-w-sm overflow-hidden shadow-lg j-self"
                >
                    <g-image src="../assets/images/imper1.jpg"
                             height="335.48"
                             width="480"
                             fit="cover"
                             alt="Tratamiento de Impermeabilizaciones Apimosa"/>
                    <figcaption class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> Tratamiento de Impermeabilizaciones de Cubiertas</div>
                        <p class="text-gray-700 text-base">
                        <h3>Revestimientos Elásticos a Base de Poliuretano</h3>
                        <h3>Revestimientos a Base de Poliureas</h3>
                        <h3>Revestimientos a Base de Epoxiflexibles</h3>
                        <h3>Revestimientos a Base de Membranas Colaminadas</h3>
                        </p>
                    </figcaption>
                    <figcaption class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
                    </figcaption>
                </figure>
                <figure
                        v-show="selectedService === 'Lista Completa' || selectedService === 'Impermeabilizaciones'"
                        class="max-w-sm overflow-hidden shadow-lg j-self"
                >
                    <g-image src="../assets/images/imper2.jpg"
                             height="335.48"
                             width="480"
                             fit="cover"
                             alt="Tratamiento de Impermeabilizaciones Apimosa"/>
                    <figcaption class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> Tratamiento de Impermeabilizaciones de Depòsitos y Tanques
                        </div>
                        <p class="text-gray-700 text-base">
                        <h3>Revestimientos Elásticos a Base de Poliuretano</h3>
                        <h3>Revestimientos a Base de Poliureas</h3>
                        <h3>Revestimientos a Base de Epoxiflexibles</h3>
                        <h3>Revestimientos a Base de Membranas Colaminadas</h3>
                        </p>
                    </figcaption>
                    <figcaption class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
                    </figcaption>
                </figure>
                <figure
                        v-show="selectedService === 'Lista Completa' || selectedService === 'Inyecciones'"
                        class="max-w-sm overflow-hidden shadow-lg j-self"
                >
                    <g-image src="../assets/images/inect2.jpg"
                             height="335.48"
                             width="480"
                             fit="cover"
                             alt="Inyecciones Apimosa"/>
                    <figcaption class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> Inyecciones</div>
                        <p class="text-gray-700 text-base">
                        <h3>Revestimientos Elásticos a Base de Poliuretano</h3>
                        <h3>Revestimientos a Base de Poliureas</h3>
                        <h3>Revestimientos a Base de Epoxiflexibles</h3>
                        <h3>Revestimientos a Base de Membranas Colaminadas</h3>
                        </p>
                    </figcaption>
                    <figcaption class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
                    </figcaption>
                </figure>
                <figure
                        v-show="selectedService === 'Lista Completa' || selectedService === 'Rehabilitación'"
                        class="max-w-sm overflow-hidden shadow-lg j-self"
                >
                    <g-image src="../assets/images/edificios1.jpg"
                             height="335.48"
                             width="480"
                             fit="cover"
                             alt="Rehabilitación de Edificios Apimosa"/>
                    <figcaption class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"> Rehabilitación de Edificios</div>
                        <p class="text-gray-700 text-base">
                        <h3>Inyecciones Consolidantes de Terreno</h3>
                        <h3>Inyecciones Aquareactivas</h3>
                        <h3>Tratamientos Mineralizadores</h3>
                        </p>
                    </figcaption>
                    <figcaption class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
                    </figcaption>
                </figure>-->
            </article>
        </transition>
    </Layout>
</template>

<script>
    import serviceList from "../components/serviceList";
    import {mapState} from "vuex";
    import gsap from 'gsap'

    export default {
        name: 'Blog',
        metaInfo: {
            title: "Apimosa",
        },
        data() {
            return {
                services: [
                    {
                        "title": "Ingeniería Constructiva",
                        "services": [
                            "Prescripciones Técnicas", "Diagnosis de Superficies",
                            "Especificaciones de Nuevas Tecnología",
                            "Estudios y Seguimientos de Mantenimientos Preventivos"
                        ],
                        "img": "ingenieria2.jpg",
                        "alt": "Ingeniería Constructiva Apimosa",
                        "show": "Ingeniería"
                    },
                    {
                        "title": "Trabajo de Protección Anticorrosiva",
                        "services": [
                            "Puentes , Estructuras",
                            "Tuberías , Conductos",
                            "Tanques, Aerogeneradores "
                        ],
                        "img": "corrosivo.jpg",
                        "alt": "Trabajo de Protección Anticorrosiva",
                        "show": "Protección"
                    },
                    {
                        "title": "Preparación de Superficies",
                        "services": [
                            "Chorro de Arena Fijo",
                            "Chorro de Arena Móvil",
                            "Hidrolimpiezas "
                        ],
                        "img": "superficies3.jpg",
                        "alt": "Trabajo de Protección Anticorrosiva",
                        "show": "Protección"
                    },
                    {
                        "title": "Trabajo de Protecciones Pasiva",
                        "services": [
                            "Pinturas Intumescentes",
                            "Mortero Ignífugo",
                            "Sellado Intumescentes",
                            "Sellado de Juntas Ignífugas"
                        ],
                        "img": "protecciones1.jpg",
                        "alt": "Trabajo de Protecciones Pasiva Apimosa",
                        "show": "Protección"
                    },
                    {
                        "title": "Patologías de Hormigones",
                        "services": [
                            "Reparaciones de Hormigones",
                            "Morteros y Resinas de Alta Resistencia",
                            "Tratamientos de Fisuras y Grietas",
                            "Protecciones Catódicas y Anódicas"
                        ],
                        "img": "hormigones1.jpg",
                        "alt": "Patologías de Hormigones Apimosa",
                        "show": "Hormigones"
                    },
                    {
                        "title": "Refuerzos Estructurales , Tratamientos Preventivo",
                        "services": [
                            "Fibra de Carbon",
                            "Anclajes",
                            "Morteros de alta resistencia"
                        ],
                        "img": "hormigones2.jpg",
                        "alt": "Refuerzos Estructurales , Tratamientos Preventivo Apimosa",
                        "show": "Hormigones"
                    },
                    {
                        "title": "Pavimentos Industriales",
                        "services": [
                            "Mortero Cementoso , Mortero Cementoso-Epoxídico",
                            "Mortero Epoxídico , Mortero Epoxídico-Conductivo",
                            "Mortero Cementoso / Epoxídico de Fraguado Ultra Rápido",
                            "Sistemas Multicapas , Tratamientos Antipolvos",
                            "Morteros de altas prestaciones físicas y químicas",
                        ],
                        "img": "pavimentos2.jpg",
                        "alt": "Pavimentos Industriales Apimosa",
                        "show": "Pavimentos"
                    },
                    {
                        "title": "Pavimentos Decorativos",
                        "services": [
                            "Mortero Cementoso , Mortero Cementoso-Epoxídico",
                            "Mortero Epoxídico , Mortero Epoxídico-Conductivo<",
                            "Mortero Epoxídico , Sistemas Multicapas",
                            "Morteros Autonivelantes con Adición de Cuarzocolor, Chips y Microesferas"
                        ],
                        "img": "decorativos1.jpg",
                        "alt": "Pavimentos Decorativos Apimosa",
                        "show": "Pavimentos"
                    },
                    {
                        "title": "Tratamiento de Impermeabilizaciones",
                        "services": [
                            "Revestimientos Elásticos a Base de Poliuretano",
                            "Revestimientos a Base de Poliureas<",
                            "Revestimientos a Base de Epoxiflexibles",
                            "Revestimientos a Base de Membranas Colaminadas"
                        ],
                        "img": "imper1.jpg",
                        "alt": "Tratamiento de Impermeabilizaciones Apimosa",
                        "show": "Impermeabilizaciones"
                    },
                    {
                        "title": "Tratamiento de Impermeabilizaciones de Depòsitos y Tanques",
                        "services": [
                            "Revestimientos Elásticos a Base de Poliuretano",
                            "Revestimientos a Base de Poliureas<",
                            "Revestimientos a Base de Epoxiflexibles",
                            "Revestimientos a Base de Membranas Colaminadas"
                        ],
                        "img": "imper2.jpg",
                        "alt": "Tratamiento de Impermeabilizaciones de Depòsitos y Tanques",
                        "show": "Impermeabilizaciones"
                    },
                    {
                        "title": "Inyecciones",
                        "services": [
                            "Revestimientos Elásticos a Base de Poliuretano",
                            "Revestimientos a Base de Poliureas",
                            "Revestimientos a Base de Epoxiflexibles",
                            "Revestimientos a Base de Membranas Colaminadas"
                        ],
                        "img": "inect2.jpg",
                        "alt": "Inyecciones",
                        "show": "Inyecciones"
                    },
                    {
                        "title": "Rehabilitación de Edificios",
                        "services": [
                            "Inyecciones Consolidantes de Terreno",
                            "Inyecciones Aquareactivas",
                            "Tratamientos Mineralizadores"
                        ],
                        "img": "edificios1.jpg",
                        "alt": "Rehabilitación de Edificios",
                        "show": "Rehabilitación"
                    }
                ]
            }
        },
        components: {
            serviceList,
        },
        computed: {
            ...mapState(['selectedService']),
            getServices() {
                if (this.selectedService === 'Lista Completa') {
                    return this.services
                } else {
                    return this.services.filter(service => service.show === this.selectedService)
                }
            },
        },
        methods: {
            beforeEnter(el) {
                el.style.opacity = 0
                el.style.transform = 'scale(0,0)'
            },
            enter(el, done) {
                gsap.to(el, {
                    duration: 1,
                    opacity: 1,
                    scale: 1,
                    onComplete: done
                })
            }
        }
    };
</script>

<style scoped>

    figcaption > h3 {
        font-style: italic;
        margin-bottom: 1rem;
    }

    figcaption > h3:before {
        content: "\2713";
        display: inline-block;
        padding-right: 10px;
        vertical-align: middle;
        font-weight: 700;
    }

</style>

<page-query>

</page-query>
