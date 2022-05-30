<template>
  <router-view to="/"></router-view> 
</template>

<script>
export default {
  name: 'App',
  computed: {
  },
  mounted() {
    this.$router.push({name: 'Overview'})
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

* {
  box-sizing: border-box;
}

html, body {
  max-width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
