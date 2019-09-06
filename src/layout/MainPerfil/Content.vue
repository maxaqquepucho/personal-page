<template>

    
        <!-- <header-component /> -->
        <!-- <transition name="fade" mode="out-in"> -->
        <transition
            mode="out-in"
            name="custom-classes-transition"
            enter-active-class="animated fadeIn faster"
            leave-active-class="animated fadeOut faster"
        >
            <router-view> </router-view>
        <!-- </transition> -->
        <!-- Services Section -->
        <!-- <section class="page-section" id="services">
            <div class="container">
                <h2 class="text-center mt-0">At Your Service</h2>
                <hr class="divider my-4">
                <div class="row">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Sturdy Themes</h3>
                            <p class="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Up to Date</h3>
                            <p class="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-globe text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Ready to Publish</h3>
                            <p class="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-heart text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Made with Love</h3>
                            <p class="text-muted mb-0">Is it really open source if it's not made with love?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        </transition>
        <!-- About Section -->
        <!-- <section class="slide-section " >

            <div class="slide">
                <hooper :settings="hooperSettings" :autoPlay="true"  :playSpeed="3000" style="height: 100%">
                    
                    <slide v-for="(slide, i)  in slides" :key="i">
                        <div class="position-relative mt-5 " style="">
                            <div class="mb-4">
                                <h3 class="text-center">{{ slide.title }}</h3>
                                <hr class="divider my-3">
                            </div>
                            <div class="img-container">
                                <img class="img-slide "  :src="slide.img" alt="">
                            </div>
                            
                        </div>
                    </slide>
                    
                
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                    <hooper-pagination slot="hooper-addons"></hooper-pagination>
                </hooper>

                <div class="mt-3 text-center">
                    <button class="btn btn-outline-primary btn-slide"> Ver más </button>
                </div>
            </div>
            
        </section> -->
    


</template>

<script>
// import HeaderComponent from "../../components/MainPerfil/Header.vue";


// import { 
//         Hooper,
//         Slide,
//         Progress as HooperProgress,
//         Pagination as HooperPagination,
//         Navigation as HooperNavigation
//     } from 'hooper';

//CSS    
// import 'hooper/dist/hooper.css';
export default {
    data() {
        return {
            hooperSettings: {
                itemsToShow: 1,
                wheelControl: false
                // centerMode: true
            },
            slides: [
                {
                    title: 'Proyecto Medic',
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/slide5.png'
                },
                {
                    title: 'Proyecto Medic',
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/slide6.png'
                },
                {
                    title: 'Proyecto owlfiles',
                    img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/slide7.png'
                }
            ]
        };
    },
    components: {
        // HeaderComponent,
        // Hooper,
        // Slide,
        // HooperProgress,
        // HooperPagination,
        // HooperNavigation,
        
    }
}
</script>
<style >
    

    
</style>
