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

                <div>
                    <transition name="modal">
                        <div v-if="isOpen" class="relative">

                            <div class="relative overlay flex flex-col justify-center items-center"
                                 @click.self="isOpen = false">
                                <div class=" relative w-64 mb-4 max-w-sm rounded overflow-hidden shadow-lg bg-orange-100">
                                    <a href="https://www.google.com/maps/place/Apimosa+S+L/@37.467531,-5.6443901,15z/data=!4m2!3m1!1s0x0:0xefb6047254d73108?sa=X&ved=2ahUKEwig1arCwtbpAhUEnVwKHQwJDZkQ_BIwCnoECBIQCA">
                                        <div class="px-6 py-4">
                                            <div class="font-bold text-xl mb-2">Sevilla</div>
                                            <p class="text-gray-700 text-base">
                                                Calle Real, 66, 41410 Carmona, Sevilla
                                            </p>
                                            <g-image src="../assets/img/gmaps.png"
                                                     width="50" height="50"
                                                     alt="Gmaps icon"
                                            />
                                        </div>
                                    </a>
                                    <div class="px-6 py-4">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><a
                                                href="tel:+34954-143-950"><span> &#9742; </span>954143950</a></span>
                                    </div>
                                    <button @click.self="isOpen = false" class="absolute right-0 top-0 mr-2  z-10">
                                        &#10005;
                                    </button>
                                </div>
                                <div class=" w-64 mb-4 max-w-sm rounded overflow-hidden shadow-lg bg-orange-100">
                                    <a href="https://www.google.com/maps/place/Apimosa+S+L/@37.467531,-5.6443901,15z/data=!4m2!3m1!1s0x0:0xefb6047254d73108?sa=X&ved=2ahUKEwig1arCwtbpAhUEnVwKHQwJDZkQ_BIwCnoECBIQCA">
                                        <div class="px-6 py-4">
                                            <div class="font-bold text-xl mb-2">Malaga</div>
                                            <p class="text-gray-700 text-base">

                                            </p>
                                        </div>
                                    </a>
                                    <div class="px-6 py-4">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><a
                                                href="tel:+34615-240-662"><span> &#9742; </span>615240662</a></span>
                                    </div>
                                </div>
                                <div class=" w-64 mb-4 max-w-sm rounded overflow-hidden shadow-lg bg-orange-100">
                                    <a href="https://www.google.com/maps/place/Apimosa+S+L/@37.467531,-5.6443901,15z/data=!4m2!3m1!1s0x0:0xefb6047254d73108?sa=X&ved=2ahUKEwig1arCwtbpAhUEnVwKHQwJDZkQ_BIwCnoECBIQCA">
                                        <div class="px-6 py-4">
                                            <div class="font-bold text-xl mb-2">Mallorca</div>
                                            <p class="text-gray-700 text-base">

                                            </p>
                                        </div>
                                    </a>
                                    <div class="px-6 py-4">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                            <a href="tel:+34674-227-938">
                                                <span> &#9742; </span>674227938</a>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </transition>
                </div>

                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                        <h4 class="font-condensed pb-4">Legal</h4>
                        <g-link to="/priva/" class="text-sm text-gray-800 py-1">Política de privacidad</g-link>
                        <g-link to="/terminos/" class="text-sm text-gray-800 py-1">Términos y condiciones</g-link>
                        <g-link to="/cookies/" class="text-sm text-gray-800 py-1">Cookies</g-link>
                    </div>
                    <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                        <h4 class="font-condensed pb-4">Quienes</h4>
                        <a href="https://empresite.eleconomista.es/APIMOSA.html#" class="text-sm text-gray-800 py-1">Información
                            de la empresa</a>
                        <a href="#" class="text-sm text-gray-800 py-1">Historia</a>
                    </div>
                    <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                        <h4 class="font-condensed pb-4">Servicios</h4>
                        <g-link to="/blog/" class="text-sm text-gray-800 py-1">Ingenieria</g-link>
                        <g-link to="/blog/" class="text-sm text-gray-800 py-1">Construccion</g-link>
                        <g-link to="/blog/" class="text-sm text-gray-800 py-1">Rehabilitacion</g-link>
                    </div>
                    <div class="md:w-1/4 flex flex-col mb-12 md:mb-0">
                        <h4 class="font-condensed pb-4">Direcciones</h4>
                        <button
                                @click="isOpen = !isOpen"
                                class="text-sm text-gray-800 py-1 inline-flex"
                        >Localización de la oficina
                        </button>
                        <g-link to="/contact/" class="text-sm text-gray-800 py-1">Contactar</g-link>
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
        },
        data: function () {
            return {
                isOpen: false
            };
        }
    };
</script>

<style scoped>


</style>

<style lang="scss">


    .modal {
        width: 500px;
        margin: 0px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px 3px;
        transition: all 0.2s ease-in;
        font-family: Helvetica, Arial, sans-serif;
    }

    .fadeIn-enter {
        opacity: 0;
    }

    .fadeIn-leave-active {
        opacity: 0;
        transition: all 0.2s step-end;
    }

    .fadeIn-enter .modal,
    .fadeIn-leave-active.modal {
        transform: scale(1.1);
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #00000094;
        z-index: 999;
        transition: opacity 0.2s ease;
    }


</style>


<static-query>

</static-query>
