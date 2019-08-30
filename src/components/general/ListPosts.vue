<template>
    <div class="posts-container mt-5">
        <h5>Proyectos Relevantes</h5>
        <div class="post-item" v-for="(post, i) in posts" :key="i">
            <div class="post-img">
                <a href="">
                    <div class="img-container">
                        <img :src="post.img" alt="">
                    </div>
                </a>
                <div class="float-icon"> 0</div>
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
    data() {
        return {
            posts: [
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/dart-square.jpg'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/flutter-square.png'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/js-square.png'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/node-square.png'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/node-square2.png'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/ts-square.png'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/vue-square.png'
                },
            ]
        }
    }
    
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
        min-height: 76px;
        box-sizing: content-box;
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

            .float-icon {
                background-color: #47c9e5;
                padding: 2px 6px;
                line-height: 1;
                font-weight: 700;
                border-radius: 20px;
                position: absolute;
                top: 0;
                right: 0;
                font-size: 13px;
                z-index: 500;
                color: #fff !important;
                box-shadow: 0px 2px 5px 1px rgba(0,0,0,.2);
            }
        }

        .post-content {
            padding-left: 95px;
            word-wrap: break-word;
            .categories {
                text-transform: uppercase;
                margin-bottom: 25px;
                text-decoration-line: none;
                a {
                    font-family: "Montserrat";
                    color: #8d8d8d;
                    font-size: 13px;
                    transition: .3s all ease-in-out;
                }

                a:hover {
                    text-decoration-line: none;
                    color: #47c9e5;
                }
            }

            .title {
                h6 {
                    font-family: "Montserrat";
                    color: #505050;
                    font-weight: 700;
                    margin-top: 3px;
                    margin-bottom: 0;
                    transition: .3s all ease-in-out;
                }


            }

            .title:hover {
                text-decoration-line: none;

                h6 {
                    color: #47c9e5;
                    
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