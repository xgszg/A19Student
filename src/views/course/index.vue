<template>
  <div class="container">
    <el-card>
      <template slot="header">
        <!--标题-->
        <span>
          已加入的班级
        </span>
        <el-button type="text" class="header-button" @click="joyclass">加入新的班级</el-button>
      </template>
      <el-row :gutter="20">
        <el-col v-for="(item,index) in classrooms" :key="index" :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
          <Class :class-info="item" class="class-card" @deleteid="deleteid" />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Class from '@/views/course/components/Class'
import ClassInfo from '@/api/class-info'

export default {
  name: 'Course',
  components: {
    Class
  },
  data() {
    return {
      classrooms: ClassInfo.classrooms
    }
  },
  methods: {
    deleteid(deleteid) {
      this.classrooms.splice(deleteid - 1, 1)
    },
    joyclass() {
      this.$prompt('请输入课程码', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        if (value) {
          this.$message({
            type: 'success',
            message: '正在加入...'
          })
          /* this.classrooms=ClassInfo.newclassrooms */
          var l = { id: this.classrooms.length + 1, date: '2021-2022第二学期', name: '大学英语（四）', classrooms: ['软嵌201', '软嵌202'], code: value, teacher: '方慧敏', classification: '理论', url: 'url("https://snz04pap001files.storage.live.com/y4mNLXhPRp0ec47--pQFSdtqUvtov20OblVpMjvTToXDiaYbvfcs1n7ittT8CvGbEuTyUWcie17TBQJPFemTcjWr5YhR6Eq8pHE-Dv2vPSbAd7_OaJiHpAEE5K01rBZnr1b6_-QCHaiFpTWk1K0gCEIHND5GqbgHZwX6HALjBjTAZyF0QlX-8WclZ9q6AgPC61r?width=968&height=645&cropmode=none")' }
          this.classrooms.push(l)
          /* this.classrooms[6].code=value */
        } else {
          this.$message({
            type: 'error',
            message: '输入为空'
          })
          this.joyclass()
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    }
  }
}
</script>

<style scoped>
.container{
  margin:20px
}
.header-button{
  float:right;
  padding: 2px;
}
.class-card{
  margin-bottom: 20px;
}
</style>
