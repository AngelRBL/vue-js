const app = Vue.createApp({
  data() {
    return {
      title: "Peticiones con Axios",
      datos: []
    }
  },
  created() {
    this.getPost()
  },
  methods: {
    async getPost() {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")

      this.datos = data
    }
  }
})