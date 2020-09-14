const state = {
  showLoading: false
}

const mutations = {
  TOGGLE_SHOW_LOADING: (state) => {
    state.showLoading = !state.showLoading
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
