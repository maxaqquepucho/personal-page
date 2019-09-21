<template>
    <div>
        <h3 class="mb-4 text-center">Proyectos que están relacionadas</h3>
        <div class="col list-tecs">
            <div class="row ">
                <router-link 
                    v-for="(project, i)  in projects" 
                    :key="i" 
                    class=" col-12 col-sm-12 col-md-6 col-lg-4 tech-card"
                    :to="{ name: 'proyecto', params: { id: project.id } }"
                    
                    >
                    <div class="row ">
                        <div class="container-card ml-3 mr-3 mb-4 mb-sm-4 mb-md-4 mb-lg-0">
                            <div class="mb-3">
                                <img class="img" :src="project.img" alt="imagen"> 
                            </div>
                            <div class="body">
                                <h5 class="titulo">{{ getProject(project.id).title || 'no tien nombre' }}</h5>
                                <p class="paragraph" v-html="lengthParagraph(project.id)"></p>

                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>

import { mapGetters } from "vuex";
export default {
    data() {
        return {
            
        }
    },
    props: {
        projects: {
            type: Array,
            default: []
        }
    },
    computed: {
        ...mapGetters(['getProject']),
        lengthParagraph: function ()  {

            let _this = this
            return function (id) {
                let paragraph = _this.getProject(id).paragraph
                if ( paragraph.length > 100) {
                    return paragraph.substring(0,100) + '...';
                }
    
                return paragraph
                
            }
        }
    }
}
</script>
<style lang="scss" scoped>

    .list-tecs {
        .tech-card {
            color: black;
            text-decoration: none;

            .container-card {
                cursor: pointer;
                box-shadow: 0px 6px 12px 2px rgba(0,0,0,.07);
                transition: transform .2s;
                .img {
                    width: 100%
                }
                .body {
                    margin: 20px;

                    .titulo {
                        font-weight: 600;
                        font-size: 19px
                    }

                    .paragraph {
                        color: #8d8d8d;
                        font-weight: 400;
                        font-size: 14px;
                    }

                }

            }

            .container-card:hover {
                transform: scale(1.03);
            }
        }
    }
</style>