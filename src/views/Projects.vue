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
                v-for="(column, i)  in masonryLayoutReact" :key="i" :column="column"
                >

                <div class="gallery-item masonry-item" v-for="(card, i) in column" :key="i" :card="card">
                    <img style="border: solid 1px #ccc" :src="card.img" width="100%" alt="">

                </div>

                

            </div>
        </div>
    </div>
</template>
<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
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
            columnsCount: 3
        }
    },
    computed: {
        masonryLayoutReact() {
            let columnsElements = []
        
            for( let i = 0; i < this.columnsCount; i++){

                let columnObj = []
                    
                columnsElements.push(columnObj)
            }
        
            for(let m = 0; m < Math.ceil(this.cards.length / this.columnsCount); m++){

                for(let n = 0; n < this.columnsCount; n++) {

                    let item = this.cards[ m * this.columnsCount + n]
                    
                    if (item) {
                        columnsElements[n].push(item)                        
                    }                  
                   
                }
            }           

            return columnsElements
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
        height: 250px;
        background-size: cover;
        background-image: url(https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/12/2017/03/Port_2_Background.jpg)
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
</style>