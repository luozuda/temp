<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class="text-muted">简单 / 易用 / 便捷</h5>
    <translateForm v-on:formSubmit="translateText"></translateForm>
    <translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>

<script>
import TranslateForm from "./components/TranslateForm";
import TranslateOutput from "./components/TranslateOutput";

export default {
  name: "app",
  data: function() {
    return {
      translatedText: ""
    };
  },
  components: {
    TranslateForm,
    TranslateOutput
  },
  methods: {
    translateText: function(text, language) {
      // alert(text);
      this.$http
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190311T145757Z.85016d4d972d31a9.986fa7b934240ac25ee8706001f02ee7194acaf8&lang=" +
            language +
            "&text=" +
            text
        )
        .then(response => {
          // console.log(response.body.text[0]);
          this.translatedText = response.body.text[0];
        });
    }
  }
};
</script>

<style>
body {
  background-color: rgb(223, 214, 136);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 4rem;
  overflow: hidden;
}
</style>
