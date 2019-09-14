<template>
    <div>
        <h3 class="mb-4">Tecnologías relacionadas</h3>
        <div class="col list-tecs">
            <div class="row ">
                <div v-for="(tech, i)  in techs" :key="i" class=" col-12 col-sm-12 col-md-6 col-lg-4     tech-card">
                    <div class="row ">
                        <div class="container-card ml-3 mr-3 mb-4 mb-sm-4 mb-md-4 mb-lg-0">
                            <div class="mb-3">
                                <img class="img" :src="tech.img" alt="imagen"> 
                            </div>
                            <div class="body">
                                <h5 class="titulo">{{ tech.name }}</h5>
                                <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora delectus dol</p>

                            </div>

                        </div>

                    </div>
                </div>
                <!-- <div v-for="(tech, i)  in techs" :key="i" class="col-3">
                    <div class="row">
                        <div  class="ml-2 mr-2" >
                            <img :src="tech.img" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                    </div>

                </div> -->
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            techs: [
                {
                    img: "https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/nodejs.png",
                    name: 'Manteniemto en Nodejs',
                    paragraph: ''
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/vue.png',
                    name: 'Owlfiles',
                    paragraph: ''
                },
                // {
                //     img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/electron.jpg',
                //     name: 'Offline con electron',
                //     paragraph: ''
                // },
                // {
                //     img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/php.jpg',
                //     name: 'Desarrollo en PHP',
                //     paragraph: ''
                // }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

    .list-tecs {
        .tech-card {

            .container-card {
                cursor: pointer;
                box-shadow: 0px 6px 12px 2px rgba(0,0,0,.07);
                transition: transform .2s;
                .img {
                    width: 100%
                }
                .body {
                    margin: 20px;

                    .titulo {
                        font-weight: 600;
                        font-size: 19px
                    }

                    .paragraph {
                        color: #8d8d8d;
                        font-weight: 400;
                        font-size: 14px;
                    }

                }


            }

            .container-card:hover {
                transform: scale(1.03);
            }
        }
    }
</style>