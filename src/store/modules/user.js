import { usersService } from '../../apis/user'

const state = {
  token: '',
  userInfo: '',
  permissions: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, user) => {
    state.userInfo = user
  },
  SET_AVATAR: (state, avatar) => {
    state.userInfo.avatar = avatar
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.permissions = permissions
  }
}

const actions = {
  login: ({ dispatch, commit }, user) => {
    return new Promise((resolve, reject) => {
      usersService.login(user).then(data => {
        const { token } = data.data
        // 更新state token
        commit('SET_TOKEN', token)
        // token写入本地存储, 用户信息写入本地存储
        sessionStorage.setItem('token', token)
        resolve(data.data)
        // 获取用户信息和用户权限
        // Promise.all([dispatch('getInfo'), dispatch('getPermissions')]).then(data => {
        //   resolve(data[1])
        // })
      }).catch(err => {
        console.log(err)
      })
    })
  },
  logout: () => {
  },
  getInfo: ({ commit }) => {
    return new Promise((resolve, reject) => {
      usersService.getUserInfo().then(({ data }) => {
        console.log('用户信息', data)
        // 写入storage
        sessionStorage.setItem('userInfo', JSON.stringify(data))
        // 更新state
        commit('SET_USER', data)
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getPermissions: ({ commit }) => {
    return new Promise((resolve, reject) => {
      usersService.getPermissions().then(res => {
        const permissions = res.data
        // 写入storage,防止刷新时数据丢失
        sessionStorage.setItem('permissions', JSON.stringify(permissions))
        // 更新state
        commit('SET_PERMISSIONS', permissions)
        resolve(permissions)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
