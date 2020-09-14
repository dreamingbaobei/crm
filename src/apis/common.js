import { $axios } from '../utils/http'

export function getList (url, params = null) {
  return $axios({
    method: 'get',
    url,
    params: params
  })
}

export function getOneById (url, id) {
  return $axios({
    method: 'get',
    url,
    params: { id }
  })
}

export function create (url, data) {
  return $axios({
    url: url,
    method: 'post',
    data
  })
}

export function update (url, id, data) {
  return $axios({
    url: `${url}/${id}`,
    method: 'put',
    data
  })
}

export function deleteOne (url, id) {
  return $axios({
    url: `${url}`,
    method: 'delete',
    params: { id }
  })
}

export function deleteMore (url, ids) {
  return $axios({
    url: `${url}`,
    method: 'delete',
    params: { id: ids.join() }
  })
}
