<template>
    <form class="m-2 ml-0 pt-10 flex justify-start items-start mt-16">
        <div class="w-48 md:w-1/3 mb-6 md:mb-0">
            <div class="relative">
                <select
                        class="block appearance-none w-full shadow py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        v-model="selected"
                >
                    <option disabled value=""><span>&#x1f50d;&#xfe0e; </span> {{selectedService}}</option>
                    <option
                            v-for="service in serviceNames"
                            :key="service"
                            class="inline  inline-block bg-gray-200 font-condensed text-primary
                        py-1 px-2 m-1 text-xs md:text-base rounded-full hover:shadow-lg hover:bg-blue-600 hover:text-white"
                    >
                        {{service}}
                    </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "serviceList",
        data() {
            return {
                selected: ''
            }
        },
        computed: {
            localComputed() {
                return something
            },
            ...mapState(['serviceNames', 'selectedService'])
        },
        watch: {
            selected(newValue, oldValue) {
                this.$store.commit('SET_SERVICE', newValue)
                this.selected = this.selectedService
            }
        },
    }
</script>

<style scoped>

</style>
