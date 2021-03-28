// una propiedad computada no es mas que una funcion que retorna un valor, estas propiedades son recomendables usar los mas que se puedan por que cachea las respuestas de un momento.
const app = Vue.createApp ({
  data() {
    return {
      title: "Calculadora Vue",
      n1: 0,
      n2: 0,
    };
  },
  computed: {
    suma() {
      return this.n1 + this.n2;
    },
    resta() {
      return this.n1 - this.n2;
    },
    multi() {
      return this.n1 * this.n2
    },
    dividir() {
      const res = this.n1 / this.n2;
      return res === Infinity || res === -Infinity 
      ? "Error - No Calculable"
      : res; 
    },
  }
})
