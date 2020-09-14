/**
 * 去除字符串空格
 * @param  value [String]
 * @param type [Number] 1-所有空格 2-前后空格 3-前空格 4-后空格
 * @returns {*}
 */
export function trim (value, type) {
  switch (type) {
    case 1:
      return value.replace(/\s+/g, '')
    case 2:
      return value.replace(/(^\s*)|(\s*$)/g, '')
    case 3:
      return value.replace(/(^\s*)/g, '')
    case 4:
      return value.replace(/(\s*$)/g, '')
    default:
      return value
  }
}

/**
 * 格式化日期
 *  {{ '2018-09-14 01:05' | formaDate(yyyy-MM-dd hh:mm:ss) }}
 * {{ '2018-09-14 01:05' | formaDate(yyyy-MM-dd) }}
 * {{ '2018-09-14 01:05' | formaDate(MM/dd) }} 等
 * @param value
 * @param fmt
 * @returns {*}
 */
export function formaDate (value, fmt) {
  var date = new Date(value)
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'w+': date.getDay(), // 星期
    'q+': Math.floor((date.getMonth() + 3) / 3) // 季度
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (k === 'w+') {
      if (o[k] === 0) {
        fmt = fmt.replace('w', '周日')
      } else if (o[k] === 1) {
        fmt = fmt.replace('w', '周一')
      } else if (o[k] === 2) {
        fmt = fmt.replace('w', '周二')
      } else if (o[k] === 3) {
        fmt = fmt.replace('w', '周三')
      } else if (o[k] === 4) {
        fmt = fmt.replace('w', '周四')
      } else if (o[k] === 5) {
        fmt = fmt.replace('w', '周五')
      } else if (o[k] === 6) {
        fmt = fmt.replace('w', '周六')
      }
    } else if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
