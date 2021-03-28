const app = Vue.createApp({
  // Esta es una manera moderna para hacer un return de varios valores sin tener que escribir return.
  data: () => ({
    title: "Formularios",
    datos: {
      name: "",
      age:15,
      langs: [],
      gener:"m",
    },
    
  }),
  methods: {
    handlesubmit() {
      console.log(this.datos)
    },
  }
});
