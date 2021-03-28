const app = Vue.createApp({
  data() {
    return {
      title: "Peticiones con Parametros",
      post: 5,
      datos: {},
    }
  },
  created() {
    this.getPost()
  },
  methods: {
    async getPost() {
      // Aqui se manda a llamar el post
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.post}`)
      // Aqui estamos llamando al id del usuario en la data
      const { userId, } = data
      // Aqui estamos dando un sobrenombre a la data
      const { data: dataUser } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      )

      this.datos = dataUser
      
      // console.log(dataUser)
    }
  }
})