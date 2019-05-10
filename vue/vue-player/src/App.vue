<template>
  <div id="app">
    <header>
      <span>{{music.name}}</span> -
      <span>{{music.singer}}</span>
    </header>
    <audio ref="audio" :src="music.url"></audio>
    <controls
      :currentTime="convCurrentTime"
      :durationTime="convDurationTime"
      :paused="paused"
      :muted="muted"
      @playHandler="playHandler"
      @muteHandler="muteHandler"
      @turnMusic="turnMusic"
    ></controls>
  </div>
</template>

<script>
import musicList from "./assets/music.json";
import controls from "./components/Controls";
export default {
  name: "App",
  data() {
    return {
      musicList: [], //歌曲列表
      //当前歌曲信息
      music: {
        name: "", //歌名
        url: "", //歌曲链接
        singer: "" //歌手
      },
      index: 0, //当前歌曲索引
      paused: true, //是否暂停状态
      muted: false, //是否静音状态
      currentTime: "", //当前播放时长
      durationTime: "" //总时长
    };
  },
  computed: {
    len() {
      return this.musicList.data.length; //歌曲列表中的歌曲数量
    },
    convCurrentTime() {
      return this.conversion(this.currentTime);//转换格式后的当前播放时长
    },
    convDurationTime() {
      return this.conversion(this.durationTime);//转换格式后的总时长
    }
  },
  methods: {
    //初始化
    init() {
      this.musicList = musicList; //获取歌曲列表
      this.setMusic(0); //设置第一首歌
      this.$nextTick(function() {
        //nextTick(callback)回调函数会在dom更新完后执行
        const audio = this.$refs.audio;
        audio.addEventListener("loadedmetadata", () => {
          this.durationTime = audio.duration; //设置总时长
          this.playHandler(); //直接播放
        });
        audio.addEventListener("ended", () => {
          this.turnMusic(1); //播放完切换下一首
        });
      });
    },
    //设置歌曲
    setMusic(index) {
      this.index = index;
      this.music = this.musicList.data[index];
    },
    //播放或暂停控制
    playHandler() {
      const audio = this.$refs.audio;
      if (audio.paused) {
        audio.play();
        this.timer = setInterval(this.movePro, 200);
      } else {
        audio.pause();
        clearInterval(this.timer);
      }
      this.paused = audio.paused;
    },
    //静音控制
    muteHandler() {
      const audio = this.$refs.audio;
      if (audio.muted) {
        audio.muted = false;
      } else {
        audio.muted = true;
      }
      this.muted = audio.muted;
    },
    //切换歌曲
    turnMusic(num) {
      var newIndex = this.index + num;
      if (newIndex <= -1) {
        newIndex = this.len - 1;
      } else if (newIndex >= this.len) {
        newIndex = 0;
      }
      this.setMusic(newIndex);
    },
    //播放持续事件
    movePro() {
      this.currentTime = this.$refs.audio.currentTime;
    },
    //转换时间格式
    conversion(num) {
      let sec =
          parseInt(num % 60) < 10
            ? "0" + parseInt(num % 60)
            : parseInt(num % 60),
        min =
          parseInt(num / 60) < 10
            ? "0" + parseInt(num / 60)
            : parseInt(num / 60);
      return min + ":" + sec;
    }
  },
  created() {
    this.init();
  },
  components: {
    controls
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body {
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #fff342;
  font-size: 20px;
}
</style>
