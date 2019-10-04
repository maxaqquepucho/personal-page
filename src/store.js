import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tecnologies: [
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/js.jpg',
        name: 'javascript',
        id:'javascript',
        title: 'JavaScript, El lenguaje más importante de la web',
        paragraph: `Es un lenguaje de programación que te permite realizar actividades complejas en una página web cada vez más una página web hace más cosas que sólo mostrar información estática como mostrar actualizaciones de contenido en el momento, interactuar con mapas, animaciones gráficas 2D/3D etc. Puedes estar seguro que JavaScript está involucrado. Es la tercera capa del pastel de los estándares en las tecnologías para la web, dos de las cuales son (HTML y CSS).`,
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/project-presentation/vue.png',            
            id: 'id0001'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/project-presentation/vue2.png',
            id: 'id0002'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/1.png',
            id: 'id0005'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article-image.jpeg',
            id: 'id0006'
          }
        ]
      },
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/ts.jpeg',
        name: 'typescript',
        id:'typescript',
        title: 'TypeScript, Los superpoderes de javascript',
        paragraph: 'Es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases. Anders Hejlsberg, diseñador de C# y creador de Delphi y Turbo Pascal, ha trabajado en el desarrollo de TypeScript.1​ TypeScript puede ser usado para desarrollar aplicaciones JavaScript que se ejecutarán en el lado del cliente o del servidor (Node.js).',
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/all/photo-gallery.jpg',            
            id: 'id0003'
          }
        ]
      },
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/vue.png',
        name: 'vuejs',
        id: 'vuejs',
        title: 'Vue, el framework progresivo de javascript',
        paragraph: 'Vue js es un framework de JavaScript de código abierto para crear interfaces de usuario y aplicaciones de una sola página. Primero fue creado por <a href="https://twitter.com/youyuxi" target="_blank"> Evan You </a>, y ahora lo mantienen él y el resto de los miembros activos del equipo central provenientes de varias compañías como Netlify y Netguru',
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/project-presentation/vue.png',            
            id: 'id0001'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/project-presentation/vue2.png',
            id: 'id0002'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/1.png',
            id: 'id0005'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article-image.jpeg',
            id: 'id0006'
          }
        ]
      },
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/nodejs-dark.jpg',
        name: 'nodejs',
        id: 'nodejs',
        title: 'Node.js es ejecutar javascript de lado del servidor',
        paragraph: 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google',
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/all/photo-gallery.jpg',            
            id: 'id0003'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/all/article_api.png',
            id: 'id0007'
          }
        ]
      },
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/laravel.png',
        name: 'laravel',
        id: 'laravel',
        title: 'Laravel es un framework para desarrollar aplicaciones y servicios web con PHP',
        paragraph: 'Laravel es un framework de código abierto para desarrollar aplicaciones y servicios web con PHP 5 y PHP 7. Su filosofía es desarrollar código PHP de forma elegante y simple, evitando el "código espagueti". Fue creado en 2011 y tiene una gran influencia de frameworks como Ruby on Rails, Sinatra y ASP.NET MVC',
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/all/fri-ecommerce-maqueta.jpg',            
            id: 'id0004'
          }
        ]
      },
      
      // {
      //   img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/dart.jpg',
      //   name: 'dart',
      //   projects: [
      //     {
      //       img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/dart-square.jpg'
      //     },
      //     {
      //       img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/flutter-square.png'
      //     },
      //     {
      //       img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/node-square.png'
      //     },
      //   ]
      // },
      // {
      //   img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/electron.jpg',
      //   name: 'electron',
      //   projects: [
      //     {
      //       img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/dart-square.jpg'
      //     },
      //     {
      //       img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/flutter-square.png'
      //     },
      //     {
      //       img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/node-square.png'
      //     },
      //   ]
      // },
      
      // {
      //   img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/php.jpg',
      //   name: 'php',
      //   projects: [
      //     {
      //       img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/dart-square.jpg'
      //     },
      //     {
      //       img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/flutter-square.png'
      //     },
      //     {
      //       img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/node-square.png'
      //     },
      //   ]
      // },      
      
    ],
    projects: [
      {
        name: 'owlfiles',
        id: 'id0001',
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/project-presentation/vue.png',
        title: 'Maquetación e implementación de servicios',
        paragraph: `Durante el inicio del proyecto hey tenido la labor 
                    de maquetar dichos diseños e implementar servicios,
                    gracias a la caracteristicas de Vuejs muchos de los componentes trabajan reactivamente 
                    utilizando el modulo <a href="https://vuex.vuejs.org" target="_blank"> Vuex </a> 
                    para manejar estado globales en la aplicacion
                    `,
        images: [
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/owlfiles/1.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/owlfiles/2.png',
          // 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/owlfiles/3.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/owlfiles/4.png'
        ],
        techs: [
          {
            name: 'Vuejs',
            url: 'https://vuejs.org',
          },
          {
            name: 'vuetify',
            url: 'https://vuetifyjs.com'
          },
          {
            name: 'Bootstrap',
            url: 'https://getbootstrap.com'
          },      
          {
            name: 'Nodejs',
            url: 'https://nodejs.org'
          },
          
        ]
      },
      {
        name: 'medic',
        id: 'id0002',
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/project-presentation/vue2.png',
        title: 'Maquetacion e implementacion de servicios',
        paragraph: `En este proyecto hey participado realizando la maquetación completa de la 
                    aplicación posteriormente tambien hey desarrollado algunos servicios para ello. La aplicación esta desarrollada
                    en <a href="https://vuejs.org/" target="_blank"> Vuejs </a> gracias a este framework progresivo se mantiene una gran experiencia en performas UX.
                  `,
        images: [
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/medic/1.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/medic/2.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/medic/3.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/medic/4.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/medic/5.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/medic/6.png',
        ],
        techs: [
          {
            name: 'Vuejs',
            url: 'https://vuejs.org',
          },
          {
            name: 'vuetify',
            url: 'https://vuetifyjs.com'
          },
          {
            name: 'Bootstrap',
            url: 'https://getbootstrap.com'
          },
          {
            name: 'Nodejs',
            url: 'https://nodejs.org'
          },
        ]
      },
      {
        name: 'API gallery-photo',
        id: 'id0003',
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/all/photo-gallery.jpg',
        title: 'API de una galeria de fotos',
        paragraph: `Esta API es un proyecto personal con la finalidad de poner a prueba mis 
                    conocimientos en <a href="http://www.typescriptlang.org/" target="_blank"> Typescript </a>
                    utilizando <a href="https://nodejs.org" target="_blank">Nodejs</a>
                     con <a href="https://www.mongodb.com/what-is-mongodb" target="_blank">Mongo DB</a>. <br>
                    La base de datos esta desplegado en los servicios de <a href="https://www.mongodb.com/cloud/atlas" target="_blank">Mongo Atlas</a>,
                    el desarrollo de esta API mantiniene buenas practicas de programación utilizando Node js con Typescript.
                  `,
        images: [
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/photogallery-api/1.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/photogallery-api/2.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/photogallery-api/3.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/photogallery-api/4.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/photogallery-api/5.png'
        ],
        techs: [
          {
            name: 'Nodejs',
            url: 'https://nodejs.org'
          },
          {
            name: 'TypeScript',
            url: 'https://www.typescriptlang.org/',
          },
          {
            name: 'Express',
            url: 'https://expressjs.com'
          },
          {
            name: 'MongoDB',
            url: 'https://www.mongodb.com/what-is-mongodb'
          },
          {
            name: 'Postman',
            url: 'https://www.getpostman.com'
          },
        ]
      },
      {
        name: 'Maquetacion de una tienda virtual',
        id: 'id0004',
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/all/fri-ecommerce-maqueta.jpg',
        title: 'Maquetacion de una tienda virtual',
        paragraph: `En este proyecto hey participado maquetando un nuevo tema que se puede apreciar
                    en la galeria, dicha maquetacion se realizo utilizando el framework 
                    <a href="https://laravel.com" target="_blank"> Laravel </a> una tecnologia muy cómoda para trabajar y fácil de adaptarse gracias
                    a una documentación sencilla de entender y a su gran comunidad de desarrolladores.
                  `,
        images: [
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/fri-c-financiera/1.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/fri-c-financiera/6.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/fri-c-financiera/5.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/fri-c-financiera/4.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/fri-c-financiera/2.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/fri-c-financiera/3.png',
        ],
        techs: [
          {
            name: 'Laravel',
            url: 'https://laravel.com'
          }          
        ]
      },
      // Article Admin
      {
        name: "Administrador de artículos",
        id: "id0005",
        img: "https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/1.png",
        title: "Administrador de artículos y consume servicios de una API",
        paragraph: `
                    El tema original de este proyecto se encuentra en una plataforma
                     donde puedes encontrar diversos temas para Angujar, React y Vue entro otros la cual es <a href="https://www.creative-tim.com" target="_blank"> 
                    Create Tim</a>.
                    <br> Se implementó servicios que corre en una API desarrollado con Nodejs con la finalidad
                    de practicar con este entorno de ejecución y aprender las buenas prácticas de desarrollo.
                    <br> Este proyecto está desarrollado con <a href="https://vuejs.org" target="_blank"> Vuejs</a>, una de las cosas fundamentales
                    del proyecto original trae tiene buenas prácticas de maquetacián y desarrollo, eso ayuda a mejorar nuestra lógica de programación.
                  `,
        images: [
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/1.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/2.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/3.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/4.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/5.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/6.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/7.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/8.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/9.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/10.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/11.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_admin/12.png',

        ],
        techs: [
          {
            name: 'Vuejs',
            url: 'https://vuejs.org',
          },
          {
            name: 'Bootstrap',
            url: 'https://getbootstrap.com'
          },      
          {
            name: 'Nodejs',
            url: 'https://nodejs.org'
          },          
        ]
      },
      // Article Client
      {
        name: "Listado de artículos",
        id: "id0006",
        img: "https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article-image.jpeg",
        title: "Listado de artículos y consume servicios de una API",
        paragraph: `
                    El tema original de este proyecto se encuentra en Bootstrap free Themes. Se implementó servicios que corre en una API desarrollado con Nodejs con la finalidad
                    de practicar con este entorno de ejecución y aprender las buenas prácticas de desarrollo.
                    <br> Este proyecto estuvo desarrollado con Bootstrap y JQuery, eventualmente fuí migrando a <a href="https://vuejs.org" target="_blank">
                     Vuejs </a> así dejando sin dependencias de JQuery y aprovechar las características que nos da <a href="https://vuejs.org" target="_blank"> Vuejs</a>.
                  `,
        images: [
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_client/1.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_client/2.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_client/3.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_client/4.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_client/5.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_client/6.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_client/7.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_client/8.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_client/9.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_client/10.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_client/11.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_client/12.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_client/13.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_client/14.png',          
        ],
        techs: [
          {
            name: 'Vuejs',
            url: 'https://vuejs.org',
          },
          {
            name: 'Bootstrap',
            url: 'https://getbootstrap.com'
          },      
          {
            name: 'Nodejs',
            url: 'https://nodejs.org'
          },          
        ]
      },
      // Article API
      {
        name: "API de artículos",
        id: "id0007",
        img: "https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/all/article_api.png",
        title: "API de artículos",
        paragraph: `
                    Esta API es un proyecto personal desarrollado con la finalidad de poner en prácticas mis habilidades en 
                    <a href="https://nodejs.org " target="_blank">Nodejs</a>,
                     utilizar una base de datos <a href="https://www.oracle.com/es/database/" target="_blank"> Oracle</a> y hacer pruebas 
                     con los servicios de <a href="https://aws.amazon.com" target="_blank"> AWS (Amazon Web Services)</a>.
                     <br>De los servicio de Amazon que utilice son: 
                     <br>
                      <ul>
                        <li><a href="https://aws.amazon.com/s3/" target="_blank">S3</a> </li>
                        <li><a href="https://aws.amazon.com/rds/" target="_blank">RDS </a> (Para la base de datos Oracle)</li>
                        <li><a href="https://aws.amazon.com/ec2/" target="_blank">EC2</a> un servidor VPS</li>
                      </ul> 
                      
                      El servicio S3 se utilizó para guardar cualquier tipo de imagenes de los articulos y assets.
                  `,
        images: [
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_api/1.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_api/2.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_api/3.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_api/4.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_api/5.png',
          'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/article/article_api/6.png',         
        ],
        techs: [
          {
            name: 'Nodejs',
            url: 'https://nodejs.org'
          },          
          {
            name: 'Express',
            url: 'https://expressjs.com'
          },
          {
            name: 'Postman',
            url: 'https://www.getpostman.com'
          },
          {
            name: "Oracle DB",
            url: 'https://www.oracle.com/es/database/'
          },
          {
            name: 'AWS S3',
            url: 'https://aws.amazon.com/s3/'
          },      
        ]
      }
    ]
  },
  mutations: {

  },
  getters: {
    getTec(state) {
      return state.tecnologies
    },
    getOneTec: (state) => (param) => {
      let itemFound = state.tecnologies.filter( item => item.name == param)
      if (itemFound.length != 0 && itemFound.length < 2) {
        return itemFound[0]        
      }

      return undefined
    },
    getProjects(state) {
      return state.projects
    },
    getProject: (state) => (id) => {
      // Buscando el obj del proyecto y retornando
      let projectFound = state.projects.filter( project => project.id == id)
      if (projectFound.length != 0 && projectFound.length < 2) {
        return projectFound[0]        
      }

      return undefined
    }
  },
  actions: {

  }
})
