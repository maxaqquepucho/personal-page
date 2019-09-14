<template>
    <!-- <transition name="fade" mode="out-in"> -->
    <div>
        <div class="container mb-5">
            <div class="col pt-4 mb-5">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                        <div class="row justify-content-center justify-content-lg-start">
                            <section class="img-container pr-lg-4 pr-xl-4 mb-4 mb-sm-4 mb-md-4 mb-lg-0">
                                <img width="100%" :src="getOneTec(tecName).img" alt="">
                            </section>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                        <div class="row">
                            <section class="tec-container" >
                                <h3>The proper way to dress up for the</h3>
                                <div class="header">
                                    <div class="posted">
                                        <a href="">Por Max Aqquepucho</a>&nbsp;&nbsp;&nbsp;
                                        <span>Setiembre 05, 2019</span>
                                    </div>
                                    <div class="categories">
                                        <span>Tecnología</span>,
                                        <span>Diseño</span>
                                    </div>
                                </div>
                                <hr>
                                <article class="article">
                                    Quisque dictum eros nisl, a maximus massa accumsan non. Aliquam erat volutpat. Quisque
                                    at finibus dui. Praesent cursus, dui sed tempus mollis, turpis ex porta lacus, 
                                    ut egestas justo nibh in nisi. Donec arcu enim, congue in nunc ut, cursus 
                                    sollicitudin urna. Pellentesque magna purus, accumsan varius mi et, gravida 
                                    consectetur purus. Etiam mattis molestie aliquet. 
                                </article>
                                <br>
                                <article class="article">
                                    Quisque dictum eros nisl, a maximus massa accumsan non. Aliquam erat volutpat. Quisque
                                    at finibus dui. Praesent cursus, dui sed tempus mollis, turpis ex porta lacus, 
                                    ut egestas justo nibh in nisi. Donec arcu enim, congue in nunc ut, cursus 
                                    sollicitudin urna. Pellentesque magna purus, accumsan varius mi et, gravida 
                                    consectetur purus. Etiam mattis molestie aliquet. 
                                </article>
                                
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <hr><br>
            <RelatedTechs />
        </div>
        
        <FooterTecnology :posts="getOneTec(tecName).projects" />
    </div>    
    <!-- </transition> -->
</template>
<script>
import { mapGetters } from "vuex";

import FooterTecnology from "@/components/general/FooterTecnology.vue";
import RelatedTechs from '@/components/general/RelatedTechs.vue'

export default {
    data() {
        return {
            tecName: ''
        }
    },
    computed: {
        // ...mapGetters('getOneTec')
        ...mapGetters(['getOneTec'])
    },
    methods: {
    },
    created(){
        this.tecName = this.$route.params.nombre

    },
    watch: {
        '$route'(to) {
            console.log(to);
            
            this.tecName = to.params.nombre
        }
    },
    mounted() {
    },
    components: {
        FooterTecnology,
        RelatedTechs
    }
}
</script>

<style lang="scss" scoped>


    
    
    .container {
        margin-top: 61px;
    }

    .img-container {
        img {
            border-radius: 4px;
        }

        @media screen and (max-width: 991px) {
            img {
                border-radius: 0px;
            }   
        }
    }

    .tec-container {
        line-height: 1.7;
        h3 {
            font-size: 1.8em;
            font-weight: 700;
        }

        .header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .posted {
                font-size: 12px;
                color: #8d8d8d;

                a {
                    color: #8d8d8d;
                }
            }

            .categories {
                font-size: 12px;
                color: #8d8d8d;
                text-transform: uppercase;
            }

            @media screen and (max-width: 575px) {
                flex-direction: column;
            }
        }

        .article {
            color: #8d8d8d;
            font-weight: 400;
            font-size: 14px;
        }
    }
</style>