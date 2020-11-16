<template>
  <div v-if="window.width < 900"
       class=" transform -rotate-90 w-24 h-24 ml-4 absolute top-0 left-0 z-30 ">
    <div class="field">
      <!--Options of Scrolls
      Source: https://codepen.io/TKS31/pen/gOaKaxx
        -->
      <!--<div class="mouse"></div>
      <div class="scroll"></div>
      <div class="arrow"></div>
      -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "iconScroll",
  data() {
    return {
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
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  }
}
</script>

<style scoped lang="scss">

/*.container {
  width: 100%;
  height: 100%;
  background-color: #c9d6df;
  display: flex;
  align-items: center;
  justify-content: center;
}*/

.field {
  display: flex;
  align-items: start;
  justify-content: start;
  width: 30px;
  transform: translateX(350%);
}

.mouse {
  width: 20px;
  height: 70px;
  border: 3px solid #333;
  border-radius: 60px;
  position: relative;

  &::before {
    content: '';

    width: 12px;
    height: 12px;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    border-radius: 50%;
    opacity: 1;
    animation: wheel 4s infinite;
    -webkit-animation: wheel 4s infinite;
  }
}

@keyframes wheel {
  0% {
    opacity: 0;
    top: 10px;
  }
  50% {
    opacity: 1;
    top: 50px;
  }
  100% {
    opacity: 1;
    top: 10px;
  }
}

@-webkit-keyframes wheel {
  to {
    opacity: 0;
    top: 60px;
  }
}

.scroll {
  width: 60px;
  height: 60px;
  border: 2px solid #333;
  border-radius: 50%;
  position: relative;
  animation: down 1.5s infinite;
  -webkit-animation: down 1.5s infinite;

  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 18px;
    width: 18px;
    height: 18px;
    border-left: 2px solid #333;
    border-bottom: 2px solid #333;
    transform: rotate(-45deg);
  }
}

@keyframes down {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translateY(15px);
  }
  40% {
    transform: translate(0);
  }
}

@-webkit-keyframes down {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translateY(15px);
  }
  40% {
    transform: translate(0);
  }
}

.arrow {
  width: 0;
  height: 40px;
  border: 1px solid #ffffff;
  position: relative;
  animation: scroll 1.5s infinite;
  -webkit-animation: scroll 1.5s infinite;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: -5px;
    width: 1px;
    height: 10px;

    // triangle
    border-top: 10px solid #ffffff;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
}

@keyframes scroll {
  0% {
    height: 40px;
  }
  30% {
    height: 70px;
  }
  60% {
    height: 40px;
  }
}

@-webkit-keyframes scroll {
  0% {
    height: 40px;
  }
  30% {
    height: 70px;
  }
  60% {
    height: 40px;
  }
}
</style>
