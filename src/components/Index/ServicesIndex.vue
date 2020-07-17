<template>
    <section class="w-full flex justify-around bg-gray-100">
        <article
                class="relative  pb-20 pt-10 px-2 md:px-6 xl:px-12 grid grid-rows-1 grid-cols-1 xl:grid-cols-3  gap-4">

            <figure
                    class="max-w-sm overflow-hidden shadow-lg j-self"
                    v-for="service in services"
            >
                <g-image
                        :src="require(`!!assets-loader!@images/${service.img}`)"
                        :alt="service.alt"
                        fit="cover"
                        class="h-64"
                />
                <figcaption class="px-6 py-4">
                    <h2 class="font-bold text-xl mb-2">{{service.title}}</h2>
                    <h3 v-for="(title, index) in service.services"
                        :key="index"
                        class="italic"
                    >
                        {{title}}
                    </h3>

                </figcaption>
            </figure>
            <g-link to="/servicios"
                    class="mb-4 mr-4 px-3 py-3 absolute right-0 bottom-0 inline-block bg-blue-600 font-condensed text-primary text-base rounded-full hover:shadow-lg hover:bg-blue-600 hover:text-white">
                Lista de Servicios <span class="text-base p-2 ">&#8594;</span>
            </g-link>
        </article>
    </section>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "services",
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
                ]
            }
        },
    }
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

    .j-self {
        justify-self: center;
    }
</style>
