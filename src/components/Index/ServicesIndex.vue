<template>
  <section class="conatiner relative mx-auto overflow-scroll py-24 bg-black pl-4">
    <article
        class="relative grid grid-flow-col auto-cols-max lg:auto-cols-auto gap-4">

      <figure
          class="max-w-xs gradient overflow-hidden shadow-lg j-self relative"
          v-for="service in services"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
      >
        <g-image
            :src="require(`!!assets-loader!@images/${service.img}`)"
            :alt="service.alt"
            fit="cover"
            class="h-64"
        />
        <figcaption class="w-full px-6 py-4 rounded-r-lg

        ">
          <h2 class="font-bold text-white text-xl mb-2 setTextSize h-10">{{ service.title }}</h2>
          <div class="setGradient flex justify-center items-start flex-col pl-2 rounded-r-lg
                      absolute h-48 w-64 mt-16 top-0 left-0
          ">
            <h3 v-for="(title, index) in service.services"
                :key="index"
                class="font-light gradient text-white mb-4 px-2 rounded-r-lg"
                data-aos="flip-up"
            >
              {{ title }}
            </h3>
          </div>
          <!--<g-link
              class="text-center w-12 absolute top-0 right-0 mr-4 mt-4 text-lg font-bold
                                transition duration-500 ease-in-out  bg-white text-blue-600 hover:bg-blue-500 hover:text-black transform hover:-translate-y-1 hover:scale-110
                                text-white rounded-full md:p-2 p-1 block capitalize">
            >
          </g-link>-->
        </figcaption>
      </figure>
      <g-link to="/servicios"
              class="transform translate-y-16 ml-4 px-3 py-3 absolute left-0 bottom-0 inline-block bg-blue-600 font-condensed text-primary text-base rounded-full hover:shadow-lg hover:bg-blue-600 hover:text-white">
        Lista de Servicios <span class="text-base p-2 ">&#8594;</span>
      </g-link>
      <IconScroll>
        <div class="lg:hidden mouse absolute left-0 top-0"></div>
      </IconScroll>
      <!--<span
              class="px-1 py-1 mt-16 ml-2 absolute left-0 top-0 inline-block bg-black font-condensed text-white text-base rounded-full hover:shadow-lg">
        Scroll <span class="text-base p-2 ">&#8594;</span><span class="text-base p-2 ">&#8594;</span>
      </span>-->
    </article>
  </section>
</template>

<script>
import IconScroll from "../utils/iconScroll";

export default {
  name: "services",
  components: {IconScroll},
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
      ],
      window: {
        width: 0,
        height: 0,
      },
    }
  },
  created() {
    if (process.isClient) {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    // We need to keep track of faded in elements so we can apply fade out later in CSS
    document.addEventListener('animationstart', function (e) {
      if (e.animationName === 'fade-in') {
        e.target.classList.add('did-fade-in');
      }
    });

    document.addEventListener('animationend', function (e) {
      if (e.animationName === 'fade-out') {
        e.target.classList.remove('did-fade-in');
      }
    });
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
}
</script>

<style scoped lang="scss">

.setSvg:before {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  z-index: 10;
  content: '';
  background-image: url("../../assets/svgService.svg");
  background-repeat: no-repeat;
  background-position: bottom;
}

figcaption > h3 {
  font-weight: bold;
  margin-bottom: 1rem;
}

figcaption > h3:before {
  font-weight: lighter;
  display: inline-block;
  padding-right: 10px;
  vertical-align: middle;
}

.j-self {
  justify-self: center;
}

.setTextSize {
  font-size: clamp(1.2rem, 1.5vw, 2rem);
}

figure {
  padding: 10px;
  border-radius: 15px;
  color: white;
}

.gradient {
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(49, 130, 206, 1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(49, 130, 206, 1) 100%);
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(49, 130, 206, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000", endColorstr="#3182ce", GradientType=1);
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
