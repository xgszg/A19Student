<template>
  <div class="room">

    <el-row :gutter="20" type="flex" justify="space-around">
      <el-col :span="18">
        <el-card class="video-content">

          <div class="video-content-header">
            <div class="video-content-header-avatar">
              <img src="@/assets/logoimages/logo.png" class="title-img">
            </div>
            <div>
              <div class="video-content-header-title">
                <span>
                  <el-tag size="small">直播</el-tag>
                </span>
                {{ roomDetail.classname }}
              </div>
              <div class="video-content-header-anchor">
                <span>教师:</span>
                {{ roomDetail.name }}
              </div>
            </div>
          </div>
          <div class="video-content-main">
            <!-- <video id="videoElement" width="100%" height="100%" controls></video> -->
            <!--<img src="@/assets/course_images/liveroom.png" width="100%" height="100%">-->
            <vue-flv-player controls autoplay :muted="true" width="100%" height="100%" source="src" type="mp4" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="chat-content">
          <Barrage />
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>
<script>
// const flyjs = require("../../assets/js/flv");
// import flvjs from 'flv.js'
import Barrage from './barrage.vue'
import vueFlvPlayer from 'vue-flv-player'

export default {
  components: {
    Barrage,
    vueFlvPlayer
  },
  data() {
    return {
      roomDetail: {}
    }
  },
  created() {
  },
  async mounted() {
    // let urlData = common.getUrlParams();
    const urlData = this.$router.history.current.query
    this.livingRoom = urlData.room
    this.roomDetail = {
      classname: '数据结构',
      type: 'theory',
      name: '张强',
      flvConfig: {
        type: 'flv',
        isLive: true,
        src: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.room {
  margin: 10px;
  justify-content: space-between;

  .video-content {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    min-width: 300px;
    padding: 0px;
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
        overflow: hidden;
        position: relative;
        // 直播图标
        img {
          height: 70px;
        }
      }

      // 直播标题
      &-title {
        font-size: 20px;
        position: relative;
        top: 5px;
      }

      // 直播教师
      &-anchor {
        font-size: 16px;
        color: #999;
        position: relative;
        top: 15px;
      }
    }

    &-main {
      position: relative;
      height: calc(100% - 70px);
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

  ::v-deep .el-card__body {
    padding: 10px;
  }
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
