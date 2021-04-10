const state = () => ({
  user: {
    type: '',
    currentPage: ''
  }
})

const mutations = {
  changeUserType: (state, type) => {
    state.user.type = type
  },
  changeUserPage: (state, page) => {
    state.user.currentPage = page
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
