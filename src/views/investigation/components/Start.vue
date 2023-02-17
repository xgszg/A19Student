<template>
  <div>
    <el-row id="title" type="flex" justify="center" class="start-container">
      <el-col :span="24" class="tips">
        点击下方开启实验环境
      </el-col>
    </el-row>
    <el-row id="card" type="flex" justify="center" class="start-container">
      <el-card :body-style="{padding:'0px'}" class="card" @click.native="handleSSH">
        <img src="@/assets/course_images/ssh-big.png" class="image">
        <div style="padding: 14px;text-align: center">
          <span>终端</span>
        </div>
      </el-card>
      <el-card :body-style="{padding:'0px'}" class="card" @click.native="handleVNC">
        <img src="@/assets/course_images/vnc.png" class="image">
        <div style="padding: 14px;text-align: center">
          <span>VNC</span>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Start', // 准备界面
  methods: {
    handleSSH() {
      this.$store.commit('chapter/CHANGE_ENV', 'ssh')
    },
    handleVNC() {
      this.$store.commit('chapter/CHANGE_ENV', 'vnc')
    }

  }
}
</script>

<style lang="scss" scoped>
.start-container{
  height: 100%;
  width: 100%;
  text-align: center;
}

.image{
  width: 100%;

}

.tips{
  font-size: 30px;
}

#title{
  margin-top: 18%;
}

#card{
  margin-top: 5%;
}

.card{
  max-width: 200px;
  margin: 10px;
}
</style>
