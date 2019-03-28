<template>
  <div id="register">
    <form>
      <input type="text" name="username" placeholder="用户名">
      <input type="password" name="password" placeholder="密码">
      <input type="password" name="password2" placeholder="再次确认密码">
      <input type="submit" value="注册">
    </form>
  </div>
</template>

<script>
export default {
  name: "register"
};
</script>

<style scoped>
form input {
  display: block;
  width: 18rem;
  height: 3rem;
  margin: 2rem auto;
  padding: 0 1rem;
  box-sizing: content-box;
  font-size: 1.2rem;
  border: 0.125rem solid rgb(201, 53, 53);
  border-radius: 2rem;
  outline: none;
}
input[type="submit"] {
  font-size: 1.2rem;
  background-color: rgb(201, 53, 53);
  color: #fff;
}
</style>
