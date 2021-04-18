<template>
  <div class="base-component-page quiz-intro-page">
    <div class="quiz-intro-text-bar text-bar-header-container">
      <div>
        บททดสอบแห่งโชคชะตา บททดสอบแห่งโชคชะตา บททดสอบแห่งโชคชะตา บททดสอบแห่งโชคชะตา บททดสอบแห่งโชคชะตา
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
      <div>
        ที่จะแสดงให้เห็นห้วงลึกในจิตใจ ที่จะแสดงให้เห็นห้วงลึกในจิตใจ ที่จะแสดงให้เห็นห้วงลึกในจิตใจ ที่จะแสดงให้เห็นห้วงลึกในจิตใจ ที่จะแสดงให้เห็นห้วงลึกในจิตใจ
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
      currentQuizIntroStep: 1
    }
  },
  mounted() {
    const firstButton = document.querySelector('.quiz-button.first-button')
    firstButton.addEventListener('transitionend', this.onFirstButtonTransitionEnd)
  },
  methods: {
    ...mapMutations('preference', {
      changeUserPage: 'changeUserPage'
    }),
    onFirstButtonTransitionEnd() {
      this.currentQuizIntroStep = 2
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
}

@media (min-width: 1920px) {
  .quiz-button {
    font-size: 64px;
  }
  .quiz-intro-text-bar {
    height: 190px;
    font-size: 140px;
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
  position: relative;
  margin: auto;
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
      font-size: 27px;
      transition: margin-top .8s ease-out;
    }
  }
}

.quiz-button {
  color: white;
  font-weight: 700;

  &.first-button {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    transition: all .4s ease-in;

    &.hide-first-button {
      top: 100%;
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
  display: flex;
  align-items: center;
  background-color: black;
  width: 100%;
  overflow: hidden;
  color: black;
  font-family: '9_our_king';
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;

  div {
    position: absolute;
    margin: auto;
    white-space: nowrap;
  }

  &.text-bar-header-container {
    top: 0;

    div {
      animation: text-bar-header-animate 5s infinite linear;
    }

    @keyframes text-bar-header-animate {
      from {
        left: 0%;
      }
      to {
        left: -73%;
      }
    }
  }

  &.text-bar-footer-container {
    bottom: 0;
    
    div {
      animation: text-bar-footer-animate 5s infinite linear;
    }

    @keyframes text-bar-footer-animate {
      from {
        right: 0%;
      }
      to {
        right: -93%;
      }
    }
  }
}
</style>
