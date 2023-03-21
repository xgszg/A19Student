<template>
  <div class="dashboard-container">
    <!--欢迎语-->
    <el-row>
      <el-card>
        <span class="welcome">{{ welcome.words }}{{ welcome.name }}{{ welcome.roles }}，{{ welcome.tips1 }}</span>
        <span id="number"> 6 </span>
        <span class="welcome">{{ welcome.tips2 }}</span>
      </el-card>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="8">
        <el-card class="card-container calendar-container">
          <!--日历-->
          <Calendar
            ref="calendar"
            style="height: 800px"
          />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="16">
        <!--代办事项-->
        <el-card class="card-container">
          <Todos />
        </el-card>
        <el-card class="card-container">
          <Logs />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Calendar from '@toast-ui/vue-calendar'
import '@toast-ui/calendar/dist/toastui-calendar.min.css'
import { mapGetters } from 'vuex'
import Todos from './components/Todos.vue'
// import Calendar from './components/Calendar.vue'
import Logs from './components/Logs.vue'

export default {
  name: 'Dashboard',
  components: { Todos, Calendar, Logs },
  data() {
    return {
      welcome: {
        words: '早上好！',
        name: '小红',
        roles: '同学',
        tips1: '你还有',
        tips2: '件代办事项件，注意时间安排哦'
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ]),
    calendarInstance() {
      return this.$refs.calendar.getInstance()
    }
  },
  mounted() {
    this.calendarInstance.setDate(new Date())
  }
}
</script>

<style lang="scss" scoped>
$card-margin: 10px 0px;
.dashboard {
  &-container {
    margin: 20px 20px 10px 20px;
    .welcome{
      font-size: 20px;
      font-weight: bolder;
    }
    #number{
      font-size: 26px;
      font-weight: bolder;
      color: darkcyan;
    }
    .card-container{
      margin: $card-margin;
    }
    .calendar-container {
      ::v-deep .el-card__body{
        padding: 0;
      }
    }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

</style>
