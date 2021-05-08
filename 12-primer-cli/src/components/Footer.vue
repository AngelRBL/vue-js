<template>
<div id="footer">
  <footer class="p-5">
    <h3 >
      &copy; Angel Robles - {{ year }}
    </h3>
  </footer>
</div>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    }
  },
}
</script>

<style scoped>
h3 {
  background-color: #333;
  text-align: center;
  color: snow;
}
</style>
