<template>
  <div id="app">
    <!-- <header class="container">
      <search></search>
    </header> -->
    <nav class="container">
      <navigator @select="load"></navigator>
    </nav>
    <main class="container">
      <Content :dataList="dataList"></Content>
    </main>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Navigator from "./components/Navigator.vue";
import Content from "./components/Content.vue";

export default {
  name: "app",
  data: function() {
    return {
      dataList: []
    };
  },
  components: {
    Search,
    Navigator,
    Content
  },
  methods: {
    load: function(type) {
      let data = {
          type: type,
          key: "fccd68b3e1dc0e75de5c4283139806e2"
        },
        url = "http://v.juhe.cn/toutiao/index";
      this.$http.get(url, { params: data }).then(
        response => {
          if (response.body.error_code == 0) {
            this.dataList = response.body.result.data;
          } else {
            alert(response.body.reason);
          }
        },
        error => {
          console.log(error);

          //发送跨域请求  /api是vue.config.js里的devServer.proxy的配置
          this.$http.get("/api", { params: data }).then(
            response => {
              if (response.body.error_code == 0) {
                this.dataList = response.body.result.data;
              } else {
                alert(response.body.reason);
              }
            },
            error => {
              console.log(error);
            }
          );
        }
      );
    }
  },
  created: function() {
    this.load("top");
  }
};
</script>

<style>
body,
ul,
li,
h4,
p,
a {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.container {
  max-width: 1024px;
  margin: auto;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding-top: 1.5rem;
  background-color: rgb(201, 53, 53);
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 0.0625rem 0.0625rem #eee;
}
main {
  position: fixed;
  top: 2.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
}
</style>
