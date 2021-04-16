<template>
  <div class="app-scroll-snap" align="center">
    <HamburgerMenu v-if="currentPage !== 'intro'" />
    <Intro v-if="currentPage === 'intro'" />
    <LandingPage v-if="currentPage !== 'intro'" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HamburgerMenu from '@/components/general/HamburgerMenu'

export default {
  components: {
    HamburgerMenu: HamburgerMenu,
    Intro: () => import('./views/Intro'),
    LandingPage: () => import('./views/Landing/LandingPage')
  },
  computed: {
    ...mapState('user', {
      currentPage: state => state.user.currentPage
    })
  },
  methods: {
    setScrollLock(value) {
      value
    }
  }
}
</script>

<style lang="scss" scoped>
.app-scroll-snap {
  scroll-snap-type: y mandatory;
}
</style>
