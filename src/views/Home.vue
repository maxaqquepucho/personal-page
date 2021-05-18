<template>
  <!-- <transition name="fade" mode="out-in"> -->
    <div  >
      <div class="col">
        <div class="row">
          <HomeHeader />
        </div>
      </div>

      <div class="container-fluid">
        <div class="col">
          <div class="row">
            <div class="col-12  col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <MasteryContainer :routeObj="routeObj" :techs="getTec" />
            </div>
            <!-- <div class="col-12  col-sm-12 col-md-12 col-lg-4 col-xl-3">            
              <list-posts :posts="posts" class="mt-5" />
            </div> -->
          </div>
        </div>

      </div>

    </div>
  <!-- </transition> -->
</template>

<script>
// @ is an alias to /src
import MasteryContainer from "@/components/Sections/MasteryContainer.vue";
import ListPosts from "@/components/general/ListPosts.vue";
import HomeHeader from "@/components/general/HomeHeader.vue";
import { mapGetters } from "vuex";

export default { 
  data() {
    return {
      posts: [
        {
          img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/dart-square.jpg'
        },
        {
          img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/flutter-square.png'
        },
        {
          img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/node-square.png'
        },
        {
          img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/js-square.png'
        },
        
        {
          img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/node-square2.png'
        },
        {
          img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/ts-square.png'
        },
        {
          img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/vue-square.png'
        },  
      ],
      routeObj: {
        name: 'tecnologia',
        paramKey: 'nombre'
      }
    }
  },
  computed: {
    ...mapGetters(['getTec'])
  },
  components: {    
    MasteryContainer,
    ListPosts,
    HomeHeader
  },
  mounted() {
    analytics.track('Home page mounted', {
      title: 'Snow Fall',
      subtitle: 'The Avalanche at Tunnel Creek',
      author: 'John Branch'
    });
  }
}
</script>
