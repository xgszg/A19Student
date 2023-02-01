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
    <!--代办-->
    <el-row :gutter="20">
      <el-col :xs="24" :sm="8">
        <el-card class="card-container" />
      </el-col>
      <el-col :xs="24" :sm="16">
        <el-card class="card-container">
          <Todos />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Todos from './components/Todos.vue'

export default {
  name: 'Dashboard',
  components: { Todos },
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
    ])
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
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
