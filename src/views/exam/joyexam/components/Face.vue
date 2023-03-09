<template>
  <div>
    <el-col :span="24">
      <el-col :span="12">
        <el-card>
          <div class="container">
            <el-descriptions class="description" :column="1" border :content-style="descriptionsPram.CS" :label-style="descriptionsPram.LS">
              <el-descriptions-item label="考试名称">2021-2022-2大学英语六级模拟考试（2）</el-descriptions-item>
              <el-descriptions-item label="姓名">张佳</el-descriptions-item>
              <el-descriptions-item label="学号">2050110732</el-descriptions-item>
              <el-descriptions-item label="参考人数">21</el-descriptions-item>
              <el-descriptions-item label="开始时间">2022-03-06-16:00</el-descriptions-item>
              <el-descriptions-item label="状态"><el-tag type="warning">待参加</el-tag></el-descriptions-item>
            </el-descriptions>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" />
      <el-col :span="10" :offset="2">
        <el-card header="人脸识别">
          <video v-if="!imgSrc" id="videoCamera" :width="videoWidth" :height="videoHeight" autoplay />
          <canvas v-if="!imgSrc" id="canvasCamera" style="display:none;" :width="videoWidth" :height="videoHeight" />
          <div v-if="imgSrc" class="img_bg_camera">
            <img :src="imgSrc" alt class="tx_img">
          </div>
        </el-card>
      </el-col>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'Face',
  data() {
    return {
      videoWidth: 280,
      videoHeight: 200,
      imgSrc: '',
      thisCancas: null,
      thisContext: null,
      thisVideo: null,
      openVideo: false,
      descriptionsPram: {
        CS: {
          'text-align': 'center', // 文本居中
          'min-width': '250px', // 最小宽度
          'word-break': 'break-all'
        },
        LS: {
          // 'color': '#000',
          'text-align': 'center',
          'font-weight': '600',
          'height': '40px',
          // 'background-color': 'rgba(255, 97, 2, 0.1)',
          'min-width': '110px',
          'word-break': 'keep-all'
        }
      }
    }
  },
  methods: {
  }
}
</script>

<style>
.description{
  width: 150%;
}
.container{
  display: flex;
  justify-content: center;
}
</style>
