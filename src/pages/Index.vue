<template>
    <Layout class="">
        <profile-page/>
        <section>
            <div class="container mx-auto flex flex-col items-center">
                <!--                <g-image src="../assets/img/desktop/bgmallorca@2x.jpg" class="w-full"/>-->
            </div>
        </section>
        <section class="py-8">
            <div class="container max-w-5xl mx-auto m-8"
            >
                <div class="flex flex-wrap">
                    <div class="w-5/6 sm:w-1/2 p-6 flex justify-center items-start flex-col">
                        <g-link class="gradientLinks" to="/blog"><h2 class="text-3xl text-gray-800 font-bold">
                            {{getBlogs.titleBloc1}}</h2></g-link>
                        <p class="text-gray-600 mb-8 mt-3">{{getBlogs.textBloc1}}
                        </p>
                    </div>
                    <div class="w-full sm:w-1/2 ">
                        <g-image class="w-5/6 sm:h-auto mx-auto" :src="$page.contentfulIndexMain.imgBloc1[0].url" />
                    </div>
                </div>

                <div class="flex flex-wrap flex-col-reverse sm:flex-row">
                    <div class="w-full sm:w-1/2 p-6 mt-6">
                        <g-image class="w-5/6 sm:h-auto mx-auto" :src="$page.contentfulIndexMain.imgBloc2[0].url" />
                    </div>
                    <div class="w-full sm:w-1/2 p-6 mt-6 flex justify-center items-start flex-col">
                        <div class="align-middle">
                            <g-link class="gradientLinks" to="/galleries/">
                                <h2 class="text-3xl text-gray-800 font-bold leading-none">{{getBlogs.titleBloc2}}</h2>
                            </g-link>
                            <p class="text-gray-600 mb-8 mt-3">
                                {{getBlogs.textBloc2}}<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <h3 class=" flex justify-center items-end w-full text-5xl sm:text-6xl -mb-8 text-black "><a
                href="https://www.instagram.com/daiilystylee/">INSTAGRAM</a></h3>
                <article class="gradientGallery w-full py-5 my-2">
                    <ClientOnly>
                        <carousel-3d :width="187" :height="301" :space="200" :disable3d="true" :clickable="false"
                                     :controls-visible="true">
                            <slide class="redondo" v-for="(node, i) in $page.allInstagramPhoto.edges" :index="i" :key="node.id">

                                <g-image
                                        class="h-full object-cover rounded-lg"
                                        :src="node.node.display_url"
                                />
                            </slide>
                        </carousel-3d>
                    </ClientOnly>
                </article>
    </Layout>
</template>

<script>
    import {getCoverImage, renderImage} from "../helpers/contentful";
    import ProfilePage from "../components/profilePage";

    export default {
        name: 'Index',
        metaInfo: {
            title: "A DailyStyle modern blog"
        },
        components: {
            ProfilePage,
            Carousel3d: () =>
                import ('vue-carousel-3d')
                    .then(m => m.Carousel3d)
                    .catch(),
            Slide: () =>
                import ('vue-carousel-3d')
                    .then(m => m.Slide)
                    .catch()
        },
        methods: {
            getCoverImage(node) {
                return getCoverImage(node);
            },
            renderThumbnail(src) {
                return renderImage({src, fit: "fill", w: 968, h: 968});
            }
        },
        computed: {
            getBlogs() {
                return this.$page.contentfulIndexMain
            }
        }
    };

</script>

<style scoped>

    .gradientGallery {
        background: #000000; /* fallback for old browsers */
        background: -webkit-linear-gradient(to top, #434343, #000000); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to top, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }

    .gradientLinks:hover {
        background-image: linear-gradient(to bottom, #ffffff, #ffffff, #ffffff, #ebd3ff, #ffffff);
    }

    .redondo {
        border-radius: 15px;
    }

    .fondoBlog {
        background-image: url("../assets/img/fondoBlog.svg");
        background-size: cover;


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
        contentfulIndexMain(id: "5yTmn6wGeJQ9HyvJPxxR2e") {
            titleBloc1
            titleBloc2
            textBloc1
            textBloc2
            imgBloc1 {
                url
                secure_url
            }
            imgBloc2 {
                url
                secure_url
            }
        }
    }
</page-query>
