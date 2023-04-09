<template>
  <div ref="canvas" class="page-home">
    <div id="top_bar">
      <div id="status">{{ status }}</div>
      <el-button size="mini" id="top_bar-button">
        全屏
      </el-button>
    </div>
    <div id="screen-container">
      <div id="screen"/>
    </div>
  </div>
</template>

<script>
import RFB from '@novnc/novnc/core/rfb'

export default {
  name: 'Index',
  data() {
    return {
      rfb: null,
      desktopName: 'Ubuntu 22.04',
      isFullscreen: false,
      status: '连接中',
      height: 800
    }
  },
  mounted() {
    // document.getElementById('sendCtrlAltDelButton').onclick =
    //   this.sendCtrlAltDel
    this.connectVnc()
    // 调整高度
    window.addEventListener('resize', () => {
      this.heightResize()
    })
  },
  // 销毁 断开连接
  beforeDestroy() {
    this.rfb && this.rfb._disconnect()
  },
  methods: {
    connectVnc() {
      const PASSWORD = ''// VNC Server 密码
      const url = 'ws://127.0.0.1:6080/websockify'
      this.rfb = new RFB(document.getElementById('screen-container'), url, {
        // 向vnc 传递的一些参数，比如说虚拟机的开机密码等
        credentials: { password: PASSWORD }
      })
      this.rfb.addEventListener('connect', this.connectedToServer)
      this.rfb.addEventListener('disconnect', this.disconnectedFromServer)
      this.rfb.scaleViewport = true // scaleViewport指示是否应在本地扩展远程会话以使其适合其容器。禁用时，如果远程会话小于其容器，则它将居中，或者根据clipViewport它是否更大来处理。默认情况下禁用。
      this.rfb.resizeSession = false // 是一个boolean指示是否每当容器改变尺寸应被发送到调整远程会话的请求。默认情况下禁用
      console.log(this.rfb)
    },

    connectedToServer(e) {
      this.status = '连接成功:' + this.desktopName
      console.log('success', e)
    },

    disconnectedFromServer(e) {
      if (e.detail.clean) {
        this.status = '关闭连接'

        console.log('clean', e.detail.clean)
        // 根据 断开信息的msg.detail.clean 来判断是否可以重新连接
        // this.connectVnc()
      } else {
        this.status = '发生错误，等待链接'
        console.log('链接失败,重新链接中-------' + this.wsURL)
        // this.connectVnc()
      }
    },
    // 调整窗口高度
    heightResize() {
      this.height = document.body.clientHeight - 150 // 调整窗口高度
      document.getElementById('screen').style.height = this.height + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  width: 100%;
  height: 800px;
  margin: 0;
  background-color: #282828;
  display: flex;
  flex-direction: column;
}

#top_bar {
  background-color: #6e84a3;
  color: white;
  font: bold 12px Helvetica;
  padding: 6px 5px 4px 5px;
  border-bottom: 1px outset;
  display: flex;
  justify-content: center;
}

#status {
  text-align: center;
  margin-top: 5px;
}

#top_bar-button{
  margin-left: 20px;
}

#sendCtrlAltDelButton {
  position: fixed;
  top: 0px;
  right: 0px;
  border: 1px outset;
  padding: 5px 5px 4px 5px;
  cursor: pointer;
}

#screen {
  flex: 1; /* fill remaining space */
  overflow: hidden;
}

#screen-container {
  width: 100%;
  height: 750px;
}
</style>
