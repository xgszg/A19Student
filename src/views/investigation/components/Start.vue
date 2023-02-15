<template>
  <div>
    <el-row type="flex" justify="center" align="middle" class="start-container">
      <el-col :span="24" >
        点击下方开启实验环境
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-card :body-style="{padding:'0px'}">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;text-align: center">
            <span>终端</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Start' // 准备界面
}
</script>

<style lang="scss" scoped>
.start-container{
  height: 100%;
  width: 100%;
  background: #20a0ff;
  margin: 0 auto
}
</style>
