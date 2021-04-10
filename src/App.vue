<template>
  <div align="center">
    <HamburgerMenu v-if="currentPage !== 'intro'" />
    <Intro v-if="currentPage === 'intro'" />
    <Home v-if="currentPage !== 'intro'" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HamburgerMenu from '@/components/general/HamburgerMenu'

export default {
  components: {
    HamburgerMenu: HamburgerMenu,
    Intro: () => import('./views/Intro'),
    Home: () => import('./views/Home')
  },
  computed: {
    ...mapState('user', {
      currentPage: state => state.user.currentPage
    })
  }
}
</script>
