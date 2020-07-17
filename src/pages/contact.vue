<template>
    <Layout>

        <div class=" bgImage">
            <transition
                    appear
                    @before-enter="beforeEnter"
                    @enter="enter"
                    :css="false"
            >
                <div class="min-h-screen flex flex-col md:flex-row justify-around items-center ">
                    <div class="mt-32 sm:mt-0"/>
                    <!--<div class=" size33 mb-4 max-w-sm rounded overflow-hidden shadow-lg bg-orange-100">
                        <div class="px-4 py-2">
                            <div class="font-bold text-xl mb-2">Sevilla</div>
                            <p class="text-gray-700 text-base w-48 xl:w-64">
                                Calle Real, 66, 41410 <br/> Carmona, Sevilla
                            </p>
                            <div class="mt-4 flex justify-around items-center">
                                <a href="https://www.google.com/maps/place/Apimosa+S+L/@37.467531,-5.6443901,15z/data=!4m2!3m1!1s0x0:0xefb6047254d73108?sa=X&ved=2ahUKEwig1arCwtbpAhUEnVwKHQwJDZkQ_BIwCnoECBIQCA">
                                    <g-image src="../assets/images/gmaps.png"
                                             width="50" height="50"
                                             alt="Gmaps icon"
                                    />
                                </a>
                                <a class="shadow p-2 rounded-lg ml-2 text-black text-xs md:text-sm rounded-full hover:shadow-lg"
                                   href="https://wa.me/34674-227-938">
                                    <g-image src="../assets/icons/whatsapp.svg" height="32"
                                             width="32"/>
                                </a>
                                <a href="mailto:apimosa@apimosa.es"
                                   class="shadow p-2 rounded-lg flex justify-center items-center text-black text-xs md:text-sm">
                                    <g-image src="../assets/icons/gmail.svg" height="32" width="32"/>
                                </a>
                            </div>
                        </div>

                        <div class="px-4 py-2">
                    <span class=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><a
                            href="tel:+34615-240-662"><g-image class="inline-block pr-2" src="../assets/icons/call.svg"
                                                               height="32" width="32"/>954143950</a></span>
                        </div>-->
                    <!-- <div class=" size33 mb-4 max-w-sm rounded overflow-hidden shadow-lg bg-orange-100">

                         <div class="px-4 py-2">
                             <div class="font-bold text-xl mb-2">Malaga</div>
                             <p class="text-gray-700 text-base w-48 xl:w-64">
                                 Camino del
                                 Pinillo, 22 Torremolinos (Malaga)
                             </p>
                             <div class="mt-4 flex justify-around items-center">
                                 <a href="https://goo.gl/maps/bEqXxdjDytvSaZXn8">
                                     <g-image src="../assets/images/gmaps.png"
                                              width="50" height="50"
                                              alt="Gmaps icon"
                                     />
                                 </a>
                                 <a class="shadow p-2 rounded-lg ml-2 text-black text-xs md:text-sm rounded-full hover:shadow-lg"
                                    href="https://wa.me/34674-227-938">
                                     <g-image src="../assets/icons/whatsapp.svg" height="32"
                                              width="32"/>
                                 </a>
                                 <a href="mailto:vgarcia@apimosa.es"
                                    class="shadow p-2 rounded-lg flex justify-center items-center text-black text-xs md:text-sm">
                                     <g-image src="../assets/icons/gmail.svg" height="32" width="32"/>
                                 </a>
                             </div>
                         </div>
                         <div class="px-4 py-2">
                     <span class=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"><a
                             href="tel:+34615-240-662"><g-image class="inline-block pr-2" src="../assets/icons/call.svg"
                                                                height="32" width="32"/>674227938</a></span>
                         </div>
                     </div>-->
                    <!--<div class=" size33 mb-4 max-w-sm rounded overflow-hidden shadow-lg bg-orange-100">
                        <div class="px-4 py-2">
                            <div class="font-bold text-xl mb-2">Mallorca</div>
                            <p class="text-gray-700 text-base w-48 xl:w-64">
                                Aeropuerto de Palma de Mallorca
                                07611 Illes Balears
                            </p>
                            <div class="mt-4 flex justify-around items-center">
                                <a href="https://www.google.es/maps/place/39%C2%B032'37.9%22N+2%C2%B043'28.7%22E/@39.5437267,2.7244404,19z/data=!4m14!1m7!3m6!1s0x12979259c61ac757:0xc40d5406c3d058c6!2sPalma,+Balearic+Islands!3b1!8m2!3d39.5696005!4d2.6501603!3m5!1s0x0:0x0!7e2!8m2!3d39.5438686!4d2.7246437?hl=en">
                                    <g-image src="../assets/images/gmaps.png"
                                             width="50" height="50"
                                             alt="Gmaps icon"
                                    />
                                </a>
                                <a class="shadow p-2 rounded-lg ml-2 text-black text-xs md:text-sm rounded-full hover:shadow-lg"
                                   href="https://wa.me/34615-240-662">
                                    <img src="../assets/icons/whatsapp.svg" height="32"
                                         width="32"/>
                                </a>
                                <a href="mailto:msanchez@apimosa.es"
                                   class="shadow p-2 rounded-lg flex justify-center items-center text-black text-xs md:text-sm">
                                    <img src="../assets/icons/gmail.svg" height="32" width="32"/>
                                </a>
                            </div>
                        </div>
                        <div class="px-4 py-2">
                            <span class=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                <a href="tel:+34674-227-938">
                                    <g-image class="inline-block pr-2" src="../assets/icons/call.svg" height="32"
                                             width="32"/>
                                   615240662
                                </a>
                            </span>
                        </div>
                    </div>-->
                    <div
                            v-for="(contact, index) in contactos"
                            :key="index"
                            class=" size33 mb-4 max-w-sm rounded overflow-hidden shadow-lg bg-orange-100"
                    >
                        <div class="px-4 py-2">
                            <div class="font-bold text-xl mb-2">{{contact.city}}</div>
                            <p
                                    class="text-gray-700 text-base w-48 xl:w-64"
                                    v-for="(loc, index) in contact.location"
                                    :key="index"
                            >
                                {{loc}}
                            </p>
                            <div class="mt-4 flex justify-around items-center">
                                <a :href="contact.maps">
                                    <g-image src="../assets/images/gmaps.png"
                                             width="50" height="50"
                                             alt="Gmaps icon"
                                    />
                                </a>
                                <a class="shadow p-2 rounded-lg ml-2 text-black text-xs md:text-sm rounded-full hover:shadow-lg"
                                   :href="contact.wa">
                                    <img src="../assets/icons/whatsapp.svg" height="32"
                                         width="32"/>
                                </a>
                                <a :href="contact.mail"
                                   class="shadow p-2 rounded-lg flex justify-center items-center text-black text-xs md:text-sm">
                                    <img src="../assets/icons/gmail.svg" height="32" width="32"/>
                                </a>
                            </div>
                        </div>
                        <div class="px-4 py-2">
                            <span class=" inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                <a :href="contact.telLink">
                                    <g-image class="inline-block pr-2" src="../assets/icons/call.svg" height="32"
                                             width="32"/>
                                   {{contact.tel}}
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </Layout>

</template>

<script>

    import gsap from "gsap";

    export default {
        name: "contact",
        data: function () {
            return {
                contactos: [
                    {
                        "city": "Sevilla",
                        "location": ["Calle Real, 66, 41410",
                            "Carmona, Sevilla"],
                        "wa": "https://wa.me/34674-227-938",
                        "mail": "mailto:apimosa@apimosa.es",
                        "tel": "954143950",
                        "telLink": "tel:+34615-240-662",
                        "maps": "https://www.google.com/maps/place/Apimosa+S+L/@37.467531,-5.6443901,15z/data=!4m2!3m1!1s0x0:0xefb6047254d73108?sa=X&ved=2ahUKEwig1arCwtbpAhUEnVwKHQwJDZkQ_BIwCnoECBIQCA"
                    },
                    {
                        "city": "Mallorca",
                        "location": ["Aeropuerto de Palma de Mallorca",
                            "07611 Illes Balears"],
                        "wa": "https://wa.me/34615-240-662",
                        "mail": "mailto:msanchez@apimosa.es",
                        "tel": "615240662",
                        "telLink": "tel:+34674-227-938",
                        "maps": "https://www.google.es/maps/place/39%C2%B032'37.9%22N+2%C2%B043'28.7%22E/@39.5437267,2.7244404,19z/data=!4m14!1m7!3m6!1s0x12979259c61ac757:0xc40d5406c3d058c6!2sPalma,+Balearic+Islands!3b1!8m2!3d39.5696005!4d2.6501603!3m5!1s0x0:0x0!7e2!8m2!3d39.5438686!4d2.7246437?hl=en"
                    },
                    {
                        "city": "Malaga",
                        "location": ["Camino del Pinillo",
                            "22 Torremolinos (Malaga)"],
                        "wa": "https://wa.me/34674-227-938",
                        "mail": "mailto:vgarcia@apimosa.es",
                        "tel": "674227938",
                        "telLink": "tel:+34615-240-662",
                        "maps": "https://goo.gl/maps/bEqXxdjDytvSaZXn8"
                    }
                ]
            }
        },
        methods: {
            beforeEnter(el) {
                el.style.opacity = 0
                el.style.transform = 'scale(0,0)'
            },
            enter(el, done) {
                gsap.to(el, {
                    duration: 1,
                    opacity: 1,
                    scale: 1,
                    onComplete: done
                })
            }
        }
    }
</script>

<style scoped>
    Layout {
        height: 100%;
    }

    .size33 {
        width: 80vw;
        height: 35vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    @media (min-width: 640px) {
        .size33 {
            width: 30vw;
        }
    }

    @media (min-width: 1024px) {
        .size33 {
            width: 25vw;
            height: 35vh;
        }
    }

    .bgImage {
        background-image: url("../assets/images/fondoContact.jpg");
        background-size: cover;
    }

    .mainForm {
        height: 550px;
        width: 300px;
        background: linear-gradient(#1a4871, #4783a4, #4783a4);
        margin: auto;
        margin-top: 100px;
        box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.4);
        border-radius: 15px;
        overflow: hidden;
        margin-bottom: 2rem;
    }

    article {
        height: 450px;
        width: 650px;
        margin-left: -170px;
        background: linear-gradient(to left, #1b4e65, #1b4f66, #1c5169);
        display: block;
        margin-top: 200px;
        border-radius: 50%;
    }

    .formTitle {
        font-size: 30px;
        color: #fff;
        font-family: sans-serif;
        font-weight: 100;
        margin-top: 100px;
        position: absolute;
        margin-left: 55px;
        text-align: center;
        animation: glow 1s ease-in-out infinite alternate;
    }

    @keyframes glow {
        from {
            text-shadow: 0 0 0px #fff;
        }

        to {
            text-shadow: 0 0 20px #fff;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        width: 250px;
        justify-content: center;
        align-items: center;
        margin-left: 195px;
        margin-top: 70px;
    }

    input, textarea {
        width: 100%;
        padding-left: 2px;
        margin-top: 15px;
        background: transparent;
        border: none;
        height: 40px;
        color: rgba(255, 255, 255, 0.6);
        font-size: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }

    ::placeholder {
        color: rgba(255, 255, 255, 0.4);
        opacity: 1;
    }

    button {
        height: 55px;
        font-size: 20px;
        margin-top: 66px;
        letter-spacing: 1px;
        width: 300px;
        border: none;
        color: white;
        background: #48cede;
    }

    input:target {
        background: transparent;
    }
</style>
