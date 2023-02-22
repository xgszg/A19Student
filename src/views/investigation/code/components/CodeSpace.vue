<template>
  <div class="code-container">
    <div class="code-mirror" :style="{height:height+'px'}">
      <!-- or to manually control the datasynchronization（或者手动控制数据流，需要像这样手动监听changed事件） -->
      <codemirror
        ref="myCm"
        :value="code"
        :options="cmOptions"
        @ready="onCmReady"
        @focus="onCmFocus"
        @input="onCmCodeChange"
      />
    </div>
    <div class="footer-container">
      <span>
        <el-select v-model="cmOptions.mode" placeholder="请选择">
          <el-option
            v-for="item in codeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </el-select>
        <i id="setting-icon" class="el-icon-setting" @click="handleSetting" />
        <i id="refresh-icon" class="el-icon-refresh-right" @click="handleRefresh" />
      </span>
      <span class="button-container">
        <el-button>
          测试代码
        </el-button>
        <el-button>
          提交
        </el-button>
      </span>
    </div>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import './settings'
import codeContent from '@/api/code-content'

export default {
  name: 'CodeSpace',
  components: {
    codemirror
  },
  data() {
    return {
      code: codeContent.code[1].content,
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/x-java',
        theme: 'monokai',
        lineNumbers: true,
        line: true
        // more codemirror options, 更多 codemirror 的高级配置...
      },
      height: 800,
      codeOptions: [{
        value: 'text/x-c++src',
        label: 'C++'
      }, {
        value: 'text/x-java',
        label: 'JAVA'
      }, {
        value: 'text/x-csrc',
        label: 'C'
      }, {
        value: 'text/x-csharp',
        label: 'C#'
      }, {
        value: 'text/x-python',
        label: 'Python'
      }, {
        value: 'text/javascript',
        label: 'JavaScript'
      }]
    }
  },
  computed: {
    // 编辑器参数
    codemirror() {
      return this.$refs.myCm.codemirror
    }
  },
  watch: {
    // 实时更改高度
    height(newValue) {
      // console.log(newValue)
      document.getElementsByClassName('CodeMirror')[0].style.height = newValue + 'px'
    }
  },
  mounted() {
    console.log('this is current codemirror object', this.codemirror)
    // you can use this.codemirror to do something...
    this.heightResize()
    document.getElementsByClassName('CodeMirror')[0].style.height = this.height + 'px'

    window.addEventListener('resize', () => {
      this.heightResize()
    })
  },
  methods: {
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focus!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    },
    heightResize() {
      this.height = document.body.clientHeight - 150 // 调整窗口高度
    },
    // 打开设置
    handleSetting() {
      console.log('打开代码设置面板')
    },
    handleRefresh() {
      console.log('清空代码')
      this.code = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.code-mirror{
  height: 100%;
  ::v-deep .CodeMirror{
    font-size: 15px;
    line-height: 20px;
  }
}

.code-container{
  height: 100%;

  .footer-container{
    margin: 10px;

    #setting-icon{
      font-size: 30px;
      position: relative;
      top: 5px;
      left: 15px;
      cursor: pointer;
    }

    #refresh-icon{
      position: relative;
      left: 35px;
      font-size: 30px;
      top: 5px;
      cursor: pointer;
    }
    .button-container{
      margin-right: 10px;
      float: right;
    }
  }

}

</style>

