<template>
  <div class="landing-page">
    <Home id="home-page" @scrollToPage="scrollToPage" />
    <ContentIntro id="content-intro-page" />
    <ContentFirst id="content-first-page" />
    <ContentSwitchRole id="content-switch-role-page" />
    <ContentBrief id="content-brief-page" />
    <QuizIntro id="quiz-intro-page" />
    <ContactFooter id="contact-footer" />
  </div>
</template>

<script>
// import scrollEventCheck from '@/helpers/scrollEventCheck.js'
import { mapState, mapMutations } from 'vuex'
import Home from './Home'
import ContentIntro from './ContentIntro'
import ContentFirst from './ContentFirst'
import ContentSwitchRole from './ContentSwitchRole'
import ContentBrief from './ContentBrief'
import QuizIntro from '../Quiz/QuizIntro'
import ContactFooter from './ContactFooter'

export default {
  components: {
    Home,
    ContentIntro,
    ContentFirst,
    ContentSwitchRole,
    ContentBrief,
    QuizIntro,
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
        this.changeUserHomeComponent('')
      }
    }
  },
  mounted() {
    this.scrollPoint = window.innerHeight * 40 / 100
    if (this.currentHomeComponent !== '') {
      this.$nextTick(() => {
        this.scrollToPage(this.currentHomeComponent)
      })
    }
    // document.addEventListener('scroll', this.landingPageScrollListener)
  },
  methods: {
    ...mapMutations('preference', {
      changeUserHomeComponent: 'changeUserHomeComponent'
    }),
    scrollToPage(elementId) {
      document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' })
    },
    landingPageScrollListener() {
      //
    }
  }
}
</script>

<style lang="scss">
.landing-page {
  scroll-snap-type: y mandatory;
}
</style>
