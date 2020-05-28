<template>
    <header class=" relative px-8 py-4 bg-white flex flex-wrap items-center bg-blue-900 xs:mb-1">
        <div class=" h-full flex-1 flex justify-between items-center">
            <g-link to="/" class="home-link"
            >
                <Logo/>
            </g-link>
        </div>

        <label for="menu-toggle" class="cursor-pointer md:hidden block p-3 bg-blue-900">
            <svg class="fill-current text-gray-900 m-2"
                 xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>Apimosa</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle"/>

        <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
            <nav>
                <ul class="md:flex items-center justify-between text-base text-gray-700">
                    <li class="flex justify-center items-center"><g-link class="hover:text-gray-400 text-white rounded-lg md:p-4 p-3 block " to="/blog">Servicios</g-link></li>
                    <li class="flex justify-center items-center"><g-link class="hover:text-gray-400 text-white rounded-lg md:p-4 p-3 block" to="/galleries/">Trabajos</g-link></li>
<!--                    <li class="flex justify-center items-center"><g-link class="hover:text-gray-400 text-white rounded-lg md:p-4 p-3 block" to="/conocenos">Conócenos</g-link></li>-->
                    <li class="flex justify-center items-center"><g-link class="hover:text-gray-400 text-white rounded-lg md:p-4 p-3 block" to="/contact">Contact</g-link></li>
                </ul>
            </nav>
        </div>
        <div class="absolute bottom-0 right-0 -mb-5 mr-5 flex z-10">
            <a href="tel:+34954-143-950" class="bg-white text-black py-2 px-4 text-xs md:text-sm rounded-full hover:shadow-lg"><span> &#9742; </span>954143950</a>
        </div>
    </header>
</template>

<script>
    import Logo from "../components/Logo";

    export default {
        components: {
            Logo
        }
    };
</script>

<style scoped>
    #menu-toggle:checked + #menu {
        display: block;
        z-index: 99;
        background-color: #294364;
        width: 100%;
        margin: 0 auto;
    }

</style>

<static-query>
    query {
    metadata {
    siteName
    }
    }
</static-query>
