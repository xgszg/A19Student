<template>
  <div>
    <el-calendar v-model="value" />
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      value: new Date()
    }
  }
}
</script>

<style scoped>

</style>
