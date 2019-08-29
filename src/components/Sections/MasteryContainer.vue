<template>
    <div class="masonry-layout mt-5 mb-5" :class="{ [`columns-${ columnsCount }`]: true }">

        <masonry-column
            class="masonry-column "          
            :class="{ [`column-${ i+1 }`]: true }" 
            v-for="(column, i)  in masonryLayoutReact" :key="i" :column="column"  />       
        
    </div>
</template>
<script>

import MasonryColumn from "../general/MasonryColumn.vue";

export default {
    data() {
        return {
            cards: [
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/dart.jpg'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/electron.jpg'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/js.jpg'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/nodejs.png'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/php.jpg'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/ts.jpeg'
                },
                {
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/vue.png'
                }
            ],                  
            columnsCount: 3
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
        
       
    }
    
}
</script>
<style lang="scss" >

.masonry-layout {
    --columns: 1;
    --gap: 2rem;    
    $columns: 6;
  
    display: grid;
    grid-template-columns: repeat(var(--columns),1fr);
    grid-gap: var(--gap);
  
    .masonry-item{
        margin-bottom: var(--gap);
    }
  
    @for $i from 1 through $columns {
        &.columns-#{$i}{
            --columns: #{$i};
        }
    }
}
</style>