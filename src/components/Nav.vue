<template>
  <header class="w-full z-40 top-0 px-4 bg-white flex flex-wrap items-center setGradient xs:mb-5">
    <div class=" h-full flex-1 flex justify-between items-center">
      <g-link to="/" class="home-link">
        <Logo/>
      </g-link>
    </div>
    <label for="menu-toggle" class="cursor-pointer md:hidden block p-3">
      <svg class="fill-current m-2"
           xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>Apimosa</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle"/>

    <div class="z-20 hidden md:flex md:items-center md:w-auto w-full" id="menu">
      <nav>
        <ul class="md:flex items-center justify-between text-base text-gray-700">
          <li
              v-for="(link, index) in links" :key="index"
              class="flex justify-center items-center"
          >
            <g-link class="transition duration-500 ease-in-out  hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110
                         text-white rounded-lg md:p-4 p-3 block capitalize" :to="link">
              {{ link }}
            </g-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="z-10 block absolute top-0 right-0  mr-3 mt-24 flex flex-col md:flex-row z-10" id="media">
      <a class="shadow ml-2 text-black py-2 px-2 text-xs md:text-sm rounded-full hover:shadow-lg"
         href="https://wa.me/34615-240-662"><img src="../assets/icons/whatsapp.svg" height="32" width="32"
                                                 alt="whatsapp"/></a>
      <a href="mailto:apimosa@apimosa.es"
         class="md:blockHover shadow flex justify-center items-center ml-2 text-black py-2 px-2 text-xs md:text-sm rounded-full hover:shadow-lg">
        <img src="../assets/icons/gmail.svg" height="32" width="32" alt="gmail"/>
        <span class="hidden ml-2 bg-white py-2 px-2 rounded-full">apimosa@apimosa.es</span>
      </a>
      <a href="tel:+34954-143-950"
         class="md:blockHover shadow flex justify-center items-center ml-2 text-black py-2 px-2 text-xs md:text-sm rounded-full hover:shadow-lg">
        <img src="../assets/icons/call.svg" height="32" width="32" alt="telefone"/>
        <span class="hidden ml-2 bg-white py-2 px-2 rounded-full">954143950</span>
      </a>
    </div>
  </header>
</template>

<script>
import Logo from "../components/Logo";

export default {
  components: {
    Logo
  },
  data() {
    return {
      links: [
        "servicios",
        "trabajos",
        "contact"
      ]
    }
  },
};
</script>

<style scoped>
.setGradient {
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(18, 44, 111, 1) 50%, rgba(18, 44, 111, 1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(18, 44, 111, 1) 50%, rgba(18, 44, 111, 1) 100%);
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 20%, rgba(18, 44, 111, 1) 50%, rgba(18, 44, 111, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000", endColorstr="#122c6f", GradientType=1);
}

#menu-toggle:checked + #menu {
  display: block;
  z-index: 99;
  width: 100%;
  margin: 0 auto;
  background-color: transparent;
}

#menu-toggle:checked + #media {
  display: none;
  opacity: 0;
}

.blockHover span {
  display: none;
  transition: display 1s ease-in;
}

.blockHover:hover span {
  display: inline-block;

}

@keyframes display {
  from {
    display: none;
  }
  to {
    display: inline-block
  }
}

</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
