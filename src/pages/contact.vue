<template>
    <Layout>
        <div class="mainForm relative">
            <h6 class="formTitle">CONTACT US</h6>
            <article>
                <form class="w-full max-w-lg"
                      name="contact"
                      action="https://www.form-data.com/_functions/submit/zsu0pbfwbpdw78cd142thc"
                      method="post"
                >

                    <input required type="text" v-model="name" name="name" placeholder="Nombre"/>


                    <input required type="email" v-model="email" name="email" placeholder="Email"/>


                    <textarea required name="message" v-model="message" placeholder="Tu mensaje"></textarea>

                    <vue-recaptcha
                            class="absolute top-0"
                            ref="recaptcha"
                            :loadRecaptchaScript="true"
                            @verify="onVerify" sitekey="6LeH4P4UAAAAAJIi9kHto4NOlrkaSD2_kfRIRobH">
                    </vue-recaptcha>

                    <button type="submit">Send</button>

                </form>
            </article>
            <button>Send Message</button>
        </div>
    </Layout>

</template>

<script>

    import VueRecaptcha from 'vue-recaptcha'

    export default {
        name: "contact",
        data() {
            return {
                form: {
                    robot: false
                }
            }
        },
        methods: {
            submit: function () {
                if (this.form.robot) {

                }
            },
            onVerify: function (response) {
                if (response) this.form.robot = true;
            }
        },
        components: {
            VueRecaptcha
        },
    }
</script>

<style scoped>
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
