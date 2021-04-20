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
      to: 'product-list'
    },
    {
      label: 'ผู้จัดทำ',
      to: 'contact-footer'
    }
  ],
  currentPage: 'intro',
  currentHomeComponent: '',
  currentProductView: ''
})

const mutations = {
  changeUserPage: (state, page) => {
    state.currentPage = page
  },
  changeUserHomeComponent: (state, componentId) => {
    state.currentHomeComponent = componentId
  },
  changeCurrentProductView: (state, productName) => {
    state.currentProductView = productName
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
