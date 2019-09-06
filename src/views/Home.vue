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
            <div class="col-12  col-sm-12 col-md-12 col-lg-8 col-xl-9">
              <MasteryContainer />
            </div>
            <div class="col-12  col-sm-12 col-md-12 col-lg-4 col-xl-3">            
              <list-posts />
            </div>
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

export default { 
  components: {    
    MasteryContainer,
    ListPosts,
    HomeHeader
  }
}
</script>
