<template>
  <div id="cards">
    <div class="card">
      <h4>{{ name }}</h4>
      <p>
        {{ description }}
      </p>
      <p><strong>{{ author }}</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    author: String,
  }
};
</script>

<style scoped>

.card {
  border: 1px solid #eee;
  box-shadow: 1px 1px 4px #333;
  text-align: center;
  width: 250px;
  height: 250px;
  margin: 7px;
}
</style>
