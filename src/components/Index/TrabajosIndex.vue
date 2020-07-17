<template>
    <div class="bg-white md:py-24 md:px-12 py-12 px-6">

        <div class="max-w-xl mx-auto text-center">
            <h2 class="mb-2 font-black text-xl lg:text-3xl text-gray-900">Trabajos realizados por <br/> Grupo
                Apimosa</h2>
            <g-link to="/trabajos/">
                <h3 class="mb-6 text-base lg:text-lg text-black  hover:text-gray-400">Lista completa disponible en
                    <span class="text-base p-2 bg-blue-700 rounded-full
                                transition duration-500 ease-in-out  hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"
                    >Trabajos</span>
                </h3>
            </g-link>
        </div>

        <div class="conatiner mx-auto">
            <div class="flex flex-wrap relative">
                <div
                        class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4"
                        v-for="(work, index) in works" :key="index"
                >
                    <div>
                        <div
                                class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg"
                        >
                            <div
                                    class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500"
                                    v-for="(service, index) in work.services" :key="index"
                            >
                                {{service}}
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
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "TrabajosIndex",
        data() {
            return {
                works: [
                    {
                        "title": "Rencinto Ferial de Santa Cruz de Tenerife",
                        "description": "Monumento emblemático de Sevilla en el que impermeabilizamos con poliuretano proyectado toda su estructura de madera.",
                        "services": [
                            "Protección Anticorrosiva"
                        ],
                        "img": "tenerife.jpg",
                        "alt": "Rencinto Ferial de Santa Cruz de Tenerife",

                    },
                    {
                        "title": "Ciudad de las Artes y las Ciencias",
                        "description": "Complejo arquitectónico cultural diseñado por Santiago Calatrava. Realización de distintos pavimentos en resina y hormigón.",
                        "services": [
                            "Pavimentos Industriales"
                        ],
                        "img": "ciudad.jpg",
                        "alt": "Ciudad de las Artes y las Ciencias",

                    },
                    {
                        "title": "Las Setas De Sevilla",
                        "description": " Monumento emblemático de Sevilla en el que impermeabilizamos con poliuretano proyectado toda su estructura de madera.",
                        "services": [
                            "Tratamiento de Impermeabilizaciones"
                        ],
                        "img": "metropol.jpg",
                        "alt": "Las Setas De Sevilla",

                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>
