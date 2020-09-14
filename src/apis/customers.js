import { getList, getOneById, create, update, deleteMore } from './common'

const url = '/customers'

export const customerService = {
  getList: (params = null) => {
    return getList(url, params)
  },
  getOneById: (id) => {
    return getOneById(url, id)
  },
  create: (data) => {
    return create(url, data)
  },
  update: (id, data) => {
    return update(url, id, data)
  },
  delete: (id) => {
    return deleteMore(url, id)
  }
}
