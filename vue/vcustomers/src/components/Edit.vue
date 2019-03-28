<template>
  <div class="edit container">
    <Alert v-if="alert" :message="alert"></Alert>
    <h1 class="page-header text-center">编辑用户</h1>
    <form @submit="updateCustomer">
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
        <button type="submit" class="btn btn-primary" :disabled="isDisabled">确认</button>
      </div>
    </form>
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  name: "edit",
  data() {
    return {
      isDisabled: false,
      customer: {},
      alert:""
    };
  },
  methods: {
    fetchCustomer(id) {
      this.$http.get("http://localhost:3000/users/" + id).then(response => {
        // console.log(response)
        this.customer = response.body;
      });
    },
    updateCustomer(e) {
      e.preventDefault();
      let updateCustomer = this.customer;
      if (
        !updateCustomer.name ||
        !updateCustomer.phone ||
        !updateCustomer.email
      ) {
        // console.log("请完善用户信息！");
        this.alert="请完善用户信息！";
      } else {
        this.isDisabled = true;
        this.$http
          .put(
            "http://localhost:3000/users/" + this.$route.params.id,
            updateCustomer
          )
          .then(response => {
            this.$router.push({
              path: "/",
              query: { alert: "用户信息更新成功！" }
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
  created() {
    this.fetchCustomer(this.$route.params.id);
  },
  components:{
    Alert
  }
};
</script>

<style scoped>
</style>
