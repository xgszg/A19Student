<template>
  <div class="dashboard-container">
    <!--欢迎语-->
    <el-row>
      <el-card>
        <span class="welcome">{{ welcome.words }}{{ welcome.name }}{{ welcome.roles }}，{{ welcome.tips1 }}</span>
        <span id="number"> {{ Todos.length }} </span>
        <span class="welcome">{{ welcome.tips2 }}</span>
      </el-card>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12" :xs="24">
        <!--代办事项-->
        <el-card class="card-container">
          <Todos :data="Todos" />
        </el-card>
      </el-col>
      <el-col :span="12" :xs="24">
        <el-card class="card-container">
          <Logs />
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <!--日历-->
        <el-calendar is-expanded title-position="right" :rows="2" :attributes="attrs" class="customizedCalendar" />
        <!--励志板-->
        <el-card class="sayingBoard-card">
          <div class="saying-header">励志名言板</div>
          <div class="saying">
            我们的征途是星辰大海！
          </div>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-card class="calendar-container">
          <!--课程表-->
          <vue-cal
            selected-date="2023-11-29 14:54"
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

import { getTodosAPI, getEventsAPI } from '@/api/dashboard'

export default {
  name: 'Dashboard',
  components: { Todos, Logs, VueCal },
  data() {
    return {
      welcome: {
        words: '早上好！',
        name: '张佳',
        roles: '同学',
        tips1: '你还有',
        tips2: '件待办事项，注意时间安排哦'
      },
      attrs: [
        {
          key: 'today',
          highlight: true,
          dates: new Date()
        }
      ],
      Todos: [],
      events: []
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  created: function() {
    this.getTodos()
    this.getEvents()
  },
  methods: {
    async getTodos() {
      const a = await getTodosAPI()
      this.Todos = a
    },
    async getEvents() {
      const a = await getEventsAPI()
      a.forEach(a => {
        a.class = a.style
        delete a.style
      })
      this.events = a
    }
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

      ::v-deep .event-title {
        font-weight: bold;
      }

      ::v-deep .event {
        &-green {
          background-color: rgba(164, 230, 210, 0.9);
          border: 1px solid rgb(144, 210, 190);
        }

        &-blue {
          background-color: rgb(79, 195, 247, 0.9);
          border: 1px solid rgb(79, 195, 247);
        }

        &-yellow {
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

.customizedCalendar {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/images/calendar.jpg);
  background-position: center center;
  background-size: cover;

  ::v-deep .el-calendar__header {
    // 修改头部背景颜色
    background-color: rgba(51, 51, 51, 0.4);
    padding: 3px 5px;
    border: none;
    display: flex;
    justify-content: center;

    .el-calendar__button-group {
      // 隐藏原生按钮
      display: none;
    }

    .el-calendar__title {
      // 修改头部标题的字体颜色
      color: white !important;
      font-size: 18px;
      font-weight: bolder;
    }
  }

  ::v-deep .el-calendar__body {
    // 修改主题部分
    padding: 0;
  }

  ::v-deep .el-calendar-table {
    thead {
      th {
        // 修改头部星期部分
        padding: 0;
        background-color: rgba(51, 51, 51, 0.4);
        color: white;
      }
    }

    .is-selected {
      .el-calendar-day {
        p {
          // 选中日期颜色
          color: black;
        }
      }
    }

    .el-calendar-day {
      // 每天小块样式设置
      padding: 0;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        // 所有日期颜色
        color: white;
        z-index: 1;
        user-select: none;
        display: flex;
      }
    }
  }

  ::v-deep .el-calendar-table__row {

    .prev,
    .next {

      // 修改非本月
      .el-calendar-day {
        p {
          color: #f0d9d5 !important;
        }
      }
    }

    td {

      // 修改每一个日期td标签
      &:nth-child(6),
      &:last-child {
        background-color: rgba(51, 51, 51, 0.25);
        color: white;
      }
    }
  }
}

.sayingBoard-card {
  margin: 20px 0;
  background-image: url(../../assets/images/sayingboard.jpg);
  width: 100%;
  height: 290px;
  background-position: center center;
  background-size: cover;
  box-sizing: content-box;

  .saying {
    height: 150px;
    font-size: 20px;
    color: white;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(51, 51, 51, 0.25);
    padding: 20px 20px;
    line-height: 26px
  }

  .saying-header {
    height: 36px;
    font-size: 24px;
    font-family: 楷体;
    font-style: italic;
    color: white;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(51, 51, 51, 0.25);
    letter-spacing: 10px;
    margin-bottom: 10px;
  }
}
</style>
