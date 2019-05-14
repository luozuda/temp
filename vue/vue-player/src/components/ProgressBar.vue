<template>
  <div class="progress-bar">
    <div class="progress-active" :style="{flex:rate}">
      <div class="radio"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rate"]
};
</script>

<style scoped lang="scss">
.progress-bar {
  flex: 1;
  display: flex;
  height: 10px;
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 5px;
  &::before {
    content: "";
    width: 20px;
    height: 100%;
    background-color: rgb(207, 194, 7);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .progress-active {
    position: relative;
    height: 100%;
    background-color: rgb(207, 194, 7);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    .radio {
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -10px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: rgb(207, 194, 7);
    }
  }
}
</style>
