// import utils from '../utils/utils'
import { Random, returnData } from './common'

// import qs from 'qs'

function login (res) {
  return returnData({ token: Random.string(16) })
}

function getUserInfo (res) {
  return returnData({
    id: Random.number(),
    name: Random.cname(),
    avatar: Random.image('100x100')
  })
}

function getPermissions (res) {
  return returnData({
    menus: [
      { id: 1, parentId: 0, name: 'customers', router: '/customers', type: 1, orderNum: 0, isShow: 1 },
      { id: 2, parentId: 0, name: 'userCenter', router: '/userCenter', type: 1, orderNum: 0, isShow: 1 }
    ]
  })
}

export default {
  login,
  getUserInfo,
  getPermissions
}
