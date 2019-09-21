<template>
    <div>
        <top-navbar /> 
        
        <Content />

        <FooterTecnology  />
        <footer-component />
    </div>
</template>
<script>
import TopNavbar from "./TopNavbar.vue";
import Content from "./Content.vue";
import FooterComponent from './Footer.vue'

import FooterTecnology from "@/components/general/FooterTecnology.vue";

export default {
    components : {
        TopNavbar,
        Content,
        FooterComponent,
        FooterTecnology
    }

};
</script>