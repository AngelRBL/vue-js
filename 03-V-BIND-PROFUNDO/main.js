//V-BIND no unicamente es para pasar rutas, basicamente es para pasar lo que nosotros queramos, de echo podriamos inclusive pasar scripts o cosas asi de manera dinamica, no es recomendable pero se puede hacer.

const app = Vue.createApp({
  data(){
    return {
      user: {
        title: 'Hola Mundo!!',
        name: 'Angel',
        age: 24,
        movies: ['batman', 'spiderman', 'superman'],
        url: 'https://google.com',
        picture: "https://cdn.pixabay.com/photo/2021/01/10/18/01/milky-way-5905903_960_720.jpg",
        classValue:'error',
      },
    };
  },
});
console.log(app.title)

