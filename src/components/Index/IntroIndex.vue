<template>
    <article class="w-full bg-blue-600 mt-24">

        <div class="w-full h-full relative flex items-center justify-center py-24">

            <youtube :video-id="videoId" player-width="750" player-height="750" :player-vars="{autoplay: 1}"></youtube>
            <div class="px-6 mt-5 max-w-4xl relative z-10 text-center">
                <h1 class="text-3xl md:text-4xl font-black text-white leading-tight mb-2">Grupo Apimosa</h1>
                <h2 class="text-lg md:text-2xl font-condensed text-white leading-tight mb-8">
                    Lleva más de 50
                    años en el mercado, investigando, desarrollando y siguiendo el resultado de sus trabajos a
                    lo largo del tiempo.
                </h2>
                <g-link to="/conocenos/"
                        class="inline-block bg-white font-condensed text-primary py-2 px-5 text-base rounded-full hover:shadow-lg hover:bg-blue-600 hover:text-white">
                    Conócenos
                </g-link>
            </div>

        </div>
    </article>
</template>

<script>

    export default {
        name: "IntroIndex",
        data: {
            videoId: 'wp0iUTt5beE',
        },
        methods: {
            ready (event) {
                this.player = event.target
            },
            playing (event) {
                // The player is playing a video.
            },
            change () {
                // when you change the value, the player will also change.
                // If you would like to change `playerVars`, please change it before you change `videoId`.
                // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
                // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
                this.videoId = 'another video id'
            },
            stop () {
                this.player.stopVideo()
            },
            pause () {
                this.player.pauseVideo()
            }
        }
    }
</script>

<style scoped>

</style>
