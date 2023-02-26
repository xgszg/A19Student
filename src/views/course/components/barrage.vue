<template>
  <div class="barrage">
    <div class="barrage-header">
      <h4>课堂交流</h4>
    </div>
    <div class="live-line" />
    <section id="barrageList" ref="barrageList" class="barrage-body">
      <beautiful-chat
        class="chat-container"
        :participants="participants"
        
        :onMessageWasSent="onMessageWasSent"
        :messageList="messageList"
        :newMessagesCount="newMessagesCount"
        :isOpen="isChatOpen"
        :close="closeChat"

        :open="openChat"
        :showEmoji="true"
        :showFile="true"
        :showEdition="true"
        :showDeletion="true"
        :showTypingIndicator="showTypingIndicator"
        :showLauncher="false"
        :showCloseButton="false"
        :colors="colors"
        :alwaysScrollToBottom="alwaysScrollToBottom"
        :disableUserListToggle="false"
        :messageStyling="messageStyling"
        @onType="handleOnType"
        @edit="editMessage" />
      
    </section>
    <div class="live-line" />
  </div>
</template>
<script>
const color = 'gray'

export default {
  name: 'Barrage',
  data() {
    return {
      battageMsg: '',
      livingRoom: '',
      barrageMsgList: [],
      color,
      participants: [
        {
          id: 'user1',
          name: 'Matteo',
          imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
        },
        {
          id: 'user2',
          name: 'Support',
          imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
        }
      ], // 对话的所有参与者的列表。' name '是用户名，' id '用于建立消息的作者，' imageUrl '应该是用户头像。
      // titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      // title: "class",
      messageList: [
          { type: '', author: ``, data: { text: `` } },
          { type: '', author: ``, data: { text: `` } }
      ], // // 要显示的消息列表可以动态地分页和调整
      newMessagesCount: 0,
      isChatOpen: true, // 确定聊天窗口应该打开还是关闭
      showTypingIndicator: '',  // 当设置为匹配参与者的值时。它显示特定用户的输入指示
      colors: {
        header: {
          bg: '#ffffff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // 当设置为true时，当有新事件发生时(新消息，用户开始输入…)，总是将聊天滚动到底部。
      messageStyling: true // 启用*bold* /emph/ _underline_等(更多信息请访问github.com/mattezza/msgdown)
    }
  },
  methods: {
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      // 当用户发送消息时调用
      this.messageList = [ ...this.messageList, message ]
    },
    openChat () {
      // 当用户单击fab按钮打开聊天时调用
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // // 当用户单击按钮关闭聊天时调用
      this.isChatOpen = false
    },
    handleScrollToTop () {     

  // 当用户将消息列表滚动到顶部时调用
// 利用分页来加载另一个消息页面

    },
    handleOnType () {
      console.log('Emit typing event')
    },
    editMessage(message){
      const m = this.messageList.find(m=>m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    }
  }
}
</script>

<style lang="scss" scoped>
.barrage{
  // display: flex;
  height: 100%;
  &-header{
      padding: 0 10px;
      text-align: center;
      border-bottom: 1px solid gray;
  }
  &-body{
      height: 100%;
      overflow-y: auto;
      // padding: 0 20px;
      // display: flex;
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
  margin: 0 0 -80px 0;
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

.chat-container ::v-deep .sc-chat-window {
  max-height: none;
  position: relative;
  right: 0;
  margin: 0;
  bottom: 0;
  height: 500px;
  width: 100%;
  margin: 10px 0 0 0;
}


.chat-container ::v-deep .sc-header {
  // color:#4E8CFF;
  box-shadow: none;
}

.chat-container ::v-deep .sc-user-input--text:empty::before {
  content: "请输入内容";
}

.chat-container ::v-deep .sc-header--title {
  padding: 0;
  font-size: 0px
}

.chat-container ::v-deep .sc-header {
  height: 0;
  min-height: 0;
  padding: 0;
}

.chat-container ::v-deep .sc-message-list {
  padding: 10px 0;
}

</style>
