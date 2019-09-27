import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tecnologies: [
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/js.jpg',
        name: 'javascript',
        title: 'JavaScript, El lenguaje más importante de la web',
        techParagraph: `Es un lenguaje de programación que te permite realizar actividades complejas en una página web cada vez más una página web hace más cosas que sólo mostrar información estática como mostrar actualizaciones de contenido en el momento, interactuar con mapas, animaciones gráficas 2D/3D etc. Puedes estar seguro que JavaScript está involucrado. Es la tercera capa del pastel de los estándares en las tecnologías para la web, dos de las cuales son (HTML y CSS).`,
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/project-presentation/vue.png',            
            id: 'id0001'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/project-presentation/vue2.png',
            id: 'id0002'
          }
        ]
      },
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/ts.jpeg',
        name: 'typescript',
        title: 'TypeScript, Los superpoderes de javascript',
        techParagraph: 'Es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases. Anders Hejlsberg, diseñador de C# y creador de Delphi y Turbo Pascal, ha trabajado en el desarrollo de TypeScript.1​ TypeScript puede ser usado para desarrollar aplicaciones JavaScript que se ejecutarán en el lado del cliente o del servidor (Node.js).',
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
        title: 'Vue, el framework progresivo de javascript',
        techParagraph: 'Vue js es un framework de JavaScript de código abierto para crear interfaces de usuario y aplicaciones de una sola página. Primero fue creado por <a href="https://twitter.com/youyuxi" target="_blank"> Evan You </a>, y ahora lo mantienen él y el resto de los miembros activos del equipo central provenientes de varias compañías como Netlify y Netguru',
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/project-presentation/vue.png',            
            id: 'id0001'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/project-presentation/vue2.png',
            id: 'id0002'
          }
        ]
      },
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/nodejs-dark.jpg',
        name: 'nodejs',
        title: 'Node.js es ejecutar javascript de lado del servidor',
        techParagraph: 'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google',
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/all/photo-gallery.jpg',            
            id: 'id0003'
          }
        ]
      },
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/laravel.png',
        name: 'laravel',
        title: 'Laravel es un framework para desarrollar aplicaciones y servicios web con PHP',
        techParagraph: 'Laravel es un framework de código abierto para desarrollar aplicaciones y servicios web con PHP 5 y PHP 7. Su filosofía es desarrollar código PHP de forma elegante y simple, evitando el "código espagueti". Fue creado en 2011 y tiene una gran influencia de frameworks como Ruby on Rails, Sinatra y ASP.NET MVC',
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
        title: 'API de una galeria de fotos',
        paragraph: `En este proyecto hey participado realizando la maquetación completa de la 
                    aplicación posteriormente tambien hey desarrollado algunos servicios para ello. La aplicación esta desarrollada
                    en <a href="https://vuejs.org/" target="_blank"> Vuejs </a> gracias a este framework progresivo se mantiene una gran experiencia en performas UX.
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
            name: 'Postman',
            url: 'https://www.getpostman.com'
          },
        ]
      },
      {
        name: 'Maquetacion de una tienda virtual',
        id: 'id0004',
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
