function getUrlKey (key, url = window.location) {
  const query = url.substr(url.indexOf('?') + 1)
  const vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] === key) {
      return pair[1]
    }
  }
  return (false)
}

export default {
  getUrlKey
}
