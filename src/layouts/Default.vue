<template>
    <main class="layout">
        <Nav/>
        <transition name="fade" appear>
            <div class="">
                <slot/>
            </div>
        </transition>
        <div class="bg-gray-200 px-6 py-12">

            <footer class="container mx-auto">

                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                        <h4 class="font-condensed pb-4">Legal</h4>
                        <g-link to="/priva/" class="text-sm text-gray-800 py-1">Política de privacidad</g-link>
                        <g-link to="/terminos/" class="text-sm text-gray-800 py-1">Términos y condiciones</g-link>
                        <g-link to="/cookies/" class="text-sm text-gray-800 py-1">Cookies</g-link>
                    </div>
                    <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                        <h4 class="font-condensed pb-4">Quienes</h4>
                        <a href="conocenos" class="text-sm text-gray-800 py-1">Información de la empresa</a>
                        <a href="#" class="text-sm text-gray-800 py-1">Historia</a>
                    </div>
                    <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                        <h4 class="font-condensed pb-4">Servicios</h4>
                        <a href="#" class="text-sm text-gray-800 py-1">Ingenieria</a>
                        <a href="#" class="text-sm text-gray-800 py-1">Construccion</a>
                        <a href="#" class="text-sm text-gray-800 py-1">Rehabilitacion</a>
                    </div>
                    <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                        <h4 class="font-condensed pb-4">Direcciones</h4>
                        <a href="#" target="_blank" class="text-sm text-gray-800 py-1">Localización de la oficina</a>
                        <a href="#" target="_blank" class="text-sm text-gray-800 py-1">Contactar</a>
                    </div>
                </div>

                <div class=" pt-12">
                    <div class="w-full md:w-1/2">
                        <div class="flex justify-around">
                            <g-image
                                    src="../assets/img/Blogo2.jpg"
                                    width="150px"
                                    fit="cover"
                            />
                            <g-image
                                    src="../assets/img/ohsas.jpg"
                                    width="150px"
                                    fit="cover"
                            />
                            <!--                            <p class="text-sm text-gray-700">Copyright © 2020 GruCompany Name</p>-->
                            <!--                            <p class="text-xs text-gray-700 mt-2">Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.</p>-->
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </main>
</template>

<script>

    import Nav from "../components/Nav";

    export default {
        components: {
            Nav
        }
    };
</script>

<style scoped>


</style>

<style lang="scss">


</style>


<static-query>

</static-query>
