export default {
  namespaced: true,
  state: {
    chapter: '1', // 当前章节数
    tab: 'course' // 当前标签页
  },
  actions: {},
  mutations: {
    // 更改章节
    CHANGE_CHAPTER(state, value) {
      state.chapter = value
    },
    CHANGE_TAB(state, value) {
      state.tab = value
    }
  }
}
