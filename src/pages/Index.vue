<template>
    <Layout>
        <h1>Hola soy Daniela</h1>
        <h3>este es mi blog personal</h3>
        <p>
            Apasionada del mundo de la moda, este blog es un espacio,
            una parte de mi donde os enseño los looks que llevo día a día de ahí el nombre de Daily Style.
            También os enseño aquello que me inspira a la hora de vestirme,
            me encanta perderme por la red en búsqueda de las ultimas tendencias y nuevas inspiraciones.
        </p>
        <p>
            "Empece mi blog como un hobby, en una nueva experiencia para mí espero que os animéis a compartirla conmigo
            y formar parte de ella."
        </p>
        <p>
            Can't get enough or want to get in touch? You can reach out to me via the
            <g-link to="/contact">contact form</g-link>
            or via social media:
            <a href="https://instagram.com/joranquinten">Instagram</a>,
            <a href="https://unsplash.com/@joranquinten">Unsplash</a>,
            <a href="https://500px.com/joranquinten">500px</a>.
        </p>
    </Layout>
</template>

<script>
    export default {
        metaInfo: {
            title: "A photography blog"
        }
    };
</script>

<style>
    .home-links a {
        margin-right: 1rem;
    }

    .signature {
        display: block;
        font-size: 2em;
        font-family: "Amatic SC", cursive;
        line-height: 1.4em;
    }
</style>
