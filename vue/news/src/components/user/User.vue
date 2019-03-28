<template>
  <content id="user">
    <ul>
      <router-link to="/login" tag="li">
        <span>登录/注册</span>
      </router-link>
    </ul>
  </content>
</template>

<script>
export default {
  name: "user"
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  padding-left: 1rem;
  height: 3rem;
  line-height: 3rem;
  font-weight: 600;
  border-top: 0.0625rem solid #ccc;
  border-bottom: 0.0625rem solid #ccc;
  background-color: #fff;
}
</style>
