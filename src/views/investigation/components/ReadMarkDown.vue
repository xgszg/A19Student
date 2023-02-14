<template>
  <div>
    <v-md-preview :text="text" />
    <el-button class="write-button" type="warning" round plain><i class="el-icon-edit" />撰写报告</el-button>
  </div>
</template>

<script>
import experimentChapter from '@/api/experiment-chapter'
export default {
  name: 'ReadMarkDown',
  data() {
    return {
      text: experimentChapter.contents[0].content
    }
  }
}
</script>

<style lang="scss" scoped>
.write-button{
  float: right;
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
