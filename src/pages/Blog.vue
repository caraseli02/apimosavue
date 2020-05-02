<template>
    <Layout>
        <section class="w-full h-full mb-16 pb-16">
            <h1>Blog</h1>
            <ul class="flex flex-col justify-around items-start">
                <li class="flex justify-around items-center overflow-hidden bg-gray-100"
                    v-for="{ node } in $page.post.edges" :key="node.id">
                    <div class="flex-1 w-full h-full px-6 py-4 flex flex-col justify-center items-start">
                        <div class="">
                            <h3 class="font-bold text-sm mb-2">
                                <g-link :to="`blog/${node.slug}`"> {{ node.title }}</g-link>
                            </h3>
                            <vue-markdown class="text-gray-700 text-base text-xs">{{ excerpt(node) }}</vue-markdown>
                        </div>
                        <div class="">
                            <Tags class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2"
                                  :tags="node.tags"/>
                        </div>
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
                            <g-image class="" src="../assets/img/desktop/_DSC0257@2x.jpg"/>
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

    export default {
        metaInfo: {
            title: "Blog"
        },
        components: {
            VueMarkdown
        },
        methods: {
            excerpt(node) {
                let excerpt = node.metaDescription ? node.metaDescription : node.body;
                return truncate(documentToHtmlString(excerpt), 60);
            },
            dateFormat(date) {
                const thisDate = new Date(date);
                return dateFormat(thisDate, "MMMM do, yyyy");
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

</style>

<page-query>
    query Posts {
        post: allContentfulPost(sortBy:"publishDate" order:DESC) {
            edges {
                node {
                    title,
                    slug,
                    publishDate,
                    metaDescription,
                    body
                }
            }
        }
    }
</page-query>
