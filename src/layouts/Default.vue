<template>
  <div class="layout">
    <Nav />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <footer class="footer">
      Built by VladWeb
      <nav class="footer-links">
        <span class="powered-by">Powered by: </span>
        <a href="https://www.contentful.com/" title="Contentful">Contentful</a>,
        <a href="https://gridsome.org/" title="Gridsome">Gridsome</a> &amp;
        <a href="https://www.netlify.com/" title="Netlify">Netlify</a>
      </nav>
    </footer>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  components: {
    Nav
  }
};
</script>

<style src="../main.css" />

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
