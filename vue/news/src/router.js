import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home/Home.vue'
import User from './components/user/User.vue'
import Login from './components/user/Login.vue'
import Register from './components/user/Register.vue'
Vue.use(VueRouter)

VueRouter.prototype.goBack = function () {
    this.isBack = true
    alert('back')
    window.history.go(-1)
}

export default new VueRouter({
    // mode: "history",//默认为hash模式,若改为history模式，webapp中使用vue-router会白屏
    routes: [{
        path: "",
        component: Home
    }, {
        path: "/user",
        component: User,
    }, {
        path: "/login",
        component: Login,
    }, {
        path: "/register",
        component: Register,
    }]
})