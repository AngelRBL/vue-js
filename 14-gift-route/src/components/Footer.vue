<template>
  <div class="footer">
    <footer class="text-center bg-dark text-white bg-gradient py-4">
      <h3>&copy; {{ year }} - Angel Robles</h3>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>