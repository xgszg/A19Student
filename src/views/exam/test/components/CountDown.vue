<template>
  <span>
    {{ `${h} : ${m} : ${s}` }}
  </span>
</template>

<script>
export default {
  name: 'CountDown',
  data() {
    return {
      timer: null,
      count: '',
      h: '02',
      m: '00',
      s: '00'
    }
  }, mounted() {
    this.countTime()
  },
  methods: {
    countTime() {
      // 定义两个小时的秒数，此处根据需要进行定义
      const time = 7200
      if (!this.timer) {
        this.count = time
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= time) {
            this.count--
            const h = parseInt((this.count) / (60 * 60))
            const m = parseInt((this.count) / 60 % 60)
            const s = parseInt((this.count) % 60)
            if (this.h === 0 && this.m === 0 && this.s === 0) {
              this.$message({
                message: '答题时间结束，将自动交卷！',
                type: 'warning'
              })
            } else {
              this.h = h > 9 ? h : '0' + h
              this.m = m > 9 ? m : '0' + m
              this.s = s > 9 ? s : '0' + s
            }
          } else {
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    }
  }
}
</script>

<style scoped>

</style>
