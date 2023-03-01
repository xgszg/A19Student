<template>
  <el-card class="room">
    <el-row :gutter="20" type="flex" justify="space-around">
      <el-col :span="28" :xs="24" :sm="24" :md="20">
        <el-card class="video-content">
          <div class="video-content-header">
            <div class="video-content-header-avatar">
              <img src="@/assets/logoimages/logo.png" class="logoImage">
            </div>
            <div>
              <div class="video-content-header-title">{{ roomDetail.classname }}</div>
              <div class="video-content-header-anchor">{{ roomDetail.name }}</div>
            </div>
          </div>
          <div class="video-content-main">
            <!-- <video id="videoElement" width="100%" height="100%" controls></video> -->
            <img src="@/assets/course_images/liveroom.png" width="100%" height="100%">
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="chat-content">
          <Barrage />
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
// const flyjs = require("../../assets/js/flv");
// import flvjs from 'flv.js'
import Barrage from './barrage.vue'

export default {
  components: {
    Barrage
  },
  data() {
    return {
      roomDetail: {}
    }
  },
  created() {},
  async mounted() {
    // let urlData = common.getUrlParams();
    const urlData = this.$router.history.current.query
    this.livingRoom = urlData.room
    this.roomDetail = {
      classname: '学生',
      type: 'theory',
      name: '小红'
    }
    // this.$nextTick(() => {
    //   if (flvjs.isSupported()) {
    //     var videoElement = document.getElementById("videoElement");
    //     this.flvPlayer = flvjs.createPlayer({
    //       type: "flv",
    //       url: `${this.$baseEnv.livingUrl}/${this.livingRoom}.flv`,
    //     });
    //     this.flvPlayer.attachMediaElement(videoElement);
    //     try {
    //       this.flvPlayer.load();
    //       this.flvPlayer.play();
    //     } catch {
    //       console.log("error");
    //     }
    //   }
    // });
  }
}
</script>

<style lang="scss" scoped>
.room {
  margin-top: 10px;
  justify-content: space-between;
  .video-content {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    min-width: 300px;
    padding: 10px;
    background: #fff;
    position: relative;
    &-header {
      height: 80px;
      display: flex;
      justify-content: flex-start;
      &-avatar {
        width: 80px;
        height: 80px;
        margin-right: 10px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &-title {
        font-size: 20px;
        position: relative;
        top: 20px;
      }
      &-anchor {
        font-size: 16px;
        color: #999;
        position: relative;
        top: 20px;
      }
    }
    &-main {
      position: relative;
      height: calc(100% - 60px);
    }
    .barrage-block {
      z-index: 1;
      position: absolute;
      height: 40px;
      width: calc(100% - 40px);
      color: #fff;
      &-item {
        position: absolute;
        animation: barrage 5s linear;
        animation-fill-mode: forwards;
      }
    }
    video {
      object-fit: fill;
    }
    ::v-deep .el-card__body {
      padding: 10px;
    }
  }

}
.chat-content {
    width: 100%;
    height: 100%;
    background: #fff;
    box-sizing: border-box;
    position: relative;
}

@keyframes barrage {
  from {
    left: 100%;
    transform: translateX(0);
  }
  to {
    left: 0;
    transform: translateX(-200%);
  }
}
</style>
