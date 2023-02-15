export default {
  namespaced: true,
  state: {
    chapter: '1', // 当前章节数
    tab: 'course', // 当前标签页
    environment: 'none' // 控制实验环境
  },
  actions: {},
  mutations: {
    // 更改章节
    CHANGE_CHAPTER(state, value) {
      state.chapter = value
    },
    // 更改标签页
    CHANGE_TAB(state, value) {
      state.tab = value
    },
    // 更改实验环境
    CHANGE_ENV(state, value) {
      state.environment = value
    }
  }
}
