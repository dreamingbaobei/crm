import { $axios } from '../utils/http'

const url = '/users'

export const usersService = {
  login: (data) => {
    return $axios({
      url: `${url}/login`,
      method: 'post',
      data
    })
  },
  loginOut: (data) => {
    return $axios({
      url: `${url}/loginOut`,
      method: 'post',
      data
    })
  },
  uploadAvatar: (data) => {
    return $axios({
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      method: 'post',
      url: url,
      data
    })
  },

  getUserInfo: () => {
    return $axios({
      url: `${url}/current`,
      method: 'get'
    })
  },
  getPermissions: () => {
    return $axios({
      url: `${url}/permissions`,
      method: 'get'
    })
  }
}
