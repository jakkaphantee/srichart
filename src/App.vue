<template>
  <div align="center">
    <div v-if="isSiteUsable">
      <HamburgerMenu v-if="currentPage !== 'intro'" />
      <Intro v-if="currentPage === 'intro'" />
      <LandingPage v-if="currentPage === 'home'" />
      <QuizMain v-else-if="currentPage === 'quiz'" />
      <ProductDetail v-else-if="currentPage === 'product'" />
    </div>
    <div
      v-else
      class="app-page-intro"
    >
      <h3>
        <strong>
          ไปเปิดบนหน้าจอคอมพิวเตอร์ของเอ็งซะ!!
        </strong>
      </h3>
    </div>
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
    QuizMain: () => import('./views/Quiz/QuizMain'),
    ProductDetail: () => import('./views/ProductDetail')
  },
  data: () => ({
    isSiteUsable: false
  }),
  computed: {
    ...mapState('preference', {
      currentPage: state => state.currentPage
    })
  },
  mounted() {
    const windowWidth = window.innerWidth
    if (windowWidth > 1280) {
      this.isSiteUsable = true
    }
  }
}
</script>

<style lang="scss" scoped>
.app-page-intro {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-image: url('assets/images/intro/intro_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
