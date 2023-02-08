<template>
  <div>
    <div class="context" v-html="markdown" />
  </div>
</template>

<script>
import { marked } from 'marked'
import experimentChapter from '@/api/experiment-chapter'
import { hljs } from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

export default {
  name: 'Read',
  data() {
    return {
      articles: experimentChapter.contents
    }
  },
  computed: {
    markdown() {
      return marked.parse(this.articles[0].content)
    }
  },
  mounted() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language }).value
      },
      langPrefix: 'hljs language-',
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
