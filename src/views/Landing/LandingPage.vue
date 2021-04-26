<template>
  <div class="landing-page">
    <Home id="home-page" @scrollToPage="scrollToPage" />
    <ContentIntro id="content-intro-page" />
    <ContentFirst id="content-first-page" />
    <ContentSwitchRole id="content-switch-role-page" />
    <ContentBrief id="content-brief-page" />
    <QuizIntro id="quiz-intro-page" />
    <ProductList id="product-list" />
    <ContactFooter id="contact-footer" />
    <audio ref="homeAudio" :src="require('@/assets/sound/home_shop_sound.wav')" autoplay loop />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Home from './Home'
import ContentIntro from './ContentIntro'
import ContentFirst from './ContentFirst'
import ContentSwitchRole from './ContentSwitchRole'
import ContentBrief from './ContentBrief'
import QuizIntro from '../Quiz/QuizIntro'
import ProductList from './ProductList'
import ContactFooter from './ContactFooter'

export default {
  components: {
    Home,
    ContentIntro,
    ContentFirst,
    ContentSwitchRole,
    ContentBrief,
    QuizIntro,
    ProductList,
    ContactFooter
    // Home: () => import('./Home'),
    // ContentIntro: () => import('./ContentIntro'),
    // ContentFirst: () => import('./ContentFirst'),
    // ContentSwitchRole: () => import('./ContentSwitchRole'),
    // ContentBrief: () => import('./ContentBrief'),
    // QuizIntro: () => import('../Quiz/QuizIntro')
  },
  data() {
    return {
      scrollPoint: 0
    }
  },
  computed: {
    ...mapState('preference', {
      currentHomeComponent: 'currentHomeComponent'
    })
  },
  watch: {
    currentHomeComponent(newValue) {
      if (newValue !== '') {
        this.scrollToPage(newValue)
      }
    }
  },
  mounted() {
    this.$refs.homeAudio.loop = true
    this.scrollPoint = window.innerHeight * 40 / 100
    if (this.currentHomeComponent !== '') {
      this.$nextTick(() => {
        this.scrollToPage(this.currentHomeComponent)
      })
    }
  },
  methods: {
    ...mapMutations('preference', {
      changeUserHomeComponent: 'changeUserHomeComponent'
    }),
    scrollToPage(elementId) {
      document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' })
      this.changeUserHomeComponent('')
    }
  }
}
</script>

<style lang="scss">
.landing-page {
  height: 100vh;
  overflow: scroll;
  scroll-snap-type: y mandatory;
  div {
    scroll-snap-align: start;
  }
}
</style>
