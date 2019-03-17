<template>
  <div id="search">
    <input type="text" class="input" placeholder="请输入要搜索的内容" disabled>
  </div>
</template>

<script>
export default {
  name: "Search"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#search {
  padding: 0.5rem;
}
.input {
  display: inline-block;
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  border: none;
  outline: none;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: #fff;
}
</style>
