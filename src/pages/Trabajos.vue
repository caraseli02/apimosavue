<template>
    <Layout class="">
        <div class="conatiner mx-auto mt-32">
            <div class="mt-20">
                <div class="flex flex-wrap card">
                    <div
                            class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4"
                            v-for="(work, index) in works" :key="index"
                    >
                        <div>
                            <div
                                    class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg"
                            >
                                <div
                                        class="right-0  absolute
                                        "
                                >
                                    <p      class=" rounded-l-full mt-2 text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75"
                                            v-for="(service, index) in work.services" :key="index">
                                        {{service}}
                                    </p>
                                </div>
                                <g-image
                                        :src="require(`!!assets-loader!@images/${work.img}`)"
                                        fit="cover"
                                        class="h-64 rounded-lg w-full object-cover"
                                        :alt="work.alt"
                                />
                                <div class="flex justify-center">

                                </div>
                                <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                    <div class=" font-bold font-title text-center">
                                        {{work.title}}
                                    </div>

                                    <div class="text-sm font-light text-center my-2">
                                        {{work.description}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--<div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4">
                        <div class=" ">
                            <a href="#">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg">
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Tratamiento de Impermeabilizaciones
                                    </div>
                                    <g-image
                                            src="../assets/images/metropol.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="Las Setas De Sevilla"
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">Las Setas De Sevilla
                                        </div>

                                        <div class="text-sm font-light text-center my-2">
                                            Monumento emblemático de Sevilla en el que <p class="italic">
                                            impermeabilizamos con poliuretano
                                            proyectado toda su estructura de madera.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4">
                        <div class=" ">
                            <a href="#">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg">
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Preparación de Superficies
                                    </div>
                                    <g-image
                                            src="../assets/images/Alamillo.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="Puente del Alamillo"
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">Puente del Alamillo
                                        </div>

                                        <div class="text-sm font-light text-center my-2">
                                            Uno de los puentes de Sevilla que se construyó para la exposición universal
                                            de 1992.Se trató el acero del puente con chorro de arena y se pintó.
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4">
                        <div class=" ">
                            <a href="#">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg">
                                    <div class="right-0 mt-20 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Tratamiento de Impermeabilizaciones
                                    </div>
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Patologías de Hormigón
                                    </div>
                                    <div class="right-0 mt-12 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Trabajo de Protecciones Pasiva
                                    </div>
                                    <g-image
                                            src="../assets/images/PMI.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="Aeropuerto Palma de Mallorca"
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">Aeropuerto Palma de Mallorca
                                        </div>

                                        <div class="text-sm font-light text-center my-2">
                                            Llevamos establecidos en Mallorca desde el año 2015, <p class="italic">
                                            realizando todo tipo de trabajos de mantenimiento (tratamientos de acero,
                                            patologías de hormigón e impermeabilizaciones)
                                            en el Aeropuerto de Palma y Tirme (incineradora de basuras).</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4">
                        <div class=" ">
                            <a href="#">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg">
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Trabajo de Protección Anticorrosiva
                                    </div>
                                    <g-image
                                            src="../assets/images/champlain.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="El puente Samuel De Champlain."
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">El puente Samuel De Champlain.
                                        </div>

                                        <div class="text-sm font-light text-center my-2">
                                            Puente de 3.440m m de longitud que une Montreal (Canadà) con la ribera del
                                            sur.
                                            <p class="italic">Ejecuciòn del tratamiento anticorrosivo de su
                                                esctructura.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4">
                        <div class=" ">
                            <a href="#">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg">
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Pavimentos Industriales
                                    </div>
                                    <g-image
                                            src="../assets/images/ciudad.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="Ciudad de las Artes y las
                                                Ciencias"
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">Ciudad de las Artes y las
                                            Ciencias
                                        </div>

                                        <div class="text-sm font-light text-center my-2">
                                            Complejo arquitectónico cultural diseñado por Santiago Calatrava.
                                            Realización de distintos pavimentos en resina y hormigón.
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4 ">
                        <div class=" ">
                            <a href="#">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg ">
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Protección Anticorrosiva
                                    </div>
                                    <g-image
                                            src="../assets/images/tenerife.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="Rencinto Ferial de Santa
                                                Cruz de Tenerife"
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">Rencinto Ferial de Santa
                                            Cruz de Tenerife
                                        </div>

                                        <div class="text-sm font-light text-center my-2">Centro Internacional de
                                            Ferias y Congresos de Tenerife.
                                            Proteccion anticorrosiva de su estructura.
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4 ">
                        <div class=" ">
                            <a href="../assets/images/tenerife.jpg">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg ">
                                    <div class="right-0 mt-12 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Patologías de Hormigones
                                    </div>
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Refuerzos Estructurales
                                    </div>
                                    <g-image
                                            src="../assets/images/estadion1.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="Estadio de Fútbol Manuel Ruíz de Lopera"
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">Estadio de Fútbol "Manuel Ruíz de
                                            Lopera"
                                        </div>

                                        <div class="text-sm font-light text-center my-2">Centro Internacional de Estadio del Real Betis Balompiè.
                                            <p class="italic">Reparaciones en hormigones y refuerzo estructural.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4 ">
                        <div class=" ">
                            <a href="../assets/images/tenerife.jpg">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg ">
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Protección Anticorrosiva
                                    </div>
                                    <g-image
                                            src="../assets/images/estadion2.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="Estadio El Arcangel"
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">Estadio "El Arcangel"
                                        </div>

                                        <div class="text-sm font-light text-center my-2">Centro Internacional de Estadio del Córdoba Club de Fútbol.
                                            <p class="italic">Reparacione de patologìa de hormigones.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4 ">
                        <div class=" ">
                            <a href="../assets/images/tenerife.jpg">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg ">
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Refuerzos Estructurales
                                    </div>
                                    <g-image
                                            src="../assets/images/hipodrom.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="Gran hipódromo de Andalucía"
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">Gran hipódromo de Andalucía
                                        </div>

                                        <div class="text-sm font-light text-center my-2">Centro Internacional de Hipódromo situado en Dos Hermanas.
                                            <p class="italic">Refuerzo estructural con fibra de carbono</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4 ">
                        <div class=" ">
                            <a href="../assets/images/tenerife.jpg">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg ">
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Pavimentos Industriales
                                    </div>
                                    <g-image
                                            src="../assets/images/tunel.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="Centro de convenciones El Toyo"
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">Centro de convenciones "El Toyo"
                                        </div>

                                        <div class="text-sm font-light text-center my-2">
                                            Palacio de congresos de Granada.
                                            <p class="italic">Realizacion de suelos de resina.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4 ">
                        <div class=" ">
                            <a href="../assets/images/tenerife.jpg">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg ">
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Tratamiento de Impermeabilizaciones<br> de Depòsitos y Tanques
                                    </div>
                                    <g-image
                                            src="../assets/images/depuradora.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="Estación depuradora de Ranilla"
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">Estación depuradora de Ranilla
                                        </div>

                                        <div class="text-sm font-light text-center my-2">
                                            Estaciòn depuradora de aguas residuales en Alcalà de Guadaíra.
                                            <p class="italic">Impermeabilizaciòn de digestores.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4 ">
                        <div class=" ">
                            <a href="../assets/images/tenerife.jpg">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg ">
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Trabajo de Protecciones Pasiva
                                    </div>
                                    <g-image
                                            src="../assets/images/palacio.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="Rehabilitación del Palacio de San Telmo"
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">Rehabilitación del Palacio de San Telmo
                                        </div>

                                        <div class="text-sm font-light text-center my-2">
                                            Palacio barroco ubicado en Sevilla.
                                            <p class="italic">Restauracion de techos de madera y pinturas decorativas.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4 ">
                        <div class=" ">
                            <a href="../assets/images/tenerife.jpg">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg ">
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Trabajo de Protección Anticorrosiva
                                    </div>
                                    <g-image
                                            src="../assets/images/ventas.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="Puente de Ventas"
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">Puente de Ventas
                                        </div>

                                        <div class="text-sm font-light text-center my-2">
                                            Puente emblemàtico de Madrid.
                                            <p class="italic">Proteccion anticorrosiva de su estructura.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4 ">
                        <div class=" ">
                            <a href="../assets/images/tenerife.jpg">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg ">
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Pavimentos Industriales
                                    </div>
                                    <g-image
                                            src="../assets/images/hainiken.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="Factoría Heineken de Sevilla"
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">Factoría Heineken de Sevilla
                                        </div>

                                        <div class="text-sm font-light text-center my-2">
                                            <p class="italic">Suelos de resina en càmaras frigorìficas.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 lg:w-1/3 py-2 px-2 md:py-4 md:px-4 ">
                        <div class=" ">
                            <a href="../assets/images/tenerife.jpg">
                                <div class="bg-blue-800 relative shadow p-2 rounded-lg text-white hover:shadow-lg ">
                                    <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500 bg-opacity-75">
                                        Refuerzos Estructurales<br> , Tratamientos Preventivos
                                    </div>
                                    <g-image
                                            src="../assets/images/pMartin.jpg"
                                            fit="cover"
                                            class="h-64 rounded-lg w-full object-cover"
                                            alt="Palacio Martin Carpena"
                                    />
                                    <div class="flex justify-center">

                                    </div>
                                    <div class="py-2 px-2 vh20 flex flex-col justify-center items-center">
                                        <div class=" font-bold font-title text-center">Palacio Martin Carpena
                                        </div>

                                        <div class="text-sm font-light text-center my-2">
                                            Palacio de deportes de Màlaga.
                                            <p class="italic">
                                                Rehabilitación de elementos estructurales.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>-->
                </div>

            </div>

        </div>
    </Layout>
</template>

<style lang="scss" scoped>
    .vh20 {
        height: 200px;
    }
</style>

<script>
    import gsap from 'gsap'

    export default {
        metaInfo: {
            title: "Apimosa",
        },
        data() {
            return {
                works: [
                    {
                        "title": "Rencinto Ferial de Santa Cruz de Tenerife",
                        "description" : "Monumento emblemático de Sevilla en el que impermeabilizamos con poliuretano proyectado toda su estructura de madera.",
                        "services": [
                            "Protección Anticorrosiva"
                        ],
                        "img": "tenerife.jpg",
                        "alt": "Rencinto Ferial de Santa Cruz de Tenerife",

                    },
                    {
                        "title": "Ciudad de las Artes y las Ciencias",
                        "description"  : "Complejo arquitectónico cultural diseñado por Santiago Calatrava. Realización de distintos pavimentos en resina y hormigón.",
                        "services": [
                            "Pavimentos Industriales"
                        ],
                        "img": "ciudad.jpg",
                        "alt": "Ciudad de las Artes y las Ciencias",

                    },
                    {
                        "title": "Las Setas De Sevilla",
                        "description" :" Monumento emblemático de Sevilla en el que impermeabilizamos con poliuretano proyectado toda su estructura de madera.",
                        "services": [
                            "Tratamiento de Impermeabilizaciones"
                        ],
                        "img": "metropol.jpg",
                        "alt": "Las Setas De Sevilla",

                    },
                    {
                        "title": "Puente del Alamillo",
                        "description" :" Uno de los puentes de Sevilla que se construyó para la exposición universal 1992" +
                            ".Se trató el acero del puente con chorro de arena y se pintó.",
                        "services": [
                            "Preparación de Superficies"
                        ],
                        "img": "Alamillo.jpg",
                        "alt": "Puente del Alamillo",

                    },
                    {
                        "title": "Aeropuerto Palma de Mallorca",
                        "description" :"Llevamos establecidos en Mallorca desde el año 2015, realizando todo tipo de trabajos de mantenimiento (tratamientos de acero,patologías de hormigón e impermeabilizaciones) en el Aeropuerto de Palma y Tirme (incineradora de basuras).",
                        "services": [
                            "Tratamiento de Impermeabilizaciones",
                            "Patologías de Hormigón",
                            "Trabajo de Protecciones Pasiva",
                        ],
                        "img": "PMI.jpg",
                        "alt": "Aeropuerto Palma de Mallorca",

                    },
                    {
                        "title": "El puente Samuel De Champlain",
                        "description" :"Puente de 3.440m m de longitud que une Montreal (Canadà) con la ribera del sur. " +
                            "Ejecuciòn del tratamiento anticorrosivo de su esctructura.",
                        "services": [
                            "Trabajo de Protección Anticorrosiva"
                        ],
                        "img": "champlain.jpg",
                        "alt": "El puente Samuel De Champlain.",

                    },
                    {
                        "title": "Estadio de Fútbol Manuel Ruíz de Lopera",
                        "description" :"Centro Internacional de Estadio del Real Betis Balompiè." +
                            "Reparaciones en hormigones y refuerzo estructural.",
                        "services": [
                            "Patologías de Hormigones",
                            "Refuerzos Estructurales",
                        ],
                        "img": "estadion1.jpg",
                        "alt": "Estadio de Fútbol Manuel Ruíz de Lopera",

                    },
                    {
                        "title": "Estadio El Arcangel",
                        "description" :"Centro Internacional de Estadio del Córdoba Club de Fútbol." +
                            "Reparaciones en hormigones y refuerzo estructural. Reparacione de patologìa de hormigones.",
                        "services": [
                            "Protección Anticorrosiva"
                        ],
                        "img": "estadion2.jpg",
                        "alt": "Estadio El Arcangel",

                    },
                    {
                        "title": "Gran hipódromo de Andalucía",
                        "description" :"Centro Internacional de Hipódromo situado en Dos Hermanas." +
                            "Refuerzo estructural con fibra de carbono",
                        "services": [
                            "Refuerzos Estructurales"
                        ],
                        "img": "hipodrom.jpg",
                        "alt": "Gran hipódromo de Andalucía",

                    },
                    {
                        "title": "Centro de convenciones El Toyo",
                        "description" :"Palacio de congresos de Granada." +
                            "Realizacion de suelos de resina.",
                        "services": [
                            "Pavimentos Industriales"
                        ],
                        "img": "tunel.jpg",
                        "alt": "Centro de convenciones El Toyo",

                    },
                    {
                        "title": "Estación depuradora de Ranilla",
                        "description" :"Estaciòn depuradora de aguas residuales en Alcalà de Guadaíra." +
                            "Impermeabilizaciòn de digestores.",
                        "services": [
                            "Tratamiento de Impermeabilizaciones",
                            "Depòsitos y Tanques",
                        ],
                        "img": "depuradora.jpg",
                        "alt": "Estación depuradora de Ranilla",

                    },
                    {
                        "title": "Rehabilitación del Palacio de San Telmo",
                        "description" :"Palacio barroco ubicado en Sevilla." +
                            "Restauracion de techos de madera y pinturas decorativas.",
                        "services": [
                            "Trabajo de Protecciones Pasiva"
                        ],
                        "img": "palacio.jpg",
                        "alt": "Palacio de San Telmo",

                    },
                    {
                        "title": "Puente de Ventas",
                        "description" :"Puente emblemàtico de Madrid." +
                            "Proteccion anticorrosiva de su estructura.",
                        "services": [
                            "Trabajo de Protección Anticorrosiva"
                        ],
                        "img": "ventas.jpg",
                        "alt": "Puente de Ventas",

                    },
                    {
                        "title": "Factoría Heineken de Sevilla",
                        "description" :"Suelos de resina en càmaras frigorìficas.",
                        "services": [
                            "Pavimentos Industriales"
                        ],
                        "img": "hainiken.jpg",
                        "alt": "Factoría Heineken de Sevilla",

                    },
                    {
                        "title": "Palacio Martin Carpena",
                        "description" :"Palacio de deportes de Màlaga. Rehabilitación de elementos estructurales.",
                        "services": [
                            " Refuerzos Estructurales",
                            " Tratamientos Preventivos",
                        ],
                        "img": "pMartin.jpg",
                        "alt": "Palacio Martin Carpena",

                    }
                ]
            }
        },
        mounted() {
            gsap.from('.card', {
                duration: 0.5,
                opacity: 0,
                scale: 0,
                y: 200,
                ease: 'power1',
                stagger: {
                    from: 'edges',
                    each: 0.1
                }
            })
        }
    };
</script>

<page-query>

</page-query>
