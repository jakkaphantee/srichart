<template>
  <div align="center">
    <HamburgerMenu />
    <Intro v-if="false" />
    <Home />
  </div>
</template>

<script>
import HamburgerMenu from '@/components/general/HamburgerMenu'

export default {
  components: {
    HamburgerMenu: HamburgerMenu,
    Intro: () => import('./views/Intro'),
    Home: () => import('./views/Home')
  }
}
</script>
