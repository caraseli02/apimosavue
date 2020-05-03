<template>
  <div class="image-wrapper" :style="{ width: width, height: height }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.image-wrapper {
  overflow: hidden;


}
</style>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
      default: () => "200px"
    },
    height: {
      type: String,
      required: false,
      default: () => "200px"
    }
  }
};
</script>
