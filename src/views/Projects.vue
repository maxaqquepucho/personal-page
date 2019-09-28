<template>
    <div class="mt-5">
        <div class="projects-header">

        </div>
        <div class="container-fluid">
        <div class="col">
          <div class="row">
            <div class="col-12  col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <MasteryContainer :techs="getProjects" />
            </div>
            <!-- <div class="col-12  col-sm-12 col-md-12 col-lg-4 col-xl-3">            
              <list-posts :posts="posts" class="mt-5" />
            </div> -->
          </div>
        </div>

      </div>
        
        
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import MasteryContainer from "@/components/Sections/MasteryContainer.vue";

export default {
    components: {
        // Viewer
        MasteryContainer
    },
    data() {
        return {
            
        }
    },
    computed: {        
        ...mapGetters(['getProjects'])
    },
    created() {
        
    },
    mounted() {
        
    }
}
</script>
<style lang="scss" scoped>
    

    
</style>