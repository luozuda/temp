<template>
  <div class="add container">
    <Alert v-if="alert" :message="alert"></Alert>
    <h1 class="page-header text-center">添加用户</h1>
    <form @submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label for>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label for>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label for>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label for>学历</label>
          <input
            type="text"
            class="form-control"
            placeholder="education"
            v-model="customer.education"
          >
        </div>
        <div class="form-group">
          <label for>毕业院校</label>
          <input
            type="text"
            class="form-control"
            placeholder="graduationschool"
            v-model="customer.graduationschool"
          >
        </div>
        <div class="form-group">
          <label for>职业</label>
          <input
            type="text"
            class="form-control"
            placeholder="profession"
            v-model="customer.profession"
          >
        </div>
        <div class="form-group">
          <label for>个人简介</label>
          <textarea
            class="form-control"
            rows="10"
            placeholder="profile"
            v-model="customer.profile"
            style="resize:vertical;"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary" :disabled="isDisabled">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  name: "add",
  data() {
    return {
      isDisabled: false,
      customer: {},
      alert: ""
    };
  },
  methods: {
    addCustomer(e) {
      e.preventDefault();
      let newCustomer = this.customer;
      if (!newCustomer.name || !newCustomer.phone || !newCustomer.email) {
        // console.log("请完善用户信息！");
        this.alert = "请完善用户信息！";
      } else {
        this.isDisabled = true;
        this.$http
          .post("http://localhost:3000/users", newCustomer)
          .then(response => {
            this.$router.push({
              path: "/",
              query: { alert: "用户信息添加成功！" }
            });
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            this.isDisabled = false;
          });
      }
    }
  },
  components:{
    Alert
  }
};
</script>

<style scoped>
</style>
