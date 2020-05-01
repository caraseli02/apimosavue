<template>
  <header class="header">
    <g-link to="/" class="home-link"
      ><Logo :alt="$static.metadata.siteName"
    /></g-link>

    <nav class="nav">
      <g-link class="nav__link" to="/galleries/">Galleries</g-link>
      <g-link class="nav__link" to="/about">About</g-link>
      <g-link class="nav__link" to="/contact">Contact</g-link>
      <g-link class="nav__link" to="/blog">Blog</g-link>
    </nav>
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

<style lang="scss" scoped>

</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
