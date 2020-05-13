<template>
    <Layout>
        <main class="magrin__conocenos gapConocenos">
            <div class="logoMain">
                <img src="/_assets/img/logoBig.png" alt=""/>
            </div>
            <!-- Slide Show A Pen By geekwen
            https://codepen.io/geekwen/pen/QNxymm/  -->
            <section class="outer-wrapper">
                <div class="s-wrap s-type-1" role="slider">
                    <input
                            type="radio"
                            id="s-1"
                            name="slider-control"
                            checked="checked"
                    />
                    <input type="radio" id="s-2" name="slider-control"/>
                    <input type="radio" id="s-3" name="slider-control"/>
                    <input type="radio" id="s-4" name="slider-control"/>
                    <input type="radio" id="s-5" name="slider-control"/>
                    <input type="radio" id="s-6" name="slider-control"/>
                    <input type="radio" id="s-7" name="slider-control"/>
                    <input type="radio" id="s-8" name="slider-control"/>
                    <input type="radio" id="s-9" name="slider-control"/>
                    <input type="radio" id="s-10" name="slider-control"/>
                    <ul class="conocenos-content">
                        <li class="s-item s-item-1">
                            <div class="s-item__conocer">
                                <p class="s-item__conocer__text">
                                    Grupo Apimosa lleva más de 50 años en el mercado,
                                    investigando, desarrollando y comprobando el resultado de sus
                                    trabajos a lo largo del tiempo.
                                    <a class="link_servicios" href="servicios.html"></a>
                                </p>
                            </div>
                        </li>
                        <li class="s-item s-item-2">
                            <div class="s-item__conocer">
                                <p class="s-item__conocer__text">
                                    Los proyectos ejecutados por nuestra empresa dentro de los
                                    campos de la ingeniería, conservación y rehabilitación, están
                                    repartidos por la geografía nacional e internacional y avalan
                                    nuestra trayectoria profesional.
                                </p>
                            </div>
                        </li>
                        <li class="s-item s-item-3">
                            <div class="s-item__conocer">
                                <p class="s-item__conocer__text">
                                    Para ello empleamos las más vanguardistas tecnologías así como
                                    el mayor de los respetos medioambiental y ecológico.
                                    <a class="link_servicios" href="servicios.html"></a>
                                </p>
                            </div>
                        </li>
                        <li class="s-item s-item-4">
                            <div class="s-item__conocer">
                                <p class="s-item__conocer__text">
                                    Somos pioneros en la generación de nuevos procedimientos y
                                    tecnologías para intentar reducir nuestro impacto
                                    medioambiental y aumentar calidad y seguridad de nuestros
                                    trabajos.
                                    <a class="link_servicios" href="servicios.html"></a>
                                </p>
                            </div>
                        </li>
                        <li class="s-item s-item-5">
                            <div class="s-item__conocer">
                                <p class="s-item__conocer__text">
                                    Por ello entendemos que donde los demás concluyen su trabajo,
                                    nosotros empezamos el seguimiento, control y comportamiento de
                                    los sistemas realizados en nuestras obras.
                                    <a class="link_servicios" href="servicios.html"></a>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <ul class="conocenos-content__tablet">
                        <li class="s-item s-item-1">
                            <div class="s-item__conocer__tablet">
                                <p class="s-item__conocer__text__tablet">
                                    Grupo Apimosa lleva más de 40 años en el mercado,
                                    investigando, desarrollando y comprobando el resultado de sus
                                    trabajos a lo largo del tiempo. Los proyectos ejecutados por
                                    nuestra empresa dentro de los campos de la ingeniería,
                                    conservación y rehabilitación, están repartidos por la
                                    geografía nacional e internacional y avalan nuestra
                                    trayectoria profesional. Para ello empleamos las más
                                    vanguardistas tecnologías así como el mayor de los respetos
                                    medioambiental y ecológico. Somos pioneros en la generación de
                                    nuevos procedimientos y tecnologías para intentar reducir
                                    nuestro impacto medioambiental y aumentar calidad y seguridad
                                    de nuestros trabajos. Por ello entendemos que donde los demás
                                    concluyen su trabajo, nosotros empezamos el seguimiento,
                                    control y comportamiento de los sistemas realizados en
                                    nuestras obras.
                                    <a class="link_servicios" href="servicios.html"></a>
                                </p>
                            </div>
                        </li>
                        <li class="s-item s-item-2">
                            <div class="s-item__conocer">
                                <p class="s-item__conocer__text">
                                    Los proyectos ejecutados por nuestra empresa dentro de los
                                    campos de la ingeniería, conservación y rehabilitación, están
                                    repartidos por la geografía nacional e internacional y avalan
                                    nuestra trayectoria profesional.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div class="s-control">
                        <label class="s-c-1" for="s-1"></label>
                        <label class="s-c-2" for="s-2"></label>
                        <label class="s-c-3" for="s-3"></label>
                        <label class="s-c-4" for="s-4"></label>
                        <label class="s-c-5" for="s-5"></label>
                        <!-- <label class="s-c-6" for="s-6"></label>
                        <label class="s-c-7" for="s-7"></label>
                        <label class="s-c-8" for="s-8"></label>
                        <label class="s-c-9" for="s-9"></label>
                        <label class="s-c-10" for="s-10"></label> -->
                    </div>
                    <div class="s-nav nav__tablet">
                        <!-- <label class="s-nav-1 left" for="s-10"></label> -->
                        <label class="s-nav-1 right" for="s-2"></label>
                        <label class="s-nav-2 left" for="s-1"></label>
                        <label class="s-nav-2 right" for="s-3"></label>
                        <label class="s-nav-3 left" for="s-2"></label>
                        <label class="s-nav-3 right" for="s-4"></label>
                        <label class="s-nav-4 left" for="s-3"></label>
                        <label class="s-nav-4 right" for="s-5"></label>
                        <label class="s-nav-5 left" for="s-4"></label>

                        <!-- <label class="s-nav-5 right" for="s-6"></label>
                        <label class="s-nav-6 left" for="s-5"></label>
                        <label class="s-nav-6 right" for="s-7"></label>
                        <label class="s-nav-7 left" for="s-6"></label>
                        <label class="s-nav-7 right" for="s-8"></label>
                        <label class="s-nav-8 left" for="s-7"></label>
                        <label class="s-nav-8 right" for="s-9"></label>
                        <label class="s-nav-9 left" for="s-8"></label>
                        <label class="s-nav-9 right" for="s-10"></label>
                        <label class="s-nav-10 left" for="s-9"></label>
                        <label class="s-nav-10 right" for="s-1"></label> -->
                    </div>
                </div>
            </section>
        </main>
    </Layout>
</template>

<script>
    export default {
        name: "conocenos"
    }
</script>

<style scoped>

</style>
