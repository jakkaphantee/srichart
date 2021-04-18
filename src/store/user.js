const state = () => ({
  user: {
    type: ''
  }
})

const mutations = {
  changeUserType: (state, type) => {
    state.user.type = type
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
