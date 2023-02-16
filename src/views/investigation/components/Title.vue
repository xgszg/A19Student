<template>
  <div>
    <el-row :gutter="10" style="max-height: 150px">
      <el-col :span="10">
        <img :src="detail.url" :alt="detail.name" style="width:100%;max-height: 150px;border-radius: 10px">
      </el-col>
      <el-col :span="12" :offset="2">
        <div id="image-name">
          {{ detail.name }}
        </div>
        <div>
          <el-button type="text">
            课程详情
          </el-button>
        </div>
      </el-col>
    </el-row>
    <el-row class="progress">
      <div style="margin-bottom: 15px">您当前的学习进度: {{ detail.last }}</div>
      <el-progress :percentage="50" />
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    detail: {
      type: Object,
      default: () => ({
        url: require('@/assets/course_images/uid1-20200406-1586165980776.png'),
        name: '操作系统实验',
        last: 'proc文件系统的实现(7/10)',
        process: 7,
        type: 'experiment'
      })
    }
  },
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
#image-name{
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}

.progress{
  margin-top: 20px;
}
</style>
