import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tecnologies: [
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/js.jpg',
        name: 'javascript',
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/dart-square.jpg'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/flutter-square.png'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/node-square.png'
          },
        ]
      },
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/dart.jpg',
        name: 'dart',
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/dart-square.jpg'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/flutter-square.png'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/node-square.png'
          },
        ]
      },
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/electron.jpg',
        name: 'electron',
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/dart-square.jpg'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/flutter-square.png'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/node-square.png'
          },
        ]
      },
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/nodejs.png',
        name: 'nodejs',
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/dart-square.jpg'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/flutter-square.png'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/node-square.png'
          },
        ]
      },
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/php.jpg',
        name: 'php',
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/dart-square.jpg'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/flutter-square.png'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/node-square.png'
          },
        ]
      },
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/ts.jpeg',
        name: 'typescript',
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/dart-square.jpg'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/flutter-square.png'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/node-square.png'
          },
        ]
      },
      {
        img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/cards/vue.png',
        name: 'vuejs',
        projects: [
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/dart-square.jpg'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/flutter-square.png'
          },
          {
            img: 'https://portafolio-s3-demo.s3-sa-east-1.amazonaws.com/personal-page/square/node-square.png'
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
    }
  },
  actions: {

  }
})
