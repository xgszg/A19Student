<template>
  <div>
    <el-col :span="24">
      <video v-if="!imgSrc" id="videoCamera" :width="videoWidth" :height="videoHeight" autoplay />
      <canvas v-if="!imgSrc" id="canvasCamera" style="display:none;" :width="videoWidth" :height="videoHeight" />
      <div v-if="imgSrc" class="img_bg_camera">
        <img :src="imgSrc" alt class="tx_img">
      </div>
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
