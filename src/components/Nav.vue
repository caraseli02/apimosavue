<template>
    <header class="lg:px-16 px-8 bg-white flex flex-wrap items-center ">
        <div class="flex-1 flex justify-between items-center">
            <g-link to="/" class="home-link"
            >
                <Logo :alt="$static.metadata.siteName"
                />
            </g-link>
        </div>

        <label for="menu-toggle" class="cursor-pointer md:hidden block p-3">
            <svg class="fill-current text-gray-900"
                 xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle"/>

        <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
            <nav>
                <ul class="md:flex items-center justify-between text-base text-gray-700 p-4 md:pt-0">
                    <li class="flex justify-center items-center"><g-link class="hover:shadow rounded-lg md:p-4 p-3 block" to="/blog">Blog</g-link></li>
                    <li class="flex justify-center items-center"><g-link class="hover:shadow rounded-lg md:p-4 p-3 block" to="/galleries/">My Style</g-link></li>
<!--                    <li><g-link class="md:p-4 py-3 px-0 block" to="/about">About</g-link></li>-->
                    <li class="flex justify-center items-center"><g-link class="hover:shadow rounded-lg md:p-4 p-3 block" to="/contact">Contact</g-link></li>
                </ul>
            </nav>
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
    }

</style>

<static-query>
    query {
    metadata {
    siteName
    }
    }
</static-query>
