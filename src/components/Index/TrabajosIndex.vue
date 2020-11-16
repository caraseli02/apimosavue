<template>
    <div class=" bg-white md:py-24 md:px-12 py-12 px-6">
        <div class="max-w-xl mx-auto text-center py-6 relative">
            <h2 class="mb-2 font-black text-xl lg:text-3xl text-gray-900">Trabajos realizados por <br/> Grupo
                Apimosa</h2>
            <g-link to="/trabajos/">
                <h3 class="mb-6 text-base lg:text-lg text-black  hover:text-gray-400">Lista completa disponible en
                    <span class="text-base p-2 bg-blue-700 rounded-full
                                transition duration-500 ease-in-out  hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110"
                    >Trabajos</span>
                </h3>
            </g-link>
          <IconScroll>
            <div class="lg:hidden mouse absolute transform -translate-x-40 left-0 bottom-0 z-40"></div>
          </IconScroll>
        </div>

        <div class="conatiner  mx-auto overflow-scroll">
            <div class="grid grid-flow-col auto-cols-max lg:auto-cols-auto gap-4">
                <div
                        class="max-w-xs min-w-full"
                        v-for="(work, index) in works" :key="index"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                >
                    <div>
                        <div
                                class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg"
                        >
                            <div
                                    class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500"
                                    v-for="(service, index) in work.services" :key="index"
                                    data-aos="fade-left"
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
                            <div class="py-2 px-2 h-40 flex flex-col justify-center items-center">
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
    import IconScroll from "../utils/iconScroll";

    export default {
        name: "TrabajosIndex",
      components: {IconScroll},
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
