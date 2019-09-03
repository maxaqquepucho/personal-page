<template>
  <!-- Navigation -->
  <nav class="topNav fixed-top" >
    <div class="container">

      <div class="header-menu d-flex">
        <a class="home-icon align-self-center" href="">@MaxAqq</a>
        <button class="" type="button" @click="mostrarMenu = !mostrarMenu"> 
          <i class="fas fa-bars"></i>
        </button>
        
      </div>
        
      <div class="menu" :class="{ mostrarMenu }">
        <ul class="">
          
          <li class="nav-item">
            <a class="" href="">
              <i class="fas fa-laptop-code"></i>
              Proyectos
            </a>
          </li>
          <li class="nav-item">
            <a class="" href="">
              <i class="far fa-address-card"></i>
              Contacto
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      mostrarMenu: false
    }
  }
    
}
</script>
<style lang="scss" scoped>
  .topNav {
    // background: #40434b;
    // position: relative;
    
    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;



      .header-menu {
        
        .home-icon {
          color:white;
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
        // right: 0
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

            a:hover{
              color: white;
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
</style>
