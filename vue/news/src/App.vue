<template>
  <div id="app">
    <app-header/>
    <transition :name="transitionName">
      <router-view class="content"></router-view>
    </transition>
    <tabnav/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Tabnav from "./components/Tabnav";
export default {
  name: "app",
  data() {
    return {
      transitionName: "slide-right" // 默认动态路由变化为slide-right
    };
  },
  watch: {
    $route(to, from) {
      let isBack = this.$router.isBack; //  监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
      console.log(this.$router);
    }
  },
  components: {
    "app-header": Header,
    Tabnav
  },
  mounted() {
    window.addEventListener("backbutton", function(e) {
      alert(0);
      e.preventDefault();
    });
  }
};
</script>

<style>
body,
header,
nav,
main,
footer,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
img {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  user-select: none;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  background-color: #eee;
}
.content {
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  bottom: 3rem;
  transition: all 0.8s ease;
}

.Router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
  top: 40px;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
