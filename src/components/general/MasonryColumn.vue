<template>
    <div>
        <masonry-card v-for="(card, i) in column" :key="i" :card="card" :routeObj="routeObj" />
    </div>
</template>
<script>

import MasonryCard from "./MasonryCard.vue";
export default {
    props: {
        column: {
            type: Array,
            required: true
        },
        routeObj: {
            type: Object,
            required: true,            
        }
    },
    components: {
        MasonryCard
    }
}
</script>
<style scoped>

</style>