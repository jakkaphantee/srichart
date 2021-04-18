const state = () => ({
  menuList: [
    {
      label: 'กำเนิด',
      to: 'content-first-page'
    },
    {
      label: 'พิสูจน์ตน',
      to: 'quiz-intro-page'
    },
    {
      label: 'คลังสินค้า',
      to: ''
    },
    {
      label: 'ผู้จัดทำ',
      to: ''
    }
  ],
  currentPage: 'intro',
  currentHomeComponent: ''
})

const mutations = {
  changeUserPage: (state, page) => {
    state.currentPage = page
  },
  changeUserHomeComponent: (state, componentId) => {
    state.currentHomeComponent = componentId
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
