<template>
  <div class="container" id="translateForm">
    <div class="row">
      <form v-on:submit="formSubmit" class="col-sm-6">
        <input class="form-control" type="text" v-model="textToTranslate" placeholder="输入需要翻译的内容">
        <select class="form-control" v-model="language">
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="ko">Korean</option>
          <option value="ja">Janpenese</option>
        </select>
        <input class="btn btn-primary" type="submit" value="翻译">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "translateForm",
  data: function() {
    return {
      textToTranslate: "",
      language: ""
    };
  },
  methods: {
    formSubmit: function(e) {
      this.$emit("formSubmit", this.textToTranslate, this.language);
      e.preventDefault();
    }
  },
  created: function() {
    this.language = "en";
  }
};
</script>

<style>
.row {
  justify-content: center;
}
.form-control {
  margin: 1rem 0;
}
</style>
