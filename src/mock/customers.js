import utils from '../utils/utils'
import { Random, returnData } from './common'
// import qs from 'qs'

function getList (req) {
  const pageSize = parseInt(utils.getUrlKey('pageSize', req.url)) || 10
  const currentPage = parseInt(utils.getUrlKey('currentPage', req.url)) || 1
  const list = []
  for (let i = 0; i < pageSize; i++) {
    list.push({
      id: 1,
      name: Random.cname(),
      phone: Random.phone(),
      create_time: Random.date('yyyy-MM-dd') + Random.time(),
      avatar: Random.image('200x100', '#4A7BF7'),
      city: Random.city(true)
    })
  }
  return returnData({
    currentPage: currentPage,
    pageSize: pageSize,
    totalNum: 100,
    totalPage: 5,
    list: list
  })
}

function getOneById (req) {
  const id = utils.getUrlKey('id', req.url)
  return returnData({
    id,
    name: Random.cname(),
    avatar: Random.image('100x100', '#4A7BF7')
  })
}

function create (req) {
  // const data = qs.parse(req.body)
  return returnData()
}

function update (req) {
  // const data = qs.parse(req.body)
  return returnData()
}

function del (req) {
  // const id = utils.getUrlKey('id', req.url)
  return returnData()
}

export default {
  getList,
  getOneById,
  create,
  update,
  del
}
