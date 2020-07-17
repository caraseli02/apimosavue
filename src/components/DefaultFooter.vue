<template>
    <div class="bg-gray-200 px-6 py-6">
        <footer class="container h-full mx-auto">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                    <h4 class=" flex justify-center inline-block font-condensed text-primary py-2 px-5 text-base">
                        Legal</h4>
                    <g-link
                            v-for="(item , index) in legal" :key="index"
                            :to="item.link"
                            class="transition duration-500 ease-in-out  hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110
                         text-gray-700 rounded-lg md:p-4 p-3 block capitalize">
                        {{item.text}}
                    </g-link>

                </div>
                <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                    <h4 class="flex justify-center font-condensed pb-4">
                        <g-link to="/conocenos/"
                                class="inline-block bg-white font-condensed text-primary py-2 px-5 text-base rounded-full hover:shadow-lg hover:bg-blue-600 hover:text-white">
                            Quienes
                        </g-link>
                    </h4>
                </div>
                <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                    <h4 class="flex justify-center font-condensed pb-4">
                        <g-link to="/blog/"
                                class="inline-block bg-white font-condensed text-primary py-2 px-5 text-base rounded-full hover:shadow-lg hover:bg-blue-600 hover:text-white"
                        >
                            Servicios
                        </g-link>
                    </h4>
                    <!--<g-link to="/blog/" class="text-sm text-gray-800 py-1">Ingenieria</g-link>
                    <g-link to="/blog/" class="text-sm text-gray-800 py-1">Construccion</g-link>
                    <g-link to="/blog/" class="text-sm text-gray-800 py-1">Rehabilitacion</g-link>-->
                </div>
                <div class="md:w-1/4 flex flex-col md:mb-0">
                    <h4
                            class="flex justify-center inline-block font-condensed text-primary py-2 px-5 text-base"
                    >
                        Direcciones
                    </h4>
                    <!-- @click="isOpen = true"-->
                    <g-link to="/contact/"
                            class="transition duration-500 ease-in-out  hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110
                         text-gray-700 rounded-lg md:p-4 p-3 block capitalizes"
                    >Oficinas
                    </g-link>
                    <p class="px-4 py-2 p-2  text-xs" ><span
                            class="text-gray-900">Fax : </span>954-143-177</p>
                </div>
            </div>

            <div class="pt-0 md:pt-12 h-full mt-6">
                <div class="w-full flex justify-center items-center">
                    <div class="flex justify-around flex-row flex-wrap">
                        <g-image
                                v-for="(img, index) in certification" :key="index"
                                class="w-32 h-12 md:w-64 md:h-24 s mb-2"
                                :src="require(`!!assets-loader!@images/${img}`)"
                                alt="Bureau Veritas Certification"
                                fit="cover"
                        />
                    </div>
                </div>
            </div>
        </footer>
        <div class="w-full flex justify-between px-8 pb-2 text-xs xl:text-sm"><h2
                data-v-5325f94b=""><a href="https://www.linkedin.com/in/caraseli-vadislav-61549b136/">Built by
            VladWeb</a></h2>
            <nav class="justify-end">
                <span data-v-5325f94b="">Powered by: </span>
                <a href="https://gridsome.org/" title="Gridsome">Gridsome</a>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DefaultFooter",
        data() {
            return {
                legal: [
                    {
                        "link": "/priva/",
                        "text": "Política de privacidad"
                    },{
                        "link": "/terminos/",
                        "text": "Términos y condiciones"
                    },{
                        "link": "/cookies/",
                        "text": "Cookies"
                    }
                ],
                certification: [
                    "Blogo2.png", "Blogo.png", "ohsas.png"
                ]
            }
        },
    }
</script>

<style scoped>

</style>
