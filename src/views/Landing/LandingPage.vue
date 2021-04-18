<template>
  <div>
    <Home id="home-page" @scrollToPage="scrollToPage" />
    <ContentIntro id="content-intro-page" />
    <ContentFirst id="content-first-page" />
    <ContentSwitchRole id="content-switch-role-page" />
    <ContentBrief id="content-brief-page" />
    <QuizIntro id="quiz-intro-page" />
  </div>
</template>

<script>
// import scrollEventCheck from '@/helpers/scrollEventCheck.js'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    Home: () => import('./Home'),
    ContentIntro: () => import('./ContentIntro'),
    ContentFirst: () => import('./ContentFirst'),
    ContentSwitchRole: () => import('./ContentSwitchRole'),
    ContentBrief: () => import('./ContentBrief'),
    QuizIntro: () => import('../Quiz/QuizIntro')
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
    document.addEventListener('scroll', this.landingPageScrollListener)
  },
  methods: {
    ...mapMutations('preference', {
      changeUserHomeComponent: 'changeUserHomeComponent'
    }),
    scrollToPage(elementId) {
      document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' })
    },
    landingPageScrollListener() {
      // const homePage = document.getElementById('home-page').getBoundingClientRect()
      // const contentIntroPage = document.getElementById('content-intro-page').getBoundingClientRect()
      // const contentFirstPage = document.getElementById('content-first-page').getBoundingClientRect()
      // const contentSwitchRolePage = document.getElementById('content-switch-role-page').getBoundingClientRect()
      // const contentBriefPage = document.getElementById('content-brief-page').getBoundingClientRect()
      // const quizIntroPage = document.getElementById('quiz-intro-page').getBoundingClientRect()
    }
  }
}
</script>
