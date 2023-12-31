import request from '@/utils/http'

export function getAllExamAPI() {
  return request({
    url: '/getAllExam'
  })
}
export function getFractionAPI(username, examId) {
  return request({
    url: '/getFraction',
    params: {
      username: username,
      examId: examId
    }
  })
}

export default {
  all: [{
    time: '2023-03-03',
    state: '已结束',
    number: '51',
    name: '2022-2023-2软件工程期中考试',
    fraction: '95',
    class: '软工212'
  }, {
    time: '2023-03-03',
    state: '已结束',
    number: '52',
    name: '操作系统实验考试',
    fraction: '86',
    class: '计科211'
  }, {
    time: '2023-03-04',
    state: '已结束',
    number: '20',
    name: '2021-2022-2数据库原理及应用期中考试',
    fraction: '51',
    class: '软工212'
  }, {
    time: '2023-03-05',
    state: '待批改',
    number: '51',
    name: '2022-2023-2线性代数期中考试',
    fraction: '89',
    class: '软工212'
  }, {
    time: '2022-03-07',
    state: '待参加',
    number: '21',
    name: '2022-2023-2数据结构考试',
    class: '大数据211'
  }, {
    time: '2023-03-16',
    state: '待参加',
    number: '51',
    name: '操作系统第三章检测',
    class: '软工212'
  }]
}
