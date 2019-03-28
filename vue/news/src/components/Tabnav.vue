<template>
  <footer id="tabnav">
    <router-link to="/" tag="div" exact>
      <i class="iconfont icon-home"></i>
      <p>首页</p>
    </router-link>
    <router-link to="/user" tag="div">
      <i class="iconfont icon-wo"></i>
      <p>我</p>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: "tabnav"
};
</script>

<style scoped>
#tabnav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 3rem;
  box-shadow: 0 -0.0625rem .0625rem #ccc;
  background-color: #fff;
}
div {
  flex-grow: 1;
  text-align: center;
  color: #000;
}
i {
  font-size: 1.5rem;
}
p {
  font-size: 0.6rem;
}
.router-link-active {
  color: rgb(201, 53, 53);
}
</style>
