//v-if y v-else son atributos para poder poner condicionales.
//v-else lo podemos dejar vacio.
//tambien le podriamos dejar sin el ="" y tambien funciona de igual manera. pero solo si no vas a ponerle condicion en v-else
//v-for es para iterar.

const app = Vue.createApp({
  data(){
    return {
      user: {
        title: 'Hola Mundo',
        name: 'Angel',
        age: 18,
        movies: ['batman', 'spiderman', 'superman'],
        url: 'https://google.com',
        picture: "https://cdn.pixabay.com/photo/2021/01/10/18/01/milky-way-5905903_960_720.jpg",
        classValue:'error',
      },
    };
  },
});
console.log(app.title)