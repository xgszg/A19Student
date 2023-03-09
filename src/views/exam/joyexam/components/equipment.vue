<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="输入检测">
        <el-input
          v-model="form.jc"
          placeholder="请在此确认键盘按键无误！"
          rows="5"
          type="textarea"
        />
      </el-form-item>
      <el-form-item label="音频检测">
        <aplayer
          id="audio-player"
          :music="audioInfo"
        />
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import APlayer from 'vue-aplayer'
export default {
  components: {
    aplayer: APlayer
  },
  data() {
    return {
      audioInfo: {
        title: '测试音频',
        artist: '请在此确认能正常播放音频！',
        src: 'https://source.jujuh.top/audio/%E6%96%B0%E9%97%BB1.mp3'
      },
      form: {
        jc: '',
        desc: ''
      }
    }
  },
  mounted() {
    this.tljc()
  },
  methods: {
    tljc() {
      this.viewerText = this.question.tip
      this.audioInfo = this.question.audioInfo
      // this.answers = this.question.answers
      setTimeout(() => {
        this.showTips = true
        this.showListenAnswer = true
      }, 300)
    }
  }
}
</script>
