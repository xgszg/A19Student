import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import VMdPreview from '@kangc/v-md-editor/lib/preview' // v-md-preview markdown组件
import '@kangc/v-md-editor/lib/style/preview.css' // markdown组件样式
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
import hljs from 'highlight.js'
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn' // katex语法支持
import Chat from 'vue-beautiful-chat'
import axios from 'axios'

Vue.prototype.$axios = axios // 把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求
Vue.prototype.HOME = '/api' // 重要在于这里，Vue.prototype.HOME = '/api'是一个定值，默认指向localhost，所有修改指向路径为'/api'，配置文件index.js定义的可跨域路径
// 注意 在配置后一定要更改此处 否则跨域不生效

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
VMdPreview.use(createKatexPlugin())
VMdPreview.use(githubTheme, {
  Hljs: hljs
})
// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
Vue.use(VMdPreview)
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.use(Chat)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
