<template>
  <div v-loading="!show" style="min-height: 400px">
    <v-md-preview v-if="show" :text="text" />
  </div>
</template>

<script>
import experimentChapter from '@/api/experiment-chapter'
import { mapState } from 'vuex'

export default {
  name: 'CodeMarkdown',
  data() {
    return {
      currentChapter: 0,
      show: true
    }
  },
  computed: {
    ...mapState('chapter', ['chapter']),
    text() {
      return experimentChapter.codeContent[this.currentChapter].content
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

</style>
