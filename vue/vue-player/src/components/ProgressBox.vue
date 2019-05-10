<template>
  <div class="progress-box">
    <div class="progress-active">
      <div class="radio"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.progress-box {
  flex: 1;
  position: relative;
  height: 10px;
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 5px;
  .progress-active {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 10px;
    background-color: rgb(207, 194, 7);
    .radio {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: rgb(207, 194, 7);
    }
  }
}
</style>
