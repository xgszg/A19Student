<template>
  <div v-loading="!show" style="min-height: 400px">
    <!--markdown渲染器-->
    <v-md-preview v-if="show" :text="text" />
    <!--前往撰写报告-->
    <el-button v-if="show" class="write-button" type="warning" round plain @click="handleWrite"><i class="el-icon-edit" />撰写报告</el-button>
  </div>
</template>

<script>
import experimentChapter from '@/api/experiment-chapter'
import { mapState } from 'vuex'
export default {
  name: 'ReadMarkDown',
  data() {
    return {
      currentChapter: 0,
      show: true
    }
  },
  computed: {
    ...mapState('chapter', ['chapter']),
    text() {
      return experimentChapter.contents[this.currentChapter].content
    }
  },
  watch: {
    chapter(newValue) {
      this.show = false
      this.currentChapter = parseInt(newValue) - 1
      setTimeout(() => {
        this.show = true
      }, 1000)
    }
  },
  methods: {
    handleWrite() {
      this.$store.commit('chapter/CHANGE_TAB', 'report')
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
