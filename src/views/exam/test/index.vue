<template>
  <div>
    <!--顶栏-->
    <el-card class="header-card">
      <span>2021-2022-2大学英语六级模拟考试（2）</span>
      <el-divider direction="vertical" />
      <span>
        考生:{{ $store.state.user.name }}
      </span>

      <span id="tips">
        <span v-show="timeshow">
          工具箱时间：
          <span class="gjxtime">
            <Timeshow ref="timeshowchild" />
          </span>
        </span>
        考试时间 :
        <span class="time">
          <CountDown />
        </span>
        <el-divider direction="vertical" />
        <el-button v-loading.fullscreen.lock="quanpingloding" type="primary" class="submit-button" @click="submit(timu)">交卷</el-button>
      </span>
    </el-card>

    <!--题目面板-->
    <el-col :span="18">
      <el-card class="question-container">
        <!--听力控件-->
        <transition name="el-fade-in-linear">
          <aplayer v-if="showListenAnswer" id="audio-player" :music="audioInfo" />
        </transition>
        <!--题目-->
        <div ref="tipsViewer" class="pop-tools-parent">
          <transition name="el-fade-in-linear">
            <Viewer v-if="showTips" style="margin: 10px" :initial-value="viewerText" />
          </transition>
          <div pop-tools="删除" />
        </div>
        <el-row type="flex" justify="center">
          <transition name="el-fade-in-linear">
            <!--作文输入框-->
            <el-input
              v-if="showInput"
              v-model="editorText[question.name]"
              type="textarea"
              class="answer-input"
              :rows="10"
              placeholder="请输入内容"
              @change="timu+=1"
            />
          </transition>
        </el-row>
        <!--听力题目-->
        <div v-if="showListenAnswer">
          <div v-for="(item,index) in answers" :key="index">
            <el-row>
              <el-divider />
            </el-row>
            <el-row>
              <el-col :span="2">
                <el-button id="listen-mark-button" size="small" :plain="!totalAnswer[item.content].mark" type="warning" icon="el-icon-star-off" circle @click="changeListenMark(item)" />
                <span id="answer-number">{{ item.content }}.</span>
              </el-col>
              <el-col :span="22">
                <el-radio-group v-model="totalAnswer[item.content].answer" @change="timu+=1">
                  <el-radio class="answer-radio" :label="item.A">{{ item.A }}</el-radio>
                  <br>
                  <el-radio class="answer-radio" :label="item.B">{{ item.B }}</el-radio>
                  <br>
                  <el-radio class="answer-radio" :label="item.C">{{ item.C }}</el-radio>
                  <br>
                  <el-radio class="answer-radio" :label="item.D">{{ item.D }}</el-radio>
                  <br>
                </el-radio-group>
              </el-col>
            </el-row>

          </div>
        </div>
        <!--阅读理解-->
        <div v-if="showReading">
          <div v-for="(item,index) in answers" :key="index">
            <el-row>
              <el-divider />
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-button id="reading-mark-button" size="small" :plain="!totalAnswer[item.number].mark" type="warning" icon="el-icon-star-off" circle @click="changeReadingMark(item)" />
                <span id="reading-answer-title">{{ item.content }}</span>
              </el-col>
              <el-col :span="24">
                <div>
                  <el-radio-group v-model="totalAnswer[item.number].answer" @change="timu+=1">
                    <el-radio class="reading-choice" :label="item.A">{{ item.A }}</el-radio>
                    <br>
                    <el-radio class="reading-choice" :label="item.B">{{ item.B }}</el-radio>
                    <br>
                    <el-radio class="reading-choice" :label="item.C">{{ item.C }}</el-radio>
                    <br>
                    <el-radio class="reading-choice" :label="item.D">{{ item.D }}</el-radio>
                    <br>
                  </el-radio-group>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <!--十五选十-->
        <div v-if="showBlanks" style="margin-top: 10px">
          <el-divider style="margin-bottom: 20px" />
          <el-row v-for="(item,key,index) in answers" :key="index">
            <el-col id="blank-number" :span="2">
              <el-button id="blank-mark-button" size="small" :plain="!totalAnswer[item].mark" type="warning" icon="el-icon-star-off" circle @click="changeBlankMark(item)" />
              {{ item }}.
            </el-col>
            <el-col id="blank-answer" :span="4">
              <el-input v-model="totalAnswer[item].answer" @change="timu+=1" />
            </el-col>
          </el-row>
        </div>
        <!--信息匹配-->
        <div v-if="showMatch" style="margin-top: 30px">
          <el-divider />
          <el-row v-for="(item,key,index) in answers" :key="index" class="match-question">
            <el-col id="match-input" :span="1">
              <el-input v-model="totalAnswer[key].answer" @change="timu+=1" />
            </el-col>
            <el-col id="match-text" :span="20">
              <el-button id="match-mark-button" size="small" :plain="!totalAnswer[key].mark" type="warning" icon="el-icon-star-off" circle @click="changeMatchMark(key)" />
              {{ key }}. {{ item }}
            </el-col>
          </el-row>
        </div>
        <!--按钮控件-->
        <div>
          <span v-if="showInput" id="count-number">当前字数：{{ number }}</span>
          <span id="footer-button">
            <transition name="el-fade-in-linear">
              <el-button-group v-if="showTips">
                <el-button type="primary" plian icon="el-icon-arrow-left" @click="previousQuestion">上一题</el-button>
                <el-button type="primary" plian @click="nextQuestion">下一题<i class="el-icon-arrow-right el-icon--right" /></el-button>
              </el-button-group>
            </transition>
          </span>

        </div>
      </el-card>
    </el-col>

    <!--工具面板-->
    <el-col :span="6">
      <el-card class="question-container">
        <div>
          <el-collapse v-model="activeNames">
            <!--答题卡-->
            <el-collapse-item title="答题卡" name="answers">
              <el-col v-for="(item,key, index) in totalAnswer" :key="index" :span="4">
                <el-button :type="buttonType(item,key)" size="mini" class="answer-button" @click="jumpToQuestion(key)">
                  {{ item.name }}
                </el-button>
              </el-col>
            </el-collapse-item>
            <el-collapse-item title="工具箱" name="tools">
              <div style="margin: 5px">
                <el-switch
                  v-model="show"
                  inactive-text="人脸检测窗口"
                />

                <el-switch
                  v-model="showHighLighter"
                  inactive-text="批注开关"
                />
              </div>
              <div v-if="showHighLighter">
                <el-button-group style="margin: 5px">
                  <el-button @click="openCommentDrawer">显示批注</el-button>
                  <el-button @click="clearHighLighter">清除所有</el-button>
                </el-button-group>
              </div>
              <div v-if="showHighLighter">
                <el-radio-group v-model="toolsCategory" style="margin: 5px">
                  <el-radio-button label="pencil"><svg-icon icon-class="写作_write" /></el-radio-button>
                  <el-radio-button label="pen-green"><svg-icon icon-class="high_light_green" /></el-radio-button>
                  <el-radio-button label="pen-yellow"><svg-icon icon-class="high_light_yellow" /></el-radio-button>
                  <el-radio-button label="pen-blue"><svg-icon icon-class="high_light_blue" /></el-radio-button>
                </el-radio-group>
              </div>

              <el-button @click="timeshowhs()"><svg-icon icon-class="时间_time" /></el-button>
              <el-button icon="el-icon-s-custom" @click="feedback" />
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-card>
    </el-col>
    <!--批注-->
    <el-drawer
      title="批注内容"
      :visible.sync="showCommentDrawer"
      :with-header="false"
    >
      <div v-for="(item,index) in highLighterSource" :key="index">
        <el-row class="comment">
          <div class="comment-text">
            <span class="comment-title">题目:</span>
            {{ item.name }}
          </div>
          <div class="comment-text">
            <span class="comment-title">批注: </span>
            {{ item.text }}
          </div>
          <el-button icon="el-icon-delete" size="mini" @click="deleteHighLighter(item,index)" />
        </el-row>
      </div>
    </el-drawer>
    <!-- 人脸检测窗口 -->
    <transition>
      <!--    绑定style中top和left-->
      <div v-show="show" class="moveBox" :style="position">
        <div
          class="moveHead"
          @mousedown="mousedown"
          @mousemove="mousemove"
          @mouseup="mouseup"
          @mouseleave="mousemove"
        /><div class="title">人脸识别</div>
        <!--      关闭按钮-->
        <div class="close" @click="toggleShow">×</div>
        <div class="content">
          <Face />
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import CountDown from './components/CountDown'
import PaperContent from '@/api/paper-content'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Viewer } from '@toast-ui/vue-editor'
import '@toast-ui/editor/dist/i18n/zh-cn.js'
import APlayer from 'vue-aplayer'
import Highlighter from 'web-highlighter'
import Face from './components/Face.vue'
import Timeshow from './components/Timeshow.vue'
const highlighter = new Highlighter()

export default {
  name: 'Index',
  components: {
    CountDown,
    Viewer,
    aplayer: APlayer,
    Face,
    Timeshow
  },
  data() {
    return {
      timeshow: false,
      quanpingloding: false,
      timu: 0,
      show: false, // 是否显示
      x: 85, // left:x
      y: 75, // top:y
      leftOffset: 0, // 鼠标距离移动窗口左侧偏移量
      topOffset: 0, // 鼠标距离移动窗口顶部偏移量
      isMove: false, // 是否移动标识
      activeNames: ['answers'],
      paper: PaperContent.englishExam,
      questionIndex: 0,
      viewerText: '',
      editorText: {
        0: '',
        56: ''
      },
      showTips: false,
      showQuestion: false,
      showInput: false,
      showListenAnswer: false,
      showBlanks: false,
      showMatch: false,
      showReading: false,
      showHighLighter: false,
      question: {},
      number: 0,
      highLighterSource: [],
      answers: [],
      questionName: PaperContent.qusitonName,
      // chooseAnswer: {},
      // audioInfo: {},
      // blankAnswer: {},
      // matchAnswer: {},
      totalAnswer: [],
      showCommentDrawer: false,
      toolsCategory: 'pencil'
    }
  },
  computed: {
    // top与left加上px
    position() {
      return `top:${this.y}%;left:${this.x}%;`
    }
  },
  watch: {
    // 切换画笔
    toolsCategory: {
      immediate: true,
      handler(newValue) {
        highlighter.setOption({
          style: {
            className: newValue
          }
        })
      }
    },
    // 显示高亮
    showHighLighter: {
      immediate: false,
      handler(newValue) {
        if (newValue) {
          highlighter.run()
        } else {
          highlighter.stop()
        }
      }
    },
    editorText: {
      deep: true,
      immediate: false,
      // 计算字数
      handler(newValue) {
        let newString
        newString = newValue[this.question.name]
        newString = newString.replace(/[\u4e00-\u9fa5]+/g, ' ')
        newString = newString.replace(/\n|\r|^\s+|\s+$/gi, '')
        newString = newString.replace(/\s+/gi, ' ')
        let length = 0
        const match = newString.match(/\s/g)
        if (match) {
          length = match.length + 1
        } else if (newString) {
          length = 1
        }
        // console.log(this.totalAnswer[this.question.name])
        this.totalAnswer[this.question.name].answer = newString
        this.number = length
      }
    },
    questionIndex: {
      immediate: true,
      handler() {
        this.question = this.paper.question[this.questionIndex]
        this.answers = this.question.answers
        this.updateQuestion()
      }
    }
  },
  beforeCreate() {
    document
      .querySelector('body')
      .setAttribute('style', 'background-color:#f7f7f7')
  },
  mounted() {
    // 首次打开页面进行更新
    this.createAnswer()
    console.log(this.totalAnswer[1].answer)
    this.updateQuestion()
    this.initHighLighter()
    this.getCompetence()
    this.Notice()
  },
  methods: {
    // 工具箱反馈功能
    feedback() {
      this.$prompt('请输入内容', '反馈', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnPressEscape: false,
        closeOnClickModal: false

      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '反馈成功！'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消反馈'
        })
      })
    },
    // 教师端公告函数
    Notice() {
      setTimeout(() => {
        this.$alert('第七题的A选项的答案更改为:<br> Welcome to the super star university examination system.', '提示', {
          dangerouslyUseHTMLString: true,
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: '已经收到通知'
            })
          }
        })
      }, 30000)
    },
    // 工具箱时间函数
    timeshowhs() {
      const child = this.$refs.timeshowchild
      this.$prompt('当前题型：段落信息匹配', '设定时间', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPlaceholder: '请输入您要设定时间(单位分钟)',
        inputPattern: /^[0-9]*[1-9][0-9]*$/,
        inputErrorMessage: '请输入数字!'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '设定成功!'
        })
        child.countTime(value * 60)
        setTimeout(() => {
          this.timeshow = true
        }, 1000)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入!'
        })
      })
    },
    getCompetence() {
      this.faceloading = true
      this.imgSrc = ''
      var _this = this
      _this.thisCancas = document.getElementById('canvasCamera')
      _this.thisContext = this.thisCancas.getContext('2d')
      _this.thisVideo = document.getElementById('videoCamera')
      _this.thisVideo.style.display = 'block'
      // 获取媒体属性，旧版本浏览器可能不支持mediaDevices，我们首先设置一个空对象
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {}
      }
      // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
      // 使用getUserMedia，因为它会覆盖现有的属性。
      // 这里，如果缺少getUserMedia属性，就添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function(constraints) {
          // 首先获取现存的getUserMedia(如果存在)
          var getUserMedia =
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.getUserMedia
          // 有些浏览器不支持，会返回错误信息
          // 保持接口一致
          if (!getUserMedia) { // 不存在则报错
            return Promise.reject(
              new Error('getUserMedia is not implemented in this browser')
            )
          }
          // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
          return new Promise(function(resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject)
          })
        }
      }
      var constraints = {
        audio: false,
        video: {
          width: this.videoWidth,
          height: this.videoHeight,
          transform: 'scaleX(-1)'
        }
      }
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
          // 旧的浏览器可能没有srcObject
          if ('srcObject' in _this.thisVideo) {
            _this.thisVideo.srcObject = stream
          } else {
            // 避免在新的浏览器中使用它，因为它正在被弃用。
            _this.thisVideo.src = window.URL.createObjectURL(stream)
          }
          _this.thisVideo.onloadedmetadata = function(e) {
            _this.thisVideo.play()
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 控制打开关闭
    toggleShow() {
      this.x = 85
      this.y = 80
      this.show = !this.show
    },
    mousedown(event) {
      // 鼠标按下事件
      this.leftOffset = event.offsetX
      this.topOffset = event.offsetY
      this.isMove = true
    },
    // 鼠标移动
    mousemove(event) {
      if (!this.isMove) {
        return
      }
      this.x = event.clientX - this.leftOffset
      this.y = event.clientY - this.topOffset
    },
    // 鼠标抬起
    mouseup() {
      this.isMove = false
    },
    initHighLighter() {
      highlighter
        // 鼠标移入触发
        .on('selection:hover', ({ id }) => {
          highlighter.addClass('highlight-wrap-hover', id)
          // console.log(highlighter.getDoms(id))
        })
        // 鼠标移出触发
        .on('selection:hover-out', ({ id }) => {
          highlighter.removeClass('highlight-wrap-hover', id)
        })
        // 创建触发
        .on('selection:create', ({ sources }) => {
          sources = sources.map(hs => ({ hs }))
          console.log(sources)
          this.highLighterSource.push(sources[0].hs)
          this.highLighterSource[this.highLighterSource.length - 1].name = this.questionName[this.questionIndex]
        })
        // 鼠标点击触发
        .on('selection:click', ({ id }) => {
          this.currId = id
        })
    },
    // // 高亮批注
    // openHighLighter() {
    //   // highlighter.run()
    // },
    createAnswer() {
      const answer = []
      for (let i = 0; i <= 56; i++) {
        answer[i] = {
          name: i,
          answer: '',
          mark: false
        }
      }
      answer[0].name = '写作'
      answer[56].name = '翻译'
      this.totalAnswer = answer
    },
    // 更新题目
    updateQuestion() {
      this.showTips = false
      this.showInput = false
      this.showQuestion = false
      this.showListenAnswer = false
      this.showBlanks = false
      this.showMatch = false
      this.showReading = false
      // this.question = this.paper.question[this.questionIndex]

      switch (this.question.category) {
        case 'writing':
          // 写作题
          this.viewerText = this.question.tip
          setTimeout(() => {
            if (this.timeshow === true) this.timeshow = false
            this.showTips = true
            this.showInput = true
          }, 300)
          break
        case 'tip':
          // 提示
          this.viewerText = this.question.tip
          setTimeout(() => {
            this.timeshow = false
            this.showTips = true
          }, 300)
          break
        case 'listen':
          // 听力题
          this.viewerText = this.question.tip
          this.audioInfo = this.question.audioInfo
          // this.answers = this.question.answers
          setTimeout(() => {
            this.timeshow = false
            this.showTips = true
            this.showListenAnswer = true
          }, 300)
          break
        case 'blanks':
          // 十五选十
          // this.answers = this.question.answers
          this.viewerText = this.question.tip
          setTimeout(() => {
            if (this.timeshow === true) this.timeshow = false
            this.showTips = true
            this.showBlanks = true
          }, 300)
          break
        case 'match':
          // 信息匹配
          this.viewerText = this.question.tip
          setTimeout(() => {
            if (this.timeshow === true) this.timeshow = false
            this.showTips = true
            this.showMatch = true
          }, 300)
          break
        case 'reading':
          // 阅读理解
          this.viewerText = this.question.tip
          setTimeout(() => {
            if (this.timeshow === true) this.timeshow = false
            this.showTips = true
            this.showReading = true
          }, 300)
      }
    },
    nextQuestion() {
      if (this.questionIndex < this.paper.question.length - 1) {
        this.questionIndex += 1
      } else {
        this.$notify({
          title: '警告',
          message: '已经是最后一题！',
          type: 'warning'
        })
      }
    },
    previousQuestion() {
      if (this.questionIndex > 0) {
        this.questionIndex -= 1
      } else {
        this.$notify({
          title: '警告',
          message: '已经是第一题！',
          type: 'warning'
        })
      }
    },
    jumpToQuestion(key) {
      if (key === 0) {
        this.questionIndex = 0
      } else if (key >= 1 && key <= 2) {
        this.questionIndex = 2
      } else if (key >= 3 && key <= 4) {
        this.questionIndex = 3
      } else if (key >= 5 && key <= 7) {
        this.questionIndex = 4
      } else if (key >= 8 && key <= 11) {
        this.questionIndex = 6
      } else if (key >= 12 && key <= 15) {
        this.questionIndex = 7
      } else if (key >= 16 && key <= 18) {
        this.questionIndex = 9
      } else if (key >= 19 && key <= 21) {
        this.questionIndex = 10
      } else if (key >= 22 && key <= 25) {
        this.questionIndex = 11
      } else if (key >= 26 && key <= 35) {
        this.questionIndex = 13
      } else if (key >= 36 && key <= 45) {
        this.questionIndex = 15
      } else if (key >= 46 && key <= 50) {
        this.questionIndex = 17
      } else if (key >= 51 && key <= 55) {
        this.questionIndex = 18
      } else if (key === 56) {
        this.questionIndex = 19
      }
    },
    timu1() {

    },
    // 答题卡颜色控制
    buttonType(item, index) {
      // console.log('@', item)
      if (item.mark) {
        return 'warning'
      } else if (item.answer !== '') {
        return 'primary'
      } else {
        return ''
      }
    },
    // 听力题目标记
    changeListenMark(item) {
      this.totalAnswer[item.content].mark = !this.totalAnswer[item.content].mark
    },
    // 阅读题标记
    changeReadingMark(item) {
      this.totalAnswer[item.number].mark = !this.totalAnswer[item.number].mark
    },
    // 十五选十标记
    changeBlankMark(item) {
      this.totalAnswer[item].mark = !this.totalAnswer[item].mark
    },
    // 信息匹配标记
    changeMatchMark(key) {
      this.totalAnswer[key].mark = !this.totalAnswer[key].mark
    },
    // 批注列表
    openCommentDrawer() {
      this.showCommentDrawer = true
    },
    // 清除标记区域
    deleteHighLighter(item, index) {
      highlighter.remove(item.id)
      this.highLighterSource.splice(index, 1)
    },
    clearHighLighter() {
      highlighter.dispose()
      this.highLighterSource = []
    },
    // 交卷检测
    submit(item) {
      if (item >= 57) {
        this.$confirm('全部题目已做完, 是否交卷?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.thisVideo.srcObject.getTracks()[0].stop()
          this.quanpingloding = true
          setTimeout(() => {
            this.quanpingloding = false
            this.$message({
              type: 'success',
              message: '提交成功!'
            })
            this.$router.push({ path: 'index' })
          }, 2000)
        }).catch(() => {

        })
      } else {
        this.$confirm('还有题目未做完，是否交卷?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.thisVideo.srcObject.getTracks()[0].stop()
          this.quanpingloding = true
          setTimeout(() => {
            this.quanpingloding = false
            this.$message({
              type: 'success',
              message: '提交成功!'
            })
            this.$router.push({ path: 'index' })
          }, 2000)
        }).catch(() => {

        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.moveBox {
  width: 300px;
  height: 250px;
  position: fixed;
  box-shadow: 0 0 5px 3px #95a5a6;
  .moveHead {
    height: 30px;
    background-color: #bdc3c7;
    cursor: move;
  }
  .close {
    position: absolute;
    right: 0;
    top: 0;
    line-height: 30px;
    font-size: 24px;
    cursor: pointer;
    display: block;
    width: 30px;
    height: 30px;
    text-align: center;
  }
  .title {
    position: absolute;
    left: 0;
    top: 0;
    line-height: 30px;
    font-size: 20px;
  }
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.content {
  padding: 10px;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>

<style scoped>
.comment-title{
color: #6c5ce7;
}

.comment-text{
  font-size: 15px;
  margin-bottom: 10px;
}

.comment{
  margin: 10px;
  padding: 10px;
  border-bottom: #ebeef5 solid 1px;
}

#match-text{
  font-size: 18px;
  position: relative;
  top: -5px;
}
#match-mark-button{
position: relative;
  top: -2px;
  margin-right: 10px;
}
#blank-mark-button{
  margin-right: 10px;
  position: relative;
  top: -2px;
}
#reading-mark-button{
  margin-left: 10px;
  position: relative;
  top: -3px;
}
/*阅读理解题干*/
#reading-answer-title{
  font-size: 18px;
  margin-left: 20px;
}

.reading-choice{
  font-size: 25px;
  margin: 10px 10px 10px 80px;
}
/*信息匹配输入框*/
#match-input{
  position: relative;
  top: -10px;
  margin-right: 20px;
}
/*信息匹配题文字*/
.match-question{
  margin: 10px;
}

/*十五选十题号*/
#blank-number{
  margin-left: 10px;
  margin-top: 10px;
  position: relative;
  top:-5px;
  left: 5px;
  font-weight: bold;
  font-size: 1.2em;
}
/*十五选十输入框*/
#blank-answer{
  margin-bottom: 20px;
}
#tips{
  float: right;
  transform: translate(-00%,-25%);
  /*width: 400px;*/
}
.submit-button{
  width: 100px;
  padding: 10px;
}
.header-card{
  border-radius: 0;
}
.time{
  font-size: 1.5em;
  font-weight: bold;
  color: #a29bfe;
}
.gjxtime{
  font-size: 1.5em;
  font-weight: bold;
  color: #39da69;
}
.question-container{
  margin: 10px;
  min-height: 500px;
}
/*答题卡按钮*/
.answer-button{
  width: 80%;
  margin: 10px;
}
/*答案输入框*/
.answer-input{
  margin: 10px;
  width: 100%;
}
/*底部按钮*/
#footer-button{
  float: right;
  margin: 10px 10px 20px;
}
/*字数统计*/
#count-number{
  float: left;
  margin: 10px;
}
/*音频播放器*/
#audio-player{
  margin: 10px 10px 20px;
}
/*答案选择器*/
.answer-radio{
  position: relative;
  top:6px;
  left: -10px;
  margin-bottom: 20px;
}
/*题号*/
#answer-number{
  font-size: 20px;
}
#listen-mark-button{
  position: relative;
  top: -3px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>

<style>
.pencil{
  cursor: pointer;
  text-decoration:underline;

}
.pen-green{
    background: #99FFCD;
  cursor: pointer;

}
.pen-yellow{
    background: #ffe867;
  cursor: pointer;

}
.pen-blue{
   background: #3deeff;
    cursor: pointer;

 }

/*覆盖Viewer的样式*/
.toastui-editor-contents {
  margin: 0;
  padding: 0;
  font-size: 15px;
  font-family: '微软雅黑','Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', '나눔바른고딕', 'Nanum Barun Gothic', '맑은고딕', 'Malgun Gothic', sans-serif;
  z-index: 20;
}

</style>
