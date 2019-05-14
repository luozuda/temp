<template>
  <div class="controls">
    <div class="progress">
      <span class="time">{{currentTime}}</span>
      <progress-bar :rate="rateOfProgress"></progress-bar>
      <span class="time">{{durationTime}}</span>
    </div>
    <div class="btn-group">
      <i class="iconfont icon-shangyishou" @click="turnMusic(-1)"></i>
      <i class="iconfont icon-bofang" v-if="paused" @click="playHandler"></i>
      <i class="iconfont icon-zanting" v-else @click="playHandler"></i>
      <i class="iconfont icon-xiayishou" @click="turnMusic(1)"></i>
      <i class="iconfont icon-yinliang" v-if="!muted" @click="muteHandler"></i>
      <i class="iconfont icon-yinliang-guan" v-else @click="muteHandler"></i>
      <i class="volume">
        <progress-bar :rate="volume"></progress-bar>
      </i>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar";
export default {
  props: ["paused", "muted", "currentTime", "durationTime", "rateOfProgress","volume"],
  methods: {
    playHandler() {
      this.$emit("playHandler");
    },
    turnMusic(num) {
      this.$emit("turnMusic", num);
    },
    muteHandler() {
      this.$emit("muteHandler");
    }
  },
  components: {
    ProgressBar
  }
};
</script>

<style scoped lang="scss">
.controls {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  .progress {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
  }
  .time {
    padding: 0 5px;
  }
  .btn-group {
    height: 50px;
    background-color: #fff342;
    display: flex;
    justify-content: space-around;
    align-items: center;
    i {
      font-size: 40px;
      &.volume {
        width: 20%;
      }
    }
  }
}
</style>
