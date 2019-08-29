<template>
    <div>
        <masonry-card v-for="(card, i) in column" :key="i" :card="card" />
    </div>
</template>
<script>

import MasonryCard from "./MasonryCard.vue";
export default {
    props: {
        column: {
            type: Array,
            required: true
        }
    },
    components: {
        MasonryCard
    }
}
</script>
<style scoped>

</style>