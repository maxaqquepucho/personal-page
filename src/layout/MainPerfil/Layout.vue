<template>
    <div>
        <top-navbar /> 
        
        <Content />

        <footer-component />
    </div>
</template>
<script>
import TopNavbar from "./TopNavbar.vue";
import Content from "./Content.vue";
import FooterComponent from './Footer.vue'

export default {
    components : {
        TopNavbar,
        Content,
        FooterComponent
    }

};
</script>