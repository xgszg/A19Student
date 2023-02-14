<template>
  <!--2.这里id对应new Vditor('vditor',{...})的第一个参数vidtor-->
  <div id="vditor"/>
</template>

<script>
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import experimentChapter from '@/api/experiment-chapter'

export default {
  name: 'Markdown',
  data() {
    return {
      contentEditor: {}// 3.声明一个变量
    }
  },
  mounted() {
    var height = document.body.clientHeight - 100
    this.contentEditor = new Vditor('vditor', { // 4.刚刚声明的变量contentEditor被赋值为一个Vditor实例,
      height: height,
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
        this.contentEditor.setValue(experimentChapter.reports[0].content)
      }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
