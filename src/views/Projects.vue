<template>
    <div class="mt-5">
        <div class="projects-header">

        </div>
        <div class="container-fluid">
        <div class="col">
          <div class="row">
            <div class="col-12  col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <MasteryContainer :routeObj="routeObj" :techs="getProjects" />
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
            routeObj: {
              name: 'proyecto',
              paramKey: 'id'              
            }
        }
    },
    computed: {        
        ...mapGetters(['getProjects'])
    },
    created() {
        
    },
    mounted() {
        analytics.track('Projects page mounted', {
          title: 'Snow Fall',
          subtitle: 'The Avalanche at Tunnel Creek',
          author: 'John Branch'
        });
    }
}
</script>
<style lang="scss" scoped>
    

    
</style>