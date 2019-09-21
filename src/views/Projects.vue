<template>
    <div class="mt-5">
        <div class="projects-header">

        </div>
        <div 
            class="masonry-layout container mansory-img" 
            :class="{ [`columns-${ columnsCount }`]: true }"
            v-viewer
            >
            <div 
                class="masonry-column "          
                :class="{ [`column-${ i+1 }`]: true }" 
                v-for="(column, i)  in masonryLayoutReact" :key="i" :column="i"
                >

                <div class="gallery-item masonry-item" v-for="(card, i) in column" :key="i" :card="card">
                    <img  :src="card" width="100%" alt="">

                </div>

                

            </div>
        </div>
        <div class="container project-description mt-3">
            <div class="col">
                <div class="row">
                    <div class=" col-12 col-sm-12 col-md-12 col-lg-6 mb-1 mb-sm-1 mb-md-1 mb-lg-0">
                        <h4 v-text="getProject(id).title"></h4>
                        <p class="parrafo" v-html="getProject(id).paragraph" ></p>
                    </div>
                    <div class="table-container col-12 col-sm-12 col-md-12 col-lg-6">
                        <h4 class="mb-3">Tecnologias utilizadas</h4>
                        <table class="table table-responsive  ">
                            <thead>
                                <tr>
                                    <th class="name" scope="col">Tecnologia</th>
                                    <th scope="col">Conoce</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(tech, i) in getProject(id).techs" :key="i">                                
                                    <td class="name">{{ tech.name }}</td>
                                    <td>
                                        <a :href="tech.url" target="_blank" >{{ tech.url }}</a>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>          
        </div>
    </div>
</template>
<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
import { mapGetters } from "vuex";

Vue.use(Viewer)


export default {
    components: {
        // Viewer
    },
    data() {
        return {
            cards: [
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/fri-c-financiera/1.png',
                    name: 'javascript'
                },
                 {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/fri-c-financiera/5.png',
                    name: 'php'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/fri-c-financiera/6.png',
                    name: 'typescript'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/fri-c-financiera/2.png',
                    name: 'dart'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/fri-c-financiera/3.png',
                    name: 'electron'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/fri-c-financiera/4.png',
                    name: 'nodejs'
                },
               
            ],                  
            columnsCount: 3,
            tecnologias: [
                {
                    name: 'JavaScript',
                    url: 'https://www.javascript.com'
                },
                {
                    name: 'Laravel',
                    url: 'https://laravel.com/',
                },
                {
                    name: 'MySql',
                    url: 'https://www.mysql.com/'
                }
            ],
            id: ''
        }
    },
    computed: {
        masonryLayoutReact() {
            let columnsElements = []
        
            for( let i = 0; i < this.columnsCount; i++){

                let columnObj = []
                    
                columnsElements.push(columnObj)
            }
        
            for(let m = 0; m < Math.ceil(this.getProject(this.id).images.length / this.columnsCount); m++){

                for(let n = 0; n < this.columnsCount; n++) {

                    let item = this.getProject(this.id).images[ m * this.columnsCount + n]
                    
                    if (item) {
                        columnsElements[n].push(item)                        
                    }                  
                   
                }
            }           

            return columnsElements
        },
        ...mapGetters(['getProject'])
    },
    created() {
        this.id = this.$route.params.id
    },
    watch: {
        '$route'(to) {
            this.id = to.params.id
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            

            if (window.outerWidth < 660 || window.innerWidth < 660) {
                this.columnsCount = 1
            } else {
                this.columnsCount = 3
            }

        })

        if (window.outerWidth < 660 || window.innerWidth < 660) {
            this.columnsCount = 1
        } else {
            this.columnsCount = 3
        }
    }
}
</script>
<style lang="scss" scoped>
    .projects-header {
        height: 150px;
        background-size: cover;
        background-image: url(https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/12/2017/03/Port_2_Background.jpg);
        background-color: rgb(63, 54, 107);
    }

    .mansory-img {
        // height: 300px;;
        position: relative;
        // background: rgba(204, 204, 204, 0.521);
        top: -50px;
        img {
            box-shadow: 0px 6px 12px 2px rgba(0,0,0,.07); 
            transition: transform .3s;
            cursor: pointer;
        }

        img:hover {
            transform: scale(1.03);
        }

    }

    .project-description {
        position: relative;
        top: -50px;

        h4 {
            font-weight: 700;
        }

        .parrafo {
            font-size: 14px;
            color: #696969;
        }

        .table-container {
            font-size: 14px;

            table {

                @media screen and (min-width: 600px){
                    display: inline-table;
                }
            }
            
        }

    }
</style>