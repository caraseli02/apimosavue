<template>
    <article class="gradientGallery w-full py-5 my-2">
        <carousel-3d :width="187" :height="301" :space="200" :disable3d="true" :clickable="false"
                     :controls-visible="true">
            <slide class="redondo" v-for="(node, i) in $page.allInstagramPhoto.edges" :index="i" :key="node.id">

                <g-image
                        class="h-full object-cover rounded-lg"
                        :src="node.node.display_url"
                />
            </slide>
        </carousel-3d>
    </article>
</template>

<script>

    import {Carousel3d, Slide} from 'vue-carousel-3d';
    import {getCoverImage, renderImage} from "../helpers/contentful";

    export default {
        name: "Gallery",
        data() {
            return {
                slides: 7
            }
        },
        components: {
            Carousel3d,
            Slide
        },
        methods: {
            getCoverImage(node) {
                return getCoverImage(node);
            },
            renderThumbnail(src) {
                return renderImage({src, fit: "fill", w: 968, h: 968});
            }
        }
    }
</script>

<style scoped>
    .gradientGallery {
        background: #000000; /* fallback for old browsers */
        background: -webkit-linear-gradient(to top, #434343, #000000); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to top, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>

<page-query>
    query {
        allInstagramPhoto {
            edges {
                node {
                    display_url
                    edge_media_to_caption {
                        edges {
                            node {
                                text
                            }
                        }
                    }
                }
            }
        }
    }
</page-query>
