<template>
  <div class="base-component-page quiz-intro-page" align="center">
    <div ref="textBarHeader" class="quiz-intro-text-bar text-bar-header-container" align="left">
      <div
        ref="textHeaderContainer"
        class="text-header-container"
        :style="textHeaderTransition"
      >
        <div ref="textHeaderContent" class="text-header-content">
          บททดสอบแห่งโชคชะตา
        </div>
        <div class="text-header-content">
          บททดสอบแห่งโชคชะตา
        </div>
        <div class="text-header-content">
          บททดสอบแห่งโชคชะตา
        </div>
        <div class="text-header-content">
          บททดสอบแห่งโชคชะตา
        </div>
        <div class="text-header-content">
          บททดสอบแห่งโชคชะตา
        </div>
        <div class="text-header-content">
          บททดสอบแห่งโชคชะตา
        </div>
      </div>
    </div>
    <div
      class="quiz-intro-content-container"
      :class="currentQuizIntroStep === 2 ? 'show-intro-content' :''"
    >
      <button
        class="text-button quiz-button first-button"
        :class="isFirstButtonClicked ? 'hide-first-button' :''"
        @click="isFirstButtonClicked = true"
      >
        พิสูจน์ตัวตนของท่าน
      </button>
      <div>
        <p><strong>การพิสูจน์ตน</strong> คือ</p>
      </div>
      <div>
        <p>การประเมินความคิดของท่านโดยท่าน</p>
      </div>
      <div>
        <p>จะรับบทเป็นนายเส็งชายชาวบ้าน</p>
      </div>
      <div>
        <p>ผู้อยู่ ในยุค ร.ศ.๓๑</p>
      </div>
      <button
        class="text-button quiz-button second-button"
        :class="currentQuizIntroStep === 2 ? 'show-second-button' :''"
        @click="changeUserPage('quiz')"
      >
        สวมบทบาท
      </button>
    </div>
    <div class="quiz-intro-text-bar text-bar-footer-container">
      <div
        ref="textFooterContainer"
        class="text-footer-container"
        :style="textFooterTransition"
        align="right"
      >
        <div ref="textFooterContent" class="text-footer-content">
          ที่จะแสดงให้เห็นห้วงลึกในจิตใจ
        </div>
        <div class="text-footer-content">
          ที่จะแสดงให้เห็นห้วงลึกในจิตใจ
        </div>
        <div class="text-footer-content">
          ที่จะแสดงให้เห็นห้วงลึกในจิตใจ
        </div>
        <div class="text-footer-content">
          ที่จะแสดงให้เห็นห้วงลึกในจิตใจ
        </div>
        <div class="text-footer-content">
          ที่จะแสดงให้เห็นห้วงลึกในจิตใจ
        </div>
        <div class="text-footer-content">
          ที่จะแสดงให้เห็นห้วงลึกในจิตใจ
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      isFirstButtonClicked: false,
      currentQuizIntroStep: 1,
      isHeaderOnTransition: false,
      textHeaderContentWidth: 0,
      isFooterOnTransition: false,
      textFooterContentWidth: 0
    }
  },
  computed: {
    textHeaderTransition() {
      const percent = this.textHeaderContentWidth * 100 / window.innerWidth
      if (this.isHeaderOnTransition) {
        return `
          transition: all 7s linear;
          margin-left: -${percent}%;
        `
      } else {
        return ''
      }
    },
    textFooterTransition() {
      const percent = this.textFooterContentWidth * 100 / window.innerWidth
      
      if (this.isFooterOnTransition) {
        return `
          transition: all 7s linear;
          margin-right: -${percent}%;
        `
      } else {
        return ''
      }
    }
  },
  mounted() {
    const firstButton = document.querySelector('.quiz-button.first-button')
    firstButton.addEventListener('transitionend', this.onFirstButtonTransitionEnd)
    this.$refs.textHeaderContainer.addEventListener('transitionend', () => {
      this.setHeaderAnimation()
    })
    this.$refs.textFooterContainer.addEventListener('transitionend', () => {
      this.setFooterAnimation()
    })
    this.$nextTick(() => {
      this.isHeaderOnTransition = true
      this.isFooterOnTransition = true
    })
    this.textHeaderContentWidth = this.$refs.textHeaderContent.offsetWidth
    this.textFooterContentWidth = this.$refs.textFooterContent.offsetWidth
  },
  methods: {
    ...mapMutations('preference', {
      changeUserPage: 'changeUserPage'
    }),
    onFirstButtonTransitionEnd() {
      this.currentQuizIntroStep = 2
    },
    setHeaderAnimation() {
      this.isHeaderOnTransition = false
      setTimeout(() => {
        this.isHeaderOnTransition = true
      }, 10)
    },
    setFooterAnimation() {
      this.isFooterOnTransition = false
      setTimeout(() => {
        this.isFooterOnTransition = true
      }, 5)
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 1920px) {
  .quiz-button {
    font-size: 3.5vw;
  }
  .quiz-intro-text-bar {
    height: 12vw;
    font-size: 8vw;
  }
  .quiz-intro-content-container {
    p {
      font-size: 1.7vw;
    }
  }
}

@media (min-width: 1920px) {
  .quiz-button {
    font-size: 64px;
  }
  .quiz-intro-text-bar {
    height: 190px;
    font-size: 140px;
  }
  .quiz-intro-content-container {
    p {
      font-size: 27px;
    }
  }
}

.quiz-intro-page {
  display: flex;
  background-image: url('../../assets/images/quiz/quiz_intro_background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.quiz-intro-content-container {
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translateX(-50%);
  width: 1100px;
  height: fit-content;
  padding-bottom: 100px;
  max-height: 60vh;
  overflow: hidden;

  &.show-intro-content {
    p {
      margin-top: 0px;
    }
  }

  div {
    overflow: hidden;
    height: 50px;
    p {
      margin-top: 50px;
      color: white;
      transition: margin-top .8s ease-out;
    }
  }
}

.quiz-button {
  color: white;
  font-weight: 700;

  &.first-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all .4s ease-in;

    &.hide-first-button {
      top: 120%;
    }
  }

  &.second-button {
    position: absolute;
    bottom: -40%;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 2px solid white;
    transition: bottom .5s ease-out;

    &.show-second-button {
      bottom: 0;
    }
  }
}

.quiz-intro-text-bar {
  position: absolute;
  background-color: black;
  width: 100%;
  color: black;
  font-family: '9_our_king';
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
  overflow: hidden;

  &.text-bar-header-container {
    top: 0;
    left: 0;
    width: 100%;
    div {
      display: inline-block;
    }
    .text-header-container {
      position: absolute;
      top: 0;
      margin: 0;
      .text-header-content {
        position: relative;
        width: fit-content;
        display: inline;
        white-space: nowrap;
      }
    }
  }

  &.text-bar-footer-container {
    bottom: 0;
    right: 0;
    width: 100%;
    .text-footer-container {
      position: absolute;
      top: 0;
      right: 0;
      margin: 0;
      .text-footer-content {
        position: relative;
        width: fit-content;
        display: inline;
        white-space: nowrap;
      }
    }
  }
}
</style>
