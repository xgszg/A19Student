<template>
  <span>
    {{ `${h} : ${m} : ${s}` }}
  </span>
</template>

<script>
export default {
  name: 'Timeshow',
  data() {
    return {
      timer: null,
      count: '',
      h: '02',
      m: '00',
      s: '00'
    }
  },
  methods: {
    qljsq() {
      clearInterval(this.timer)
      this.timer = null
    },
    countTime(timeshowss) {
      clearInterval(this.timer)
      this.timer = null
      // 定义15分钟的秒数，此处根据需要进行定义
      const time = timeshowss
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
                message: '此题已经超过时间！！！',
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
