<template>
    <div class="layout">
        <Nav/>
        <profile-page>

        </profile-page>

        <transition name="fade" appear>
            <div class="my-6">
                <slot/>
            </div>
        </transition>
        <footer class="">


                <!--
                 ..
                  * Bloque FOOTER
                  *
                  -->
                <!-- NR de Telefono -->
                <a href="tel:+34954-143-950" class="telefono"><img src="../assets/img/logoCal.svg" alt="" class="icon__telefono" /> 954-143-950</a>
                <a href="tel:+34954-143-950" class="fax"><img src="../assets/img/fax.svg" alt="" class="icon__fax" />954-143-177</a>
                <a href="mailto:apimosa@apimosa.es" class="mail"><i class="fas fa-envelope icon__mail"></i>apimosa@apimosa.es</a>

                <!-- REDES -->

                <section class="redes">
                    <a class="red redes__wa" href="https://wa.me/34954-143-950"><img  src="../assets/img/whatsapp.svg" alt=""></a>
                    <a class="red redes__fb" href="https://www.facebook.com/apimosa.es/photos/a.278914705619040/499192160257959/?type=3&theater"><img  src="/_assets/img/facebook.svg" alt=""></a>
                    <a class="red redes__li" href=""><img  src="../assets/img/linkedin.svg" alt=""></a>
                </section>
                <!-- MAPS -->
                <div class="location">
                    <a class="location_sevilla" href="https://www.google.com/maps/place/Apimosa+S+L/@37.467531,-5.6443901,15z/data=!4m5!3m4!1s0x0:0xefb6047254d73108!8m2!3d37.467531!4d-5.6443901" width="170" height="135" frameborder="0" style="border:0;" allowfullscreen="">
                        <img class="location_sevilla_img" src="../assets/img/locSevilla.svg" alt=""></a>
                    <span class="location__txt"> <i class="fas fa-home homemap"></i>Calle Real, 66, 41410 Carmona, Sevilla</span>
                </div>
                <div class="locationMalaga">
                    <a class="locationMalaga_link" href="https://www.google.com/maps/place/Apimosa+S+L/@37.467531,-5.6443901,15z/data=!4m5!3m4!1s0x0:0xefb6047254d73108!8m2!3d37.467531!4d-5.6443901" width="170" height="135" frameborder="0" style="border:0;" allowfullscreen="">
                        <img class="locationMalaga_img" src="../assets/img/locSevilla.svg" alt=""></a>
                    <span class="locationMalaga__txt"> Malaga</span>
                </div>
                <div class="locationPMI">
                    <a class="locationPMI_link" href="https://www.google.com/maps/place/Son+Sant+Joan,+07611+Palma,+Illes+Balears/@39.5428852,2.7236142,17z/data=!4m2!3m1!1s0x129794240e2c221f:0x78fd44dee89bfe88" width="170" height="135" frameborder="0" style="border:0;" allowfullscreen="">
                        <img class="locationPMI_img" src="../assets/img/locSevilla.svg" alt=""></a>
                    <span class="locationMalaga__txt"> Aeroport de Palma</span>
                </div>

                <!-- IMG Certifications -->
                <div class="certification"><img src="../assets/img/Blogo.png" alt="" class="certification__img"></div>
                <div class="certification2"><img src="../assets/img/ohsas.jpg" alt="" class="certification__img"></div>
                <!-- LINKS -->
                <ul class="Flinks">
                    <li class="Flink fixTablet"><a href="">Accesibilidad</a></li >
                    <li class="Flink"><a href="">Política de privacidad</a></li>
                    <li class="Flink fixTablet"><a href="">Política de cookies</a></li>
                    <li class="Flink"><a href="">Términos y condiciones</a></li>
                </ul>
        </footer>
    </div>
</template>

<script>

    import Nav from "../components/Nav";

    export default {
        components: {
            Nav
        }
    };
</script>

<style scoped>



</style>

<style lang="scss">
    @import "../assets/_sass/estilos.scss";

</style>


<static-query>

</static-query>
