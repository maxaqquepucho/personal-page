<template>
    <div class="masonry-layout mt-5" :class="{ [`columns-${ columnsCount }`]: true }">

        <masonry-column
            class="masonry-column "          
            :class="{ [`column-${ i+1 }`]: true }" 
            v-for="(column, i)  in masonryLayoutReact" :key="i" :column="column" :routeObj="routeObj"  />       
        
    </div>
</template>
<script>

import MasonryColumn from "../general/MasonryColumn.vue";

export default {
    data() {
        return {
            cards: [
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/js.jpg',
                    name: 'javascript'
                },
                // {
                //     img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/dart.jpg',
                //     name: 'dart'
                // },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/electron.jpg',
                    name: 'electron'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/nodejs.png',
                    name: 'nodejs'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/php.jpg',
                    name: 'php'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/ts.jpeg',
                    name: 'typescript'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/vue.png',
                    name: 'vuejs'
                }
            ],                  
            columnsCount: 3
        }
    },
    props: {
        techs: {
            type: Array,
            default: []
        },
        routeObj: {
            type: Object,
            required: true,            
        }
    },
    components: {       
        MasonryColumn
    },
    computed: {
        masonryLayoutReact() {
            let columnsElements = []
        
            for( let i = 0; i < this.columnsCount; i++){

                let columnObj = []
                    
                columnsElements.push(columnObj)
            }
        
            for(let m = 0; m < Math.ceil(this.techs.length / this.columnsCount); m++){

                for(let n = 0; n < this.columnsCount; n++) {

                    let item = this.techs[ m * this.columnsCount + n]
                    
                    if (item) {
                        columnsElements[n].push(item)                        
                    }                  
                   
                }
            }           

            return columnsElements
        }
    },
    methods: {
        masonryLayout(containerElem, itemsElems, columns) {
            containerElem.classList.add('masonry-layout', `columns-${columns}`)
            let columnsElements = []
        
            for( let i = 1; i <= columns; i++){
                let column = document.createElement('div')
                column.classList.add('masonry-column', `column-${i}`)
                containerElem.appendChild(column)
                columnsElements.push(column)
            }
        
            for(let m = 0; m < Math.ceil(itemsElems.length / columns); m++){
                for(let n = 0; n < columns; n++){
                    let item = itemsElems[ m * columns + n]
                    columnsElements[n].appendChild(item)
                    item.classList.add('masonry-item')
                }
            }
        },
        
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
<style lang="scss" >


</style>