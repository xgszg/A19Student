import request from '@/utils/http'

export function getClassesAPI(username) {
  return request({
    url: '/getClassesByUsername',
    params: {
      username: username
    }
  })
}

export default {
  // 课程数据
  // classrooms: [{
  //   id: 1,
  //   date: '2022-2023第二学期',
  //   name: '数据结构',
  //   classrooms: ['软工201', '软工202'],
  //   code: '12edxf2',
  //   teacher: '张强',
  //   classification: '理论',
  //   url: 'url("https://snz04pap001files.storage.live.com/y4mxbI_YUQrlmKkkotfrICpyBjV1Wii_HYkJ8LXDK0X2LwEaBgp9gcWHQcn9gI4FjfkJUxZ3xfOxsj3SQo5GC2Z8gRD-WOudLLLKD2BSjWToRrr3WLzD7cRNd74xtQZhiXU0tWBR-xewbpWlyl2Xzb5P_2BrEe57OsAAqUy0ivMXlkJTbe3mPyy4mNg48VTt6pB?width=938&height=626&cropmode=none")'
  // }, {
  //   id: 2,
  //   date: '2022-2023第二学期',
  //   name: '操作系统',
  //   classrooms: ['软工201', '软工202'],
  //   code: '4da15rd',
  //   teacher: '张强',
  //   classification: '理论',
  //   url: 'url("https://snz04pap001files.storage.live.com/y4mNLXhPRp0ec47--pQFSdtqUvtov20OblVpMjvTToXDiaYbvfcs1n7ittT8CvGbEuTyUWcie17TBQJPFemTcjWr5YhR6Eq8pHE-Dv2vPSbAd7_OaJiHpAEE5K01rBZnr1b6_-QCHaiFpTWk1K0gCEIHND5GqbgHZwX6HALjBjTAZyF0QlX-8WclZ9q6AgPC61r?width=968&height=645&cropmode=none")'
  // }, {
  //   id: 3,
  //   date: '2022-2023第二学期',
  //   name: '数据库原理及应用',
  //   classrooms: ['软工201', '软工202'],
  //   code: '8da54fs',
  //   teacher: '吉敏',
  //   classification: '理论',
  //   url: 'url("https://snz04pap001files.storage.live.com/y4mpPJjItlMSzbMY0oFxPxf86EUoOJ6yRqvvgoQ1hjt4hTv9vqO7-GjuWoJtRQmyvSKOme8atRNsAch8TOpoxYlsFNVXFJggy4d1xc9xuZdaShLO_FPA5CWPZBtsu5_VwNiNhnWKLHYzufqE0Tsb4DL0dd8i6Ag9xrZFd4NmVGd9JIaZHjCzK-iN5C4NEb9wCI4?width=958&height=640&cropmode=none")'
  // }, {
  //   id: 4,
  //   date: '2022-2023第二学期',
  //   name: '软件工程',
  //   classrooms: ['软工201', '软工202'],
  //   code: 'daw784f',
  //   teacher: '王慧',
  //   classification: '理论',
  //   url: 'url("https://snz04pap001files.storage.live.com/y4mWekw6QHfNWLBDcSHIEwXcgR_W9UQ1tcVBMf49hVdcpemkiQIYoEsnQWEgKfvDGxTwWwFKHmbHerkXkU8lz1Vt9I2_oTS1dsUO-k1nebuAs-RN-DTzXooR4sp1kI9-2aR3VRZ_TJQ_XdNX7Kt-NrYPg0O1LGgGgeIXONMIJd3gyRNMbKH1MPFJoZB_J8mRJR4?width=960&height=720&cropmode=none")'
  // }, {
  //   id: 5,
  //   date: '2022-2023第二学期',
  //   name: '数据结构课程实验与课程设计',
  //   classrooms: ['软工201', '软工202', '计科201', '计科202'],
  //   code: 'jyt456d',
  //   teacher: '袁晓东',
  //   classification: '实训',
  //   url: 'url("https://snz04pap001files.storage.live.com/y4mQn1i77GbENjFauSTWQDtZTVP4i1ZLzcOmAEy5ftTyjFIfFo29WZbEO2OjGWQrovR9YHvTFC9WlqySdfPEsWbfWFw9KJ_KAGuLuYIuZ2s-O1m0d7mP9Tti1A8v0_LL07hzres_rHpix0J0HrkPdOjkvmrmrbE-pEc_EJXemU1Wm-YYkzM4QKMqf7_i5vUQC6F?width=950&height=633&cropmode=none")'
  // }, {
  //   id: 6,
  //   date: '2022-2023第二学期',
  //   name: 'Linux操作系统',
  //   classrooms: ['软工201', '软工202', '大数据201', '大数据202'],
  //   code: 'fd4f8w4',
  //   teacher: '张强',
  //   classification: '实训',
  //   url: 'url("https://snz04pap001files.storage.live.com/y4mNLXhPRp0ec47--pQFSdtqUvtov20OblVpMjvTToXDiaYbvfcs1n7ittT8CvGbEuTyUWcie17TBQJPFemTcjWr5YhR6Eq8pHE-Dv2vPSbAd7_OaJiHpAEE5K01rBZnr1b6_-QCHaiFpTWk1K0gCEIHND5GqbgHZwX6HALjBjTAZyF0QlX-8WclZ9q6AgPC61r?width=968&height=645&cropmode=none")'
  // }],
  // 实验数据
  investigation: [{
    url: require('@/assets/course_images/uid1-20200406-1586165980776.png'),
    name: '操作系统实验',
    last: 'proc文件系统的实现(7/10)',
    process: 7,
    type: 'experiment'
  }, {
    url: require('@/assets/course_images/数据结构实验.png'),
    name: '搜索与图论',
    last: ' 有向图的拓扑序列(6/10)',
    process: 6,
    type: 'code'
  }],
  // 公告数据
  notice: [{
    title: '公告一',
    time: '2023/3/1 10:30',
    content: '这是公告一的内容'
  }, {
    title: '公告二',
    time: '2023/3/2 11:30',
    content: '这是公告二的内容'
  }, {
    title: '公告三',
    time: '2023/3/4 19:14',
    content: '这是公告三的内容'
  }],
  // 资料数据
  data: [{
    name: '资料一',
    time: '2023/12/31 10:30',
    state: '未学习'
  }, {
    name: '资料二',
    time: '2023/12/31 10:30',
    state: '未学习'
  }, {
    name: '资料三',
    time: '2023/12/31 10:30',
    state: '未学习'
  }],
  // 作业数据
  homework: [{
    name: '作业一',
    time: '2023/3/5 10:30',
    status: '已结束',
    attribute: '个人作业',
    state: '已提交',
    information: '这是作业一的作业详情'
  }, {
    name: '作业二',
    time: '2023/3/3 10:30',
    status: '已结束',
    attribute: '个人作业',
    state: '已提交',
    information: '这是作业二的作业详情'
  }, {
    name: '作业三',
    time: '2023/3/31 10:30',
    status: '未结束',
    attribute: '个人作业',
    state: '已提交',
    information: '请自行搜索一道动态规划的算法，完成做题报告并上传（与书本上的题目不同）'
  }, {
    name: '作业四',
    time: '2022/3/15 10:30',
    status: '未结束',
    attribute: '个人作业',
    state: '未提交',
    information: '这是作业四的作业详情'
  }]
}
