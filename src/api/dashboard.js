import request from '@/utils/http'

export function getTodosAPI() {
  return request({
    url: '/getTodos'
  })
}

export function getLogsAPI() {
  return request({
    url: '/getLogs'
  })
}

export function getEventsAPI() {
  return request({
    url: '/getEvents'
  })
}

export default {
  // // 代办事项
  // todos: [{
  //   id: '1', // 编号
  //   name: '程序设计基础期末考试', // 名称
  //   category: '考试', // 类型
  //   time: '2023-02-01 16:00:00', // 开始时间
  //   end: '2023-02-01 18:00:00', // 结束时间
  //   labels: ['闭卷', '2小时', '在线监控'] // 标签
  // }, {
  //   id: '2',
  //   name: '计算机组成原理课程实验',
  //   category: '实验',
  //   time: '2023-02-01 8:00:00',
  //   end: '2023-02-19 8:00:00',
  //   labels: ['实验报告', '实验课', '个人']
  // }, {
  //   id: '3',
  //   name: '编译原理',
  //   category: '课程',
  //   time: '2023-02-20 10:00:00',
  //   end: '2023-02-20 11:30:00',
  //   labels: ['直播', '2课时']
  // }, {
  //   id: '4',
  //   name: 'C语言设计基础',
  //   category: '课程',
  //   time: '2023-02-20 11:40:00',
  //   end: '2023-02-20 12:00:00',
  //   labels: ['腾讯会议', '2课时']
  // }, {
  //   id: '5',
  //   name: '计算机组成原理',
  //   category: '作业',
  //   time: '',
  //   end: '2023-02-20 24:00:00',
  //   labels: ['提交', '批改']
  // }],
  // // 日志信息
  // logs: [{
  //   id: '1', // 编号
  //   name: '关于做好2021级、2022级全日制普通本科生转专业有关工作的通知', // 信息名称
  //   top: true, // 是否置顶
  //   time: '2023-3-08', // 日期
  //   origin: '教务处', // 通知发布者
  //   detail: '各学院：\n' +
  //     '\n' +
  //     '\n' +
  //     '根据教育部《普通高等学校学生管理规定》、《江苏省教育厅关于加强普通高等学校学生转专业工作管理的指导意见》、《南通大学全日制普通本科学生学籍管理规定》、《南通大学全日制普通本科学生转专业实施办法》等有关文件精神，学校决定即日起启动2021级、2022级全日制普通本科学生转专业工作，现将有关事项通知如下：\n' +
  //     '\n'
  // }, {
  //   id: '2',
  //   name: '教务相关下载（2020年1月之前的文件发布）',
  //   top: true,
  //   time: '2023-3-28',
  //   origin: '教务处',
  //   detail: '内容2'
  // }, {
  //   id: '3',
  //   name: '关于2023年下半年全国大学英语四、六级考试报名的通知',
  //   top: false,
  //   time: '2023-3-28',
  //   origin: '教务处',
  //   detail: '内容3'
  // }, {
  //   id: '4',
  //   name: '关于调整重新学习缴费时间的通知',
  //   top: false,
  //   time: '2023-3-28',
  //   origin: '教务处',
  //   detail: '内容4'
  // }]
}
