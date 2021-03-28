const app = Vue.createApp({
  data() {
    return {
      title: "Peticiones con Vue",
    }
  },
  // con mounted espera hasta que se monte el contenido y despues se ejecuta, lo contrario a created, se ejecuta independientemente si se monta o no.
  created() {
    this.getPost()
  },
  methods: {
    async getPost() {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos/10");
      
      const data = await res.json();

      this.data = data;
    }
  }
})