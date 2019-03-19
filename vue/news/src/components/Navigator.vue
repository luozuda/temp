<template>
  <div id="navigator">
    <ul class="list">
      <li
        v-for="(item,index) in items"
        :key="item.name"
        :class="{ active : item.isActive}"
        @click="changeClass(index)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  data: function() {
    return {
      index: 0,
      items: [
        { name: "头条", type: "top", isActive: false },
        { name: "社会", type: "shehui", isActive: false },
        { name: "国内", type: "guonei", isActive: false },
        { name: "国际", type: "guoji", isActive: false },
        { name: "娱乐", type: "yule", isActive: false },
        { name: "体育", type: "tiyu", isActive: false },
        { name: "军事", type: "junshi", isActive: false },
        { name: "科技", type: "keji", isActive: false },
        { name: "财经", type: "caijing", isActive: false },
        { name: "时尚", type: "shishang", isActive: false }
      ]
    };
  },
  watch: {
    index: function(newIndex, oldIndex) {
      this.items[oldIndex].isActive = false;
      this.items[newIndex].isActive = true;
      this.$emit("select", this.items[newIndex].type);
    }
  },
  methods: {
    changeClass: function(index) {
      this.index = index;
    }
  },
  created: function() {
    this.items[this.index].isActive = true;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navigator {
  background-color: #fff;
  overflow-x: scroll;
}
@media screen and (min-width: 25rem) {
  #navigator {
    overflow: hidden;
  }
}
.list {
  white-space: nowrap;
  line-height: 0;
}
.list li {
  display: inline-block;
  padding: 0 0.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  font-weight: 700;
  color: #333;
}
.list .active {
  color: rgb(201, 53, 53);
}
</style>
