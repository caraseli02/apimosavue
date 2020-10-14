<template>
  <Layout class="">
    <section>
      <div>
        <IntroIndex/>
        <ServicesIndex/>
      </div>
      <Slogan/>
      <intersect @enter="showTrabajos = true">
        <div>
          <TrabajosIndex v-if="showTrabajos"/>
        </div>
      </intersect>
    </section>
  </Layout>
</template>

<script>
import ServicesIndex from "../components/Index/ServicesIndex";
import IntroIndex from "../components/Index/IntroIndex";
import Slogan from "../components/Index/Slogan";
import TrabajosIndex from "../components/Index/TrabajosIndex";
import gsap from 'gsap'
import Intersect from 'vue-intersect'

export default {
  name: 'Index',
  components: {TrabajosIndex, Slogan, IntroIndex, ServicesIndex, Intersect},
  metaInfo: {
    title: "Apimosa pinturas y recubrimientos "
  },
  data() {
    return {
      showTrabajos: false
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'scale(0,0)'
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        scale: 1,
        onComplete: done
      })
    }
  }
};

</script>

<style scoped>

.vh20 {
  height: 180px;
}

.apimosa__popups {
  font-style: italic;
}

</style>

<page-query>

</page-query>
