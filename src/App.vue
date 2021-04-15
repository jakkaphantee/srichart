<template>
  <div align="center">
    <HamburgerMenu v-if="currentPage !== 'intro'" />
    <Intro v-if="currentPage === 'intro'" />
    <Home v-if="currentPage !== 'intro'" />
    <ContentIntro
      v-if="currentPage !== 'intro'"
      @setScrollLock="setScrollLock"
    />
    <ContentFirst
      v-if="currentPage !== 'intro'"
    />
    <ContentSwitchRole
      v-if="currentPage !== 'intro'"
    />
    <ContentBrief
      v-if="currentPage !== 'intro'"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HamburgerMenu from '@/components/general/HamburgerMenu'

export default {
  components: {
    HamburgerMenu: HamburgerMenu,
    Intro: () => import('./views/Intro'),
    Home: () => import('./views/Home'),
    ContentIntro: () => import('./views/ContentIntro'),
    ContentFirst: () => import('./views/ContentFirst'),
    ContentSwitchRole: () => import('./views/ContentSwitchRole'),
    ContentBrief: () => import('./views/ContentBrief')
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
