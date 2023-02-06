<template>
  <div id="outerDiv">
    <div id="terminal" />
  </div>
</template>

<script type="text/javascript" src="/static/js/jquery-3.4.1.min.js"></script>
<script>
import { WSSHClient } from '../../../../public/static/js/webssh'
import { Terminal } from 'xterm'
import 'xterm/css/xterm.css'

var client
var term

// terminal 大小改变
function resizeTerminal() {
  var c = parseInt($('#outerDiv').width() / 9) - 2
  var r = parseInt($('#outerDiv').height() / 17)
  term.resize(c, r)
  client.send({
    'operate': 'command',
    'command': '',
    'cols': c,
    'rows': r
  })
};

// 限制最小宽度，避免排版错乱
var minWidth = $(window).width() * 0.3
var resizeFlag = false
// 调整大小
var resizeDiv = {
  init: function() {
    resizeFlag = false
    this.mouseDown()
    this.mouseMove()
    this.mouseUp()
    this.mouseLeave()
  },
  mouseDown: function() {
    $('#dragDiv').on('mousedown', function() {
      resizeFlag = true
    })
  },
  mouseMove: function() {
    $(document).on('mousemove', function(e) {
      if (resizeFlag) {
        var mousePointX = e.pageX - 10
        var mousePointY = e.pageY - 10
        if (mousePointX < $(window).width() && mousePointX > minWidth) {
          $('#outerDiv').width(mousePointX)
          $('#dragDiv').css('left', mousePointX + 5)
        }
        if (mousePointY < $(window).height()) {
          $('#outerDiv').height(mousePointY)
          $('#dragDiv').css('top', mousePointY + 5)
        }
      }
      resizeTerminal()
    })
  },
  mouseLeave: function() {
    $(document).on('mouseleave', function(e) {
      resizeFlag = false
      resizeTerminal()
    })
  },
  mouseUp: function() {
    $(document).on('mouseup', function() {
      resizeFlag = false
      resizeTerminal()
    })
  }
}
resizeDiv.init()

function openTerminal(options) {
  client = new WSSHClient()
  term = new Terminal({
    cols: parseInt($('#outerDiv').width() / 9) - 2, // 列数
    rows: parseInt($('#outerDiv').height() / 17), // 行数
    cursorBlink: true, // 光标闪烁
    cursorStyle: 'block', // 光标样式  null | 'block' | 'underline' | 'bar'
    scrollback: 800, // 回滚
    tabStopWidth: 8, // 制表宽度
    screenKeys: true
  })

  term.open(document.getElementById('terminal'))
  // 在页面上显示连接中...
  term.writeln('正在连接......\r\n')

  term.onData(function(key) {
    var order = {
      'operate': 'command',
      'command': key,
      'cols': parseInt(term.cols),
      'rows': parseInt(term.rows)
    }
    client.send(order)
  })

  // 执行连接操作
  client.connect({
    onError: function(error) {
      // 连接失败回调
      term.writeln('')
      term.writeln('Error: ' + error + '\r\n')
    },
    onConnect: function() {
      // 连接成功回调
      client.sendInitData(options)
    },
    onClose: function() {
      // 连接关闭回调
      term.writeln('')
      term.writeln('\r连接关闭')
    },
    onData: function(data) {
      // 收到数据时回调
      term.write(data)
    },
    onReconnect: function(times) {
      // 重连回调
      term.writeln(ordinal_suffix_of(times) + ' 重新连接')
      term.writeln('')
    },
    onOverReconnect: function(times) {
      // alert('Reconnection failed more than ' + times + ' times.')
      connectFail(times)
    }
  })
  function ordinal_suffix_of(i) {
    var j = i % 10
    var k = i % 100
    if (j === 1 && k !== 11) {
      return i + 'st'
    }
    if (j === 2 && k !== 12) {
      return i + 'nd'
    }
    if (j === 3 && k !== 13) {
      return i + 'rd'
    }
    return i + 'th'
  }
}

export default {
  name: 'WebSSH',
  data() {
    return {
      options: {
        operate: 'connect',
        host: '192.168.3.248', // IP
        port: '22', // 端口号
        username: 'zerolouis', // 用户名
        password: 'wxj20020322'// 密码
      }
    }
  },
  mounted() {
    openTerminal(this.options)
  },
  methods: {
     connectFail(times){
      this.$notify({
        title: '连接失败!',
        type: 'error',
        message: '重新连接超过' + times + '次'
      })
    }
  },
  created() {
    window.connectFail = this.connectFail
  }
}
</script>

<style lang="scss" scoped>
#outerDiv {
  position: relative;
  width: 100%;
  height: 95%;
}

#terminal {
  width: 100%;
  height: 100%;
  position: relative;
}

</style>
