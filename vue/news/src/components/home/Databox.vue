<template>
  <main id="databox">
    <ul class="dataList">
      <li v-for="data in dataList" :key="data.uniquekey">
        <a class="link" :href="data.url">
          <h4 v-text="data.title"></h4>
          <ul class="imgList">
            <li>
              <img :src="data.thumbnail_pic_s" alt>
            </li>
            <li>
              <img :src="data.thumbnail_pic_s02" alt>
            </li>
            <li>
              <img :src="data.thumbnail_pic_s03" alt>
            </li>
          </ul>
          <p>{{data.author_name}}&nbsp;{{data.date}}</p>
        </a>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "databox",
  props: ["dataList"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#databox {
  position: fixed;
  top: 7rem;
  left: 0;
  right: 0;
  bottom: 3rem;
  overflow-y: scroll;
  background-color: #fff;
}
.dataList > li {
  border-bottom: 0.0625rem solid #ddd;
}
.link {
  display: block;
  padding: 0 0.5rem;
  color: #000;
}
.link > h4,
.link > p {
  padding: 0.2rem 0;
}
.link > p {
  font-size: 0.8rem;
  color: #aaa;
}
.imgList {
  column-count: 3;
  column-gap: 0.2rem;
}
.imgList > li > img {
  width: 100%;
}
</style>
