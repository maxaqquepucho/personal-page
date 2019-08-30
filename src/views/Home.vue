<template>
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
</template>

<script>
// @ is an alias to /src
import MasteryContainer from "@/components/Sections/MasteryContainer.vue";
import ListPosts from "@/components/general/ListPosts.vue";

export default { 
  components: {    
    MasteryContainer,
    ListPosts
  }
}
</script>
