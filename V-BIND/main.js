//V-BIND lo que nos permite es meter lo que nosotros queramos servicios de URL`S de manera sencilla
//Necesitamos que poner el url junto al javascript para poder acceder a el en el html.


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
      },
    };
  },
});
console.log(app.title)
