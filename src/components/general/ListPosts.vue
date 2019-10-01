<template>
    <div class="posts-container" >
        
        <h5 class="mb-4" :class="{ 'title-dark': dark }">Artículos de ejemplo</h5>
        <div class="post-item" :class="{ 'border-b-dark': dark }" v-for="(post, i) in posts" :key="i">
            <div class="post-img">
                <a :href="post.url" target="_blank">
                    <div class="img-container">
                        <img :src="post.img" alt="">
                    </div>
                </a>
                <div class="float-icon"> 0</div>
            </div>
            <div class="post-content" >
                <span class="categories" :class="{'categories-dark': dark}">
                    <a v-for="( category ,i) in post.categories" :key="i" >{{ category }} </a>&nbsp;
                    
                </span>
                <a :href="post.url" target="_blank" class="title">
                    <h6 :class="{ 'post-title-dark': dark }" >{{ post.title }}</h6>

                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
            
        }
    },
    props: {
        posts: {
            type: Array,
            default: []
        },
        dark: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        
    }
    
}
</script>
<style lang="scss" scoped>

.posts-container {
    font-family: "Montserrat";  
    

    $titulo: #505050; 


    h5 {
        font-family: "Montserrat";
        font-weight: 700;
        color: $titulo;
        font-size: 20px;
    }

    .post-item {
        // display: ruby;
        position: relative;
        border-bottom: solid 1px;
        border-color: #e3e3e3 ;
        padding-bottom: 20px;
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

    .border-b-dark {
        border-bottom: solid 1px rgba(255,255,255,0.10);
    }

    .post-item:last-child {        
        border-bottom: none;
        // border-color: none;
        padding-bottom: 20px;
        margin-bottom: 0;
    }



    
}

.title-dark {
    color: white !important;
}

.categories-dark {
    a {
        color: white !important;

    }
}

.post-title-dark {
    color: white !important;
}



</style>