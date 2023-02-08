<template>
  <div class="course-container">
    <el-row :gutter="10">
      <el-col :span="6">
        <img :src="image.url" :alt="image.name" style="height: 200px">
      </el-col>
      <el-col :span="15" :offset="1">
        <div id="image-name">
          {{ image.name }}
        </div>
        <div id="image-last">
          上次学到: {{ image.last }}
        </div>
        <div id="image-process">
          {{ image.process }}篇实验报告
        </div>
      </el-col>
      <el-col :span="2">
        <el-button id="continue-button" type="primary" plain>
          继续实验
        </el-button>
      </el-col>
    </el-row>
    <el-divider />
  </div>
</template>

<script>
export default {
  name: 'Course',

  data() {
    return {
      image: {
        url: require('@/assets/course_images/uid1-20200406-1586165980776.png'),
        name: '操作系统实验',
        last: 'proc文件系统的实现(7/10)',
        process: 7
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.course-container{
  margin: 10px;

  #image-name{
    margin-top: 15px;
    font-weight: bold;
    font-size: 25px;
  }
  #image-last{
    margin-top: 70px;
    font-size: 15px;
  }
  #image-process{
    margin-top: 20px;
  }
  #continue-button{
    position: relative;
    top: 160px;
  }
}
</style>
