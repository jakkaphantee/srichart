const state = () => ({
  user: {
    type: '',
    point: 0
  }
})

const mutations = {
  changeUserType: (state, type) => {
    state.user.type = type
  },
  updateUserPoint: (state, point) => {
    state.user.point = point
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
