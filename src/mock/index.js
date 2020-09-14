import customers from './customers'
import users from './users'
const Mock = require('mockjs')

Mock.mock(/\/api\/users\/login/, 'post', users.login)
Mock.mock(/\/api\/users\/current/, 'get', users.getUserInfo)
Mock.mock(/\/api\/users\/permissions/, 'get', users.getPermissions)

Mock.mock(/\/api\/customers\?id=/, 'get', customers.getOneById)
Mock.mock(/\/api\/customers/, 'get', customers.getList)
Mock.mock(/\/api\/customers/, 'post', customers.create)
Mock.mock(/\/api\/customers\//, 'put', customers.update)
Mock.mock(/\/api\/customers\?id=/, 'delete', customers.del)
