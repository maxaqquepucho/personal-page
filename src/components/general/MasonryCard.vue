<template>
    <router-link :to="{ name:'tecnologias', params: { nombre: card.id || card.name   } }"
                    :tag="'div'"
                 class="m-card gallery-item masonry-item"                  
                 >

        <a href="">
            <div class="card-h">
                <img :src="card.img" alt="imagen del lenguaje dart">
            </div>
            <div class="body-container">
                <div class="card-b">
                    <div>
                        <span>Por Max Aqquepucho Agosto 27, 2019</span>
                    </div>
                    <a class="card-title">
                        <h4 v-text="card.title"> Dart, crear Scripts simples o aplicaciones (App) completas</h4>
                    </a>
                    <p v-html="lengthParagraph">Puede usar Dart para escribir scripts simples o aplicaciones 
                        con todas las funciones. Ya sea que esté creando una aplicación móvil...</p>
                </div>
                <div class="card-f">
                    <a href="">Programacion</a>, 
                    <a href="">lenguaje</a>

                    <div class="btn-container">
                        <button>Ver más</button>
                    </div>
                </div>

            </div>

        </a>
    </router-link>    
</template>
<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    computed: {
        lengthParagraph() {
            if (this.card.paragraph.length > 130) {
                let newParagraph = this.card.paragraph.substring(0, 130) + '...'
                return newParagraph
            } 

            return this.card.paragraph
        }
    }
}
</script>
<style lang="scss" scoped>
.m-card {
    // width: 380px;
    font-family: "Montserrat";
    border-radius: 3px;
    // background: #ccc;
    transition: .3s all ease-in-out;
    transform: translateY(0px);
    a {
        text-decoration: none;
    }
    .card-h {
        // border-radius: 5px 5px 0 0;
        img {
            width: 100%
        }
    }

    .body-container {
        box-shadow: 0px 15px 45px -9px rgba(0,0,0,.2);
        // border-radius: 0 0 5px 5px;
        transition: .3s all ease-in-out;
        .card-b {
            color: #8d8d8d;
            padding: 19px 12% 19px 12%;

            span {
                font-size: .8rem;

            }

            .card-title {
                text-decoration-line: none;

                h4 {
                    color: #3f3f3f;
                    font-family: "Montserrat";
                    font-weight: 700;
                    // font-size: 28px;
                    word-wrap: break-word;
                    margin-bottom: 1.2rem;
                    margin-top: .5rem;
                    transition: .3s all ease-in-out;  
                }
            }

            .card-title:hover {
                h4 {
                    color: #47c9e5
                }
            }


            p {
                line-height: 1.7;
                margin-top: 5px;
                margin-bottom: 0;
                font-size: 14px;
            }
        }

        .card-f {
            padding: 19px 12% 19px 12%;
            border-top: 1px solid #e9e9e9;
            color: #8d8d8d;
            font-weight: 400;
            font-size: 13px;
            text-transform: uppercase;
            position: relative;
            
            a {
                color: #8d8d8d;
                transition: .3s all ease-in-out;
                text-decoration-line: none
            }

            a:hover {
                color: #3f3f3f;
            }

            .btn-container {
                position: absolute;
                top: -20px;
                right: 0;
                width: 38%;
                background: white;
                display: flex;
                justify-content: center;

                button {
                    border: none;
                    padding: 8px 15px 8px 15px;
                    border-radius: 25px;
                    background: #f6f6f6;
                    color: #707070;
                    transition: .3s all ease-in-out;
                }

                button:hover {
                    background-color: #47c9e5;
                    color: white;
                }
            }
        }
    }

}

.m-card:hover  {
    transform: translateY(2px);
    .body-container {
        box-shadow: 0 1px 1px 1px rgba(0,0,0,.06);

    }
}
</style>