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
        <el-button @click="handleTest">
          测试代码
        </el-button>
        <el-button>
          提交
        </el-button>
      </span>
    </div>

    <el-dialog title="编辑器设置" :visible.sync="dialogVisible" :modal-append-to-body="false">
      <el-form :model="formData" label-width="150px">
        <el-form-item label="主题">
          <el-select v-model="formData.theme" placeholder="请选择主题">
            <el-option label="eclipse样式" value="eclipse" />
            <el-option label="sublime样式" value="monokai" />
          </el-select>
        </el-form-item>
        <el-form-item label="显示行号">
          <el-switch v-model="formData.lineNumbers" />
        </el-form-item>
        <el-form-item label="显示行">
          <el-switch v-model="formData.line" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSave">保存</el-button>
          <el-button @click="dialogVisible=!dialogVisible">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-drawer
      :visible.sync="drawerVisible"
      direction="btt"
      :modal-append-to-body="false"
      size="50%"
    >
      <template v-slot:title>
        <div style="font-size: 20px">
          代码运行状态:
          <span v-if="testData.loading">
            Loading <icon class="el-icon-loading" />
          </span>
          <span v-if="!testData.loading">
            Finish <icon class="el-icon-success" />
          </span>
        </div>
      </template>

      <el-row>
        <el-col :span="20" :offset="2" class="test-text">
          输入数据:
        </el-col>
        <el-col :span="20" :offset="2" class="test-text">
          <el-input
            v-model="testData.input"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="输入"
            class=""
          />
        </el-col>
        <el-col :span="20" :offset="2" class="test-text">
          输出数据:
        </el-col>
        <el-col :span="20" :offset="2" class="test-text">
          <el-input
            v-model="testData.output"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="输出"
            disabled
          />
        </el-col>
        <el-col :span="20" :offset="2" style="text-align: end">
          <el-button>
            重新运行
          </el-button>
        </el-col>
      </el-row>

    </el-drawer>

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
        theme: 'eclipse',
        lineNumbers: true,
        line: true,
        matchBrackets: true,
        completeSingle: false
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
      }],
      formData: {
        theme: 'eclipse',
        lineNumbers: true,
        line: true
      },
      dialogVisible: false,
      drawerVisible: false,
      testData: {
        input: `3 3
1 2
2 3
1 3`,
        output: '1 2 3',
        loading: false
      }
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
    // this.codemirror.on('cursorActivity', () => {
    //   this.codemirror.showHint()
    // })
    window.addEventListener('resize', () => {
      this.heightResize()
    })
  },
  methods: {
    // codemirror准备
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focus!', cm)
    },
    // 编辑器代码变动
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    },
    // 调整窗口高度
    heightResize() {
      this.height = document.body.clientHeight - 150 // 调整窗口高度
    },
    // 打开设置
    handleSetting() {
      console.log('打开代码设置面板')
      this.dialogVisible = true
    },
    // 重置代码
    handleRefresh() {
      console.log('清空代码')
      this.code = ''
    },
    // 保存编辑器设置
    onSave() {
      this.dialogVisible = false
      this.cmOptions.theme = this.formData.theme
      this.cmOptions.lineNumbers = this.formData.lineNumbers
      this.cmOptions.line = this.formData.line
    },
    // 打开测试面板
    handleTest() {
      this.drawerVisible = true
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

  .test-loading{
    color: #20a0ff;
  }

  ::v-deep .el-textarea__inner{
    border-radius: 5px;
    background: rgba(51, 47, 47, 0.04);
  }

  .test-text{
    margin-bottom: 20px;
  }
}

</style>

