import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token, username) {
  Cookies.set(TokenKey, token)
  return Cookies.set('username', username)
}

export function removeToken() {
  Cookies.remove('username')
  return Cookies.remove(TokenKey)
}
