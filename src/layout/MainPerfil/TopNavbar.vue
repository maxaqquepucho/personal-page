<template>
  <!-- Navigation -->
  <nav class="topNav fixed-top " :class="{ isNotHome, watchScroll }" >
    <div class="container">

      <div class="header-menu d-flex">
        <router-link class="home-icon align-self-center " :class="{ 'isNotHome-btn-humb': isNotHome }"  to="/home">@MaxAqq</router-link>
        <button class="" :class="{ 'isNotHome-btn-humb': isNotHome }" type="button" @click="mostrarMenu = !mostrarMenu"> 
          <i class="fas fa-bars"></i>
        </button>
        
      </div>
        
      <div class="menu" :class="{ mostrarMenu }">
        <ul class="">
          <li class="nav-item">
            <router-link class="" :class="{ 'isNotHome-item': isNotHome }"  to="/">
              <i class="far fa-address-card"></i>
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="" :class="{ 'isNotHome-item': isNotHome }" to="/proyecto">
              <i class="fas fa-laptop-code"></i>
              Proyectos
            </router-link>
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      mostrarMenu: false,
      isNotHome: true,
      watchScroll: false
    }   

  },
  methods: {
    checkIsHome(name) {
      if (name == 'home') {
        this.isNotHome = false
        return
      }

      this.isNotHome = true

      
    }
  },
  mounted() {
    this.checkIsHome(this.$route.name)

    window.addEventListener('scroll', (e) => {
      let scrollPos = window.scrollY

      if (scrollPos < 1) {
        this.watchScroll = false
        return
      }

      this.watchScroll = true
      
    })

  },
  watch: {
    '$route'(to) {
      console.log(to)
      this.checkIsHome(to.name)
        this.mostrarMenu = false

      
    }
  }

    
}
</script>
<style lang="scss" scoped>
  .topNav {
    // background: #40434b;
    // position: relative;
    transition: all .17s ease;
    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      transition: all .5s ease;


      .header-menu {
        
        .home-icon {
          color:rgba(255, 253, 253, 0.795);
          font-weight: 700;
        }

        button {
          // border: none;
          border: solid 2px #ccc;
          border-radius: 5px;
          background: none;
          color: #ccc;
          transition: all .5s ease;
          display: none;
        }

        button:hover {
          color: white;
          border: solid 2px white;
        }

        .isNotHome-btn-humb {
          color: #777777;
        }

        .isNotHome-btn-humb:hover {
          color: black;
        }

        @media screen and (max-width: 680px) {

          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-top: 10px;
          padding-bottom: 10px;

          button {
            display: block;
          }
        }
      }

      .menu {
        // position: absolute;
        // right: 0;
        ul {
          display: flex;
          flex-direction: row;
          list-style: none;
          margin: 0;
          padding: 0;


          li {

            a {

              font-size: 14px;
              padding: 20px;
              display: block;
              font-weight: 700;
              color: rgba(255, 253, 253, 0.795);
              
              transition: all .5s ease;
              text-decoration-line: none;
            }

            // a:hover{
            //   color: white;
            // }

            
            .isNotHome-item {
              color:#777777;
            }

          }

          
        }
      }

      @media screen and (max-width: 680px) {
        flex-direction: column;
        overflow: hidden;
        
        .menu {
          position: absolute;
          top: -100px;
          opacity: 0;
          transition: all .5s ease;
          ul {
            
            flex-direction: column;
            padding-bottom: 5px;

            li {
              a {
                padding: 5px 10px 10px 0px;
              }
            }
          }
        }
      }

    }

    .mostrarMenu {

      @media screen and (max-width: 680px) {

        position: relative !important;
        top: 0px !important;
        opacity: 1 !important;
      }
        
    }    

    
  }

  .watchScroll {
    background: #262626;
    // box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0),
    //             0px 1px 5px 0px rgba(0, 0, 0, 0.1),
    //             0px 1px 10px 0px rgba(0, 0, 0, 0.07);
    border-bottom: solid rgba(0,0,0,0.1) 1px;
  }
  .isNotHome {
    background: rgba(255, 255, 255, 0.97);
    // box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0),
    //             0px 1px 5px 0px rgba(0, 0, 0, 0.1),
    //             0px 1px 10px 0px rgba(0, 0, 0, 0.07);

    border-bottom: solid rgba(0,0,0,0.1) 1px;
   }
</style>
