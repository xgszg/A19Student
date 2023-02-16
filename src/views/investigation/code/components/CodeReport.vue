<template>
  <div v-loading="!show" style="min-height: 400px;height: 100%">
    <!--2.这里id对应new Vditor('vditor',{...})的第一个参数vidtor-->
    <div id="vditor" />
  </div>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import experimentChapter from '@/api/experiment-chapter'
import { mapState } from 'vuex'

export default {
  name: 'Markdown',
  data() {
    return {
      contentEditor: {}, // 3.声明一个变量,
      currentChapter: 0,
      show: true
    }
  },
  computed: {
    ...mapState('chapter', ['chapter'])
  },
  watch: {
    chapter(newValue) {
      this.show = false
      this.currentChapter = parseInt(newValue) - 1
      this.contentEditor.setValue(experimentChapter.codeReport[this.currentChapter].content)
      setTimeout(() => {
        this.show = true
      }, 1000)
    }
  },
  mounted() {
    this.contentEditor = new Vditor('vditor', { // 4.刚刚声明的变量contentEditor被赋值为一个Vditor实例,
      height: '100%',
      placeholder: '此处为话题内容……',
      theme: 'classic',
      counter: {
        enable: true,
        type: 'markdown'
      },
      preview: {
        delay: 0,
        hljs: {
          style: 'monokai',
          lineNumber: true
        }
      },
      tab: '\t',
      typewriterMode: true,
      toolbarConfig: {
        pin: true
      },
      cache: {
        enable: false
      },
      mode: 'sv',
      toolbar: [
        'emoji',
        'headings',
        'bold',
        'italic',
        'strike',
        'link',
        '|',
        'list',
        'ordered-list',
        'check',
        'outdent',
        'indent',
        '|',
        'quote',
        'line',
        'code',
        'inline-code',
        'insert-before',
        'insert-after',
        '|',
        // 'record',
        'table',
        '|',
        'undo',
        'redo',
        '|',
        'edit-mode',
        // 'content-theme',
        'code-theme',
        'export',
        {
          name: 'more',
          toolbar: [
            'fullscreen',
            'both',
            'preview',
            'info',
            'help'
          ]
        }],
      after: () => {
        this.contentEditor.setValue(experimentChapter.codeReport[this.currentChapter].content)
      }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
