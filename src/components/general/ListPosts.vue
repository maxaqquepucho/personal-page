<template>
    <div class="posts-container mt-5">
        <h5>Proyectos Relevantes</h5>
        <div class="post-item" v-for="(a, i) in 4" :key="i">
            <div class="post-img">
                <a href="">
                    <div class="img-container">
                        <img src="https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/vue-square.jpg" alt="">
                    </div>
                </a>
            </div>
            <div class="post-content" >
                <span class="categories">
                    <a href="">Tecnología</a>&nbsp;
                    <a href="">Diseño</a>
                </span>
                <a href="" class="title">
                    <h6>Proyectos Medic perteniciente a Rimac</h6>

                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.posts-container {
    font-family: "Montserrat";  

    h5 {
        font-family: "Montserrat";
        font-weight: 700;
        color: #505050;
        font-size: 20px;
    }

    .post-item {
        // display: ruby;
        position: relative;
        border-bottom: solid 1px;
        border-color: #e3e3e3 ;
        padding-bottom: 15px;
        margin-bottom: 25px;
        .post-img {
            position: absolute;
            width: 76px;
            height: 76px;
            border-radius: 100px;


            .img-container {
                overflow: hidden;
                border-radius: 100px;
                img {
                    width: 100%;
                    background-size: cover;
                    background-position: 50% 50%;
                }
            }
        }

        .post-content {
            padding-left: 95px;
            word-wrap: break-word;
            .categories {
                text-transform: uppercase;
                margin-bottom: 25px;
                a {
                    font-family: "Montserrat";
                    color: #8d8d8d;
                    font-size: 13px;

                }
            }

            .title {
                h6 {
                    font-family: "Montserrat";
                    color: #505050;
                    font-weight: 700;
                    margin-top: 3px
                }
            }


        }
        
    }

    .post-item:last-child {        
        border-bottom: none;

        padding-bottom: 15px;
        margin-bottom: 0;
    }
}
</style>