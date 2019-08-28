<template>
    <div class="container mt-5 mb-5" id="gallery">
        <mastery-card class="gallery-item" v-for="(card, i)  in cards" :key="i" :card="card"  />
        
    </div>
</template>
<script>
import MasteryCard from "../general/MasteryCard.vue";
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
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/nodejs.svg'
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
            ]
        }
    },
    components: {
        MasteryCard
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
        }
    },
    mounted() {
        this.masonryLayout(document.getElementById('gallery'),
              document.querySelectorAll('.gallery-item'), 1)
    }
    
}
</script>
<style lang="scss" scoped>

.masonry-layout {
    --columns: 1;
    --gap: 1.2rem;    
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