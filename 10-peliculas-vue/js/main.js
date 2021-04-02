const app = Vue.createApp({
  data() {
    return {
      title: "Movies Vue",
      movieData: {},
      movieTitle: "Spider Man",
    }
  },
  mounted() {
this.getMovie()
  },
  methods: {
    async getMovie() {
      // En esta constante esta la busqueda de peliculas
      const search = this.movieTitle.toLowerCase().replace(/ /g, "+");

      const data = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=f25f8f10&t=${search}`
      )

      const jsonData = await data.json()

      this.movieData = jsonData

    }
  }
})