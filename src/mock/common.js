const Mock = require('mockjs')
const Random = Mock.Random // 获取random对象，随机生成各种数据
// 拓展mockjs
Random.extend({
  phone: function () {
    const phonePrefixs = ['132', '135', '189']
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
  }
})

function returnData (data = {}, code = 0, message = 'success') {
  return {
    code,
    data,
    message
  }
}

export {
  Random,
  returnData
}
