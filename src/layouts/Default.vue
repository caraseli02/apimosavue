<template>
    <main class="layout">
        <Nav/>
        <transition name="fade" mode="out-in" appear>
            <div class="">
                <slot/>
            </div>
        </transition>
        <DefaultFooter/>
    </main>
</template>

<script>

    import Nav from "../components/Nav";
    import DefaultFooter from "../components/DefaultFooter";

    export default {
        components: {
            DefaultFooter,
            Nav
        },
        data: function () {
            return {
                isOpen: false,
                selected: 'Lista Completa',
                test: 'Test'
            };
        },
        mutations: {
            showIngineria() {
                if (this.selectedService === 'Ingeniería') {
                    return 'Ingeniería'
                } else if (this.selectedService === 'Lista Completa') {
                    return true
                } else {
                    return false
                }
            }
        }
    };
</script>

<style scoped>


</style>

<style lang="scss">


    .modal {
        width: 500px;
        margin: 0px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px 3px;
        transition: all 0.2s ease-in;
        font-family: Helvetica, Arial, sans-serif;
    }

    .fade-enter-active {
        transition: opacity .5s;
    }

    .fade-enter {
        opacity: 0;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #00000094;
        z-index: 999;
        transition: opacity 0.2s ease;
    }

</style>


<static-query>

</static-query>
