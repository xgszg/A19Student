
const tokens = {
  admin: {
    token: 'admin-token'
  },
  student: {
    token: 'student-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://cdn.sep.cc/avatar/be9cfff2b27afb56b75eccde7e6e5778?d=identicon',
    name: 'Super Admin'
  },
  'student-token': {
    roles: ['student'],
    introduction: '我是一名学生',
    avatar: 'https://cdn.sep.cc/avatar/be9cfff2b27afb56b75eccde7e6e5778?d=identicon',
    name: '张佳'
  }
}

module.exports = [
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
