<template>
  <content id="home">
    <navigator @select="load"></navigator>
    <databox :dataList="dataList"></databox>
  </content>
</template>

<script>
import Navigator from "./Navigator.vue";
import Databox from "./Databox.vue";

export default {
  name: "home",
  data() {
    return {
      dataList: []
    };
  },
  components: {
    Navigator,
    Databox
  },
  methods: {
    load(type) {
      let data = {
          type: type,
          key: "fccd68b3e1dc0e75de5c4283139806e2"
        },
        url = "http://v.juhe.cn/toutiao/index";
      this.$http.get(url, { params: data }).then(
        response => {
          if (response.body.error_code == 0 && response.body.result.data) {
            this.dataList = response.body.result.data;
          } else {
            alert(response.body.reason);
          }
        }
        // error => {
        //   //发送跨域请求  /api是vue.config.js里的devServer.proxy的配置
        //   this.$http.get("/api", { params: data }).then(
        //     response => {
        //       if (response.body.error_code == 0 && response.body.result.data) {
        //         this.dataList = response.body.result.data;
        //       } else {
        //         alert(response.body.reason);
        //       }
        //     }
        //   );
        // }
      );
    }
  },
  created() {
    this.load("top");
  }
};
</script>

<style scoped>
</style>
