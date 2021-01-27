const app = Vue.createApp({
  data(){
    return {
      user: {
        title: 'Hola Mundo',
        name: 'Angel',
        age: 18,
        movies: ['batman', 'spiderman', 'superman'],
      }
    };
  }
});
console.log(app.title)

