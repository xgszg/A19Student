<template>
  <div>
    <v-md-preview :text="text" />
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

</style>
