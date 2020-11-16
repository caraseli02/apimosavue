<template>
  <ClientOnly>
    <article
        class="z-0 relative setGradient w-full flex flex-col md:flex-row items-center justify-center md:justify-between setSize bg-black min-h-screen">

      <!--            <video-embed width="400px" :params="{autoplay: 1}" src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed>-->
      <g-image src="@/assets/images/metropol.jpg"
               class="absolute top-0 content lg:static content-center  flex-1 h-full lg:w-2/3 lg:h-2/3 xl:w-2/3 xl:h-2/3 object-cover rounded-lg self-end opacity-50 lg:opacity-100"
      />
      <div
          data-aos-duration="3000"
          data-aos="fade-right"
          class="px-10 max-w-4xl relative z-10 text-left lg:mx-12"
      >
        <h1 class="z-10 title md:text-4xl font-black text-white leading-tight mb-2">Grupo Apimosa</h1>
        <h2
            class="z-10 subtitle md:text-2xl font-condensed text-gray-300 leading-tight mb-8 font-light"
        >
          Lleva más de 50
          años en el mercado, investigando, desarrollando y siguiendo el resultado de sus trabajos a
          lo largo del tiempo.
        </h2>
        <g-link to="/servicios/"
                class="z-10 h-full inline-block bg-white font-condensed text-primary py-1 px-3 text-base rounded hover:shadow-lg hover:bg-blue-600 hover:text-white">
          Servicios
        </g-link>
      </div>
    </article>
  </ClientOnly>
</template>

<script>

export default {
  name: "IntroIndex",
  methods: {
    ready(event) {
      this.player = event.target
    },
    playing(event) {
      // The player is playing a video.
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = 'another video id'
    },
    stop() {
      this.player.stopVideo()
    },
    pause() {
      this.player.pauseVideo()
    }
  }
}
</script>

<style scoped>
.title {
  font-size: clamp(2.5rem, 2.5vw, 5rem);
  font-weight: bold;
}

.subtitle {
  font-size: clamp(1.5rem, 1.5vw, 2.5rem);
  font-weight: normal;
  max-width: 350px;
}

.setSize {
  min-height: calc(100vh - 80px);
}

.setGradient:before {
  content: '';
  position: absolute;
  width: 75%;
  height: 80%;
  background-image: url("../../assets/gradientIndex.svg");
  background-repeat: no-repeat;
  background-position: right top;
  background-size: contain;
  top: -10px;
  right: 0;
  z-index: 0;
}

.setGradient:after {
  content: '';
  position: absolute;
  width: 75%;
  height: 100%;
  background-image: url("../../assets/gradientBlack.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  bottom: 0px;
  left: -5px;
  z-index: 0;
}
</style>
