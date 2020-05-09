<template>
    <Layout>
        <section class="w-full h-full mb-16 pb-16">
            <ul id="revers" class="flex flex-col justify-around items-start">
                <li class="flex justify-around items-center h-full xs:h-12 overflow-hidden zaracolor w-full"
                    v-for="{ node } in $page.post.edges" :key="node.id">
                    <div class="flex-1 flex flex-col justify-center items-center">
                        <div class="flex flex-col justify-center items-center">
                            <h3 class="font-bold text-sm mb-2 w-3/4 m-auto text-center lg:text-4xl lg:w-2/3">
                                <g-link :to="`blog/${node.slug}`"> {{ node.title }}</g-link>
                            </h3>
                            <vue-markdown class="text-gray-700 text-xs w-32 lg:w-2/3 m-auto text-center lg:text-xl">{{
                                excerpt(node) }}
                            </vue-markdown>
                            <a class="w-1/4 h-auto lg:flex hidden"
                               href="https://static.zara.net/photos///2020/I/0/1/p/2173/255/402/2/w/1120/2173255402_1_1_1.jpg?ts=1588675947042">
                                <g-image class=""
                                         src="https://static.e-stradivarius.net/5/photos3/2020/V/0/1/p/0475/001/041/0475001041_2_1_2.jpg?t=1575457702335"
                                         alt="Image 5 of SHIRT WITH POCKET from Zara"">
                                </g-image>
                            </a>
                        </div>
                        <!--<div class="">
                            <Tags class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2"
                                  :tags="node.tags"/>
                        </div>-->
                        <!--<div class="flex items-center">
                            <img class="w-10 h-10 mr-4" src="../assets/icons/logoNegro.png"
                                 alt="DailyStyle fashion blog"/>
                            <div class="text-sm">
                                <p class="text-gray-900 leading-none">DS</p>
                                <p class="text-gray-600">{{
                                    dateFormat(node.publishDate)
                                    }}</p>
                            </div>
                        </div>-->
                    </div>
                    <div class="flex-1 flex flex-col justify-center items-start">
                        <a href="" class="h-auto">
                            <ImageHover width="50wv" height="50vh%">
                                <g-image
                                        class="h-full"
                                        :src="renderThumbnail(getCoverImage(node).url)"
                                        :alt="getCoverImage(node).title"
                                />
                            </ImageHover>
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    </Layout>
</template>

<script>
    import VueMarkdown from "vue-markdown";
    import truncate from "html-truncate";
    import dateFormat from "date-fns/format";
    import {documentToHtmlString} from "@contentful/rich-text-html-renderer";
    import {getCoverImage, renderImage} from "../helpers/contentful";
    import ImageHover from "../components/ImageHover";

    export default {
        metaInfo: {
            title: "Blog"
        },
        components: {
            VueMarkdown,
            ImageHover
        },
        methods: {
            excerpt(node) {
                let excerpt = node.metaDescription ? node.metaDescription : node.body;
                return truncate(documentToHtmlString(excerpt), 100);
            },
            dateFormat(date) {
                const thisDate = new Date(date);
                return dateFormat(thisDate, "MMMM do, yyyy");
            },
            getCoverImage(node) {
                return getCoverImage(node);
            },
            renderThumbnail(src) {
                return renderImage({src, fit: "fill", w: 968, h: 968});
            }
        }
    };
</script>

<style scoped>

    template {
        background-color: #EDF2F7;
    }

    p {
        font-size: 14px;
    }

    #revers > li:nth-child(2n+0) {
        flex-direction: row-reverse;
    }

    .zaracolor{
        background-color: #f0f0f0;
    }

</style>

<page-query>
    query Posts {
        post: allContentfulPost(sortBy:"publishDate" order:DESC) {
            edges {
                node {
                    title
                    slug
                    publishDate
                    metaDescription
                    body
                    heroImage{
                        file{
                            url
                        }
                    }
                }
            }
        }
    }
</page-query>
