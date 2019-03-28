<template>
  <header id="app-header">
    <h1>酷爱头条</h1>
  </header>
</template>

<script>
export default {
  name: "app-header"
};
</script>

<style scoped>
#app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding-top: 1.5rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-size: 0.8rem;
  background-color: rgb(201, 53, 53);
  color: #fff;
}
</style>
