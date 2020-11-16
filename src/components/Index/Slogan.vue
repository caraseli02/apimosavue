<template>
    <div class="setBg text-white p-12">
        <div class="container mx-auto">
            <div class="flex flex-wrap justify-between items-center">
                <div class="text-center lg:text-right w-full md:w-auto">
                    <a class="inline-block bg-white text-blue-600 py-2 px-5 text-base rounded-full hover:shadow-lg
                              transition duration-500 ease-in-out  hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110"
                       href="https://wa.me/34615-240-662"
                            >Chat con un ajente
                        <img class="inline-block" src="@/assets/icons/whatsapp.svg" height="16" width="16"
                             alt="whatsapp"/>
                    </a>
                </div>
                <div class="text-center lg:text-left w-full my-6 lg:mb-0 lg:w-auto">
                    <g-link to="/contact">
                        <strong class="font-black text-lg md:text-3xl">
                            ¿Buscas una empresa profesional para tu obra?
                        </strong>
                    </g-link>
                </div>
                <div class="text-center lg:text-right w-full md:w-auto">
                    <g-link class="inline-block bg-white text-blue-600 py-2 px-5 text-base rounded-full hover:shadow-lg
                                    transition duration-500 ease-in-out  hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110"
                            to="/contact">Contactar
                    </g-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Slogan"
    }
</script>

<style scoped>
.setBg{
  background-color: #122C6F;
}
</style>
