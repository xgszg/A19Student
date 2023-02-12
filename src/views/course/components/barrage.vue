<template>
  <div class="barrage">
      <div class="barrage-header">
        <h4>课堂交流</h4>
      </div>
      <div class="live-line"></div>
      <section class="barrage-body" id="barrageList" ref="barrageList">
          <div v-for="(battage,battageIndex) in barrageMsgList" :key="battageIndex">
              {{battage.user}}:{{battage.msg}}
          </div>
      </section>
      <div class="live-line"></div>
      
      <section class="barrage-msg">
        <div class="barrage-tool">
          <Emoji></Emoji>
        </div>
        <div class="barrage-msg-input">
          <el-input 
          class="input"
          type="textarea"
          :rows="5"
          v-model="battageMsg" 
          placeholder="请输入内容" 
          clearable
          @on-enter="chatLiveRoom">
          </el-input>
          <div class="barrage-msg-button">
          <el-button type="text" class="sendbutton"
            @click="chatLiveRoom">发送</el-button>
          </div>
        </div>
      </section>
  </div>
</template>
<script>
//import {sock,socket} from "@/assets/api/socket.js"
import Emoji from "./emoji.vue";
let color = "gray";

export default {
  name: 'Barrage',
  components: {
    Emoji,
  },
  data(){
      return {
          battageMsg:"",
          livingRoom:"",
          barrageMsgList:[],
          color
      }
  },
  mounted(){
      //this.livingRoom=common.getUrlParam("room")
  },
  methods:{
      //发送弹幕
      chatLiveRoom(){
          console.log(this.currentUser)
      },
  }
}
</script>

<style lang="scss" scoped>
.barrage{
  height: 100%;
  &-header{
      padding: 0 10px;
      text-align: center;
      border-bottom: 1px solid gray;
  }
  &-body{
      height: calc(100% - 60px);
      overflow-y: auto;
      padding: 0 20px;
      box-sizing: border-box;
  }
  &-msg{
      margin-top: 10px;
      padding: 0 20px;
      box-sizing: border-box;
  }
}

h4 {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 10px;
  margin-bottom: 10px;
}

.barrage-msg {
  width: 100%;
  position: absolute;
  bottom: 80px;
  left: 0;
  margin: 0 0 -100px 0;
  padding: 0px;
}

textarea {
  overflow: auto;
}

.barrage-msg {
  background-color: #F5F5F5;
  ::v-deep .el-textarea__inner {
    border: 0;
    resize: none;
    background-color: #F5F5F5;
  }

  ::v-deep .el-textarea__inner:focus {
    background-color: #FFFFFF;
  }
}



// .barrage-msg-input {
//   padding: 0px;
// }

.barrage-msg-button {
  position: relative;
  right: 0;
  padding: 0px;
  float: right;
  // background-color: #F5F5F5;
}

.sendbutton {
  padding: 0 2px 24px 0;
}

.barrage-tool {
  height: 30px;
  width: 100%;
  margin: 0px;
  background-color: #F5F5F5;
  display: flex;
  justify-items: center;
  border-top: 1px solid gray;
}

</style>