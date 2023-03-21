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
      <el-col :span="12" :xs="24">
        <!--代办事项-->
        <el-card class="card-container">
          <Todos />
        </el-card>
      </el-col>
      <el-col :span="12" :xs="24">
        <el-card class="card-container">
          <Logs />
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <!--<el-col :span="6" />-->
      <el-col :span="24">
        <el-card class="calendar-container">
          <!--日历-->
          <vue-cal
            selected-date="2023-03-21 14:54"
            :disable-views="['years', 'year', 'month']"
            :time-from="8 * 60"
            :time-to="19 * 60"
            :time-step="60"
            hide-weekends
            locale="zh-cn"
            :events="events"
          />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/i18n/zh-cn.cjs'
import { mapGetters } from 'vuex'
import Todos from './components/Todos.vue'
import Logs from './components/Logs.vue'

export default {
  name: 'Dashboard',
  components: { Todos, Logs, VueCal },
  data() {
    return {
      welcome: {
        words: '早上好！',
        name: '小红',
        roles: '同学',
        tips1: '你还有',
        tips2: '件代办事项件，注意时间安排哦'
      },
      events: [{
        start: '2023-03-20 08:40',
        end: '2023-03-20 12:00',
        title: '<span class="event-title">移动高级开发寄术</span>',
        content: '<br>腾讯会议',
        class: 'event-blue',
        deletable: false,
        resizable: false,
        draggable: false
      }, {
        start: '2023-03-20 13:30',
        end: '2023-03-20 16:50',
        title: '<span class="event-title">移动高级开发寄术</span>',
        content: `<br>腾讯会议<br>123-2312-3212`,
        class: 'event-blue',
        deletable: false,
        resizable: false,
        draggable: false
      }, {
        start: '2023-03-21 09:35',
        end: '2023-03-21 12:00',
        title: '<span class="event-title">移动初级开发寄术</span>',
        content: '<br>在线直播',
        class: 'event-green',
        deletable: false,
        resizable: false,
        draggable: false
      }, {
        start: '2023-03-22 08:40',
        end: '2023-03-22 12:00',
        title: '<span class="event-title">移动中级开发寄术</span>',
        content: '<br>线下课<br>@主校区 JX04-509',
        class: 'event-yellow',
        deletable: false,
        resizable: false,
        draggable: false
      }]
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style lang="scss" scoped>
$card-margin: 10px 0px;
.dashboard {
  &-container {
    margin: 20px 20px 10px 20px;

    .welcome {
      font-size: 20px;
      font-weight: bolder;
    }

    #number {
      font-size: 26px;
      font-weight: bolder;
      color: darkcyan;
    }

    .card-container {
      margin: $card-margin;
      height: 400px;
    }

    .calendar-container {
      ::v-deep .el-card__body {
        padding: 0;
      }

      ::v-deep .event-title{
        font-weight: bold;
      }
      ::v-deep .event{
        &-green{
          background-color: rgba(164, 230, 210, 0.9);
          border: 1px solid rgb(144, 210, 190);
        }
        &-blue{
          background-color: rgb(79, 195, 247, 0.9);
          border: 1px solid rgb(79, 195, 247);
        }
        &-yellow{
          background-color: rgb(255, 241, 118, 0.9);
          border: 1px solid rgb(255, 241, 118);
        }
      }

      height: 600px;
    }
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

</style>
