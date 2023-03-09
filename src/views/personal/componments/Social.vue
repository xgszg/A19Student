<template>
  <div class="container">
    <el-descriptions class="description" :column="1" border :content-style="descriptionsPram.CS" :label-style="descriptionsPram.LS">
      <el-descriptions-item>
        <div slot="label">
          <svg-icon icon-class="wechat" />微信
        </div>
        郁闷酱油瓶
      </el-descriptions-item>
      <el-descriptions-item>
        <div slot="label">
          <svg-icon icon-class="wechat" />QQ
        </div>
        <a href="www.wechat.com">点击绑定</a>
      </el-descriptions-item>
      <el-descriptions-item>
        <div slot="label">
          <svg-icon icon-class="wechat" />钉钉
        </div>
        <a href="">点击绑定</a>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: 'Social',
  data() {
    return {
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
          'word-break': 'keep-all',
          'font-size': '20px'
        }
      }
    }
  }
}
</script>

<style scoped>
.container{
   display: flex;
  justify-content: center;
}
.description{
  width: 80%;
}
</style>
