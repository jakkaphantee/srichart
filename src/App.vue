<template>
  <div align="center">
    <HamburgerMenu v-if="currentPage !== 'intro'" />
    <Intro v-if="currentPage === 'intro'" />
    <LandingPage v-if="currentPage === 'home'" />
    <QuizMain v-else-if="currentPage === 'quiz'" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HamburgerMenu from '@/components/general/HamburgerMenu'

export default {
  components: {
    HamburgerMenu: HamburgerMenu,
    Intro: () => import('./views/Intro'),
    LandingPage: () => import('./views/Landing/LandingPage'),
    QuizMain: () => import('./views/Quiz/QuizMain')
  },
  computed: {
    ...mapState('preference', {
      currentPage: state => state.currentPage
    })
  },
  methods: {
    setScrollLock(value) {
      value
    }
  }
}
</script>
