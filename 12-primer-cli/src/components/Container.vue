<template>
  <div id="container" class="container">
    <h2>Proyectos</h2>
    <img
      src="https://avatars.githubusercontent.com/u/69372927?v=4"
      alt="Avatar de Angel Robles"
      width="100"
      loading="lazy"
      class="image"
    />
    <hr />
    <loading v-if="load"/>
    <div class="cards" v-for="project in projects" :key="project.id">
      <Card
        :name="project.name"
        :description="project.description"
        :author="project.owner.login"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import Loading from './Loading'
export default {
  data() {
    return {
      projects: null,
      load: false,
    };
  },
  components: {
    Card,
    Loading,
  },

  mounted() {
    this.getProjects();
  },

  methods: {
    async getProjects() {
      this.load = true;
      const res = await fetch("https://api.github.com/users/AngelRBL/repos");
      const data = await res.json();

      this.projects = data;
      this.load = false;

    },
  },
};
</script>

<style scoped>
.image {
  border-radius: 50%;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.container {
  overflow: hidden;
  margin: 1rem;
  padding: 7px;
  border: 1px solid #eee;
  box-shadow: 1px 1px 4px #333;
  text-align: center;
}
</style>
