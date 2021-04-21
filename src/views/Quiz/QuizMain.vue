<template>
  <div class="quiz-main-page">
    <img
      class="quiz-brand-logo"
      :src="require('@/assets/images/home/home_brand_logo.png')"
      @click="isShowQuestion = !isShowQuestion"
    />
    <div class="quiz-container">
      <div
        class="quiz-image-container"
        :class="isShowQuestion ? 'is-show' : 'is-hide'"
      >
        <img
          ref="questionImage"
          :src="require(`@/assets/images/quiz/${currentQuestion.imageName}.gif`)"
        />
      </div>
      <div class="quiz-question-container">
        <div
          class="quiz-description"
          :class="isShowQuestion ? 'is-show' : 'is-hide'"
        >
          <p>
            {{ currentQuestion.description }}
          </p>
        </div>
        <div
          class="quiz-question"
          :class="isShowQuestion ? 'is-show' : 'is-hide'"
        >
          <p>
            {{ currentQuestion.question }}
          </p>
        </div>
      </div>
      <div class="quiz-answer-container">
        <div
          v-for="answer in currentQuestion.answerList"
          :key="answer.label"
          class="answer-button-container"
          @click="submitAnswer(answer.point)"
        >
          <b-button
            class="answer-button"
            :class="isShowQuestion ? 'is-show' : 'is-hide'"
            size="lg"
          >
            {{ answer.label }}
          </b-button>
        </div>
      </div>
    </div>
    <QuizResult :isModalOpen="isResultModalOpen" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import QuizResult from '@/components/Quiz/QuizResult.vue'

export default {
  name: 'QuizMain',
  components: {
    QuizResult
  },
  data() {
    return {
      questionList: [
        {
          question: 'นายเส็งจักทำเยี่ยงไร?',
          description: 'นายเส็งนี้ส่งนางเอื้องผู้เป็นเมียไปจ่ายตลาด ส่วนนายเส็งรออยู่ที่ท่าน้ำ นายเส็งรอมานาน กระทั่ง ๒๐ บาทแล้ว (๒ ชม.) กระนั้นก็ไม่ยักเห็นนางเอื้องแม้ปลายก้อย',
          imageName: 'question_1',
          answerList: [
            {
              label: 'มิรอแล้ว ข้าจักกลับเรือนก่อนแล้วกัน',
              point: 2
            },
            {
              label: 'ตะโกน โหวกเหวกเรียกหาอีเอื้อง',
              point: 3
            },
            {
              label: 'รอต่อไปด้วยความหงุดหงิดงุ่นง่าน',
              point: 1
            }
          ]
        },
        {
          question: 'นายเส็งตอบกลับไปว่า?',
          description: 'นางเอื้องหอบข้าวของพะรุงพะรังออกมาจากตลาดขอให้ช่วยยกทั้งที่นายเส็งปรามแล้วก่อนหน้าว่าอย่าซื้อของมั่วซั่ว',
          imageName: 'question_2',
          answerList: [
            {
              label: 'ทำไมเอ็งมิฟังที่ข้าสั่งสอนเล่า',
              point: 1
            },
            {
              label: 'เอ็งซื้อมาเอ็งก็ยกเองสิ !',
              point: 2
            },
            {
              label: 'อีเอื้อง อีห่าจิก เอ็งเป็นควายฤ',
              point: 3
            }
          ]
        },
        {
          question: 'นายเส็งควรทำเช่นไร',
          description: 'เมื่อถึงเรือนย่ำค่ำแล้ว นายเส็งหิวจึงให้ นางเอื้องไปเตรียมสำรับเย็น แต่รอจนท้องกิ่วก็ยังมิมีสำรับตั้งเสียทีนายเส็งเริ่มโมโหหิว คิดว่าตนต้องทำอะไรสักอย่างแล้ว',
          imageName: 'question_3',
          answerList: [
            {
              label: 'สั่งสอนว่าเป็นหญิงต้องทำหน้าที่ให้ดี',
              point: 1
            },
            {
              label: 'ทุบตี ให้นางเอื้องรู้ความว่าควรทำอะไร',
              point: 3
            },
            {
              label: 'จะออกไปหาอะไรกินที่โรงเหล้า',
              point: 2
            }
          ]
        },
        {
          question: 'นายเส็งจึง...??',
          description: 'ในบัดนั้นนางเอื้องมอบมาลัยดอกรักที่มีความ ประณีต และชดช้อยให้ แต่ด้วยความโมโหหิวนายเส็งมิมีอารมณ์ที่ จะชื่นชมความงามนั้น',
          imageName: 'question_4',
          answerList: [
            {
              label: 'ขยำมาลัยทิ้ง',
              point: 3
            },
            {
              label: 'ถามว่าให้ทำไมฤา',
              point: 1
            },
            {
              label: 'ไม่รับ เดินหนีไป',
              point: 2
            }
          ]
        },
        {
          question: 'นายเส็งตอบกลับว่า??',
          description: 'นางเอื้องสารภาพตนนั้นไปตลาดเพื่อหาซื้อดอกไม้มาทำลัย แล้วนั่งร้อยด้วยความตั้งใจให้ตน เพื่อแทนใจ ขอให้นายเส็งอย่าโมโห',
          imageName: 'question_5',
          answerList: [
            {
              label: 'เอ็งปัญญานิ่ม หิวข้าวมิได้หิวดอกไม้',
              point: 3
            },
            {
              label: 'ขอบใจแต่ข้ามิอยากได้',
              point: 2
            },
            {
              label: 'รู้หรือไม่พวงมาลัยมันกินมิได้',
              point: 1
            }
          ]
        }
      ],
      questionCount: 0,
      isShowQuestion: true,
      answerPoint: 0,
      isResultModalOpen: false
    }
  },
  computed: {
    currentQuestion() {
      return this.questionList[this.questionCount]
    }
  },
  mounted() {
    this.updateUserPoint(0)
  },
  methods: {
    ...mapMutations('user', {
      updateUserPoint: 'updateUserPoint'
    }),
    submitAnswer(point) {
      if (this.questionCount < 4) {
        this.isShowQuestion = !this.isShowQuestion
        this.answerPoint += point
        this.$refs.questionImage.addEventListener('transitionend', this.afterQuestionDisappear)
      } else {
        this.updateUserPoint(this.answerPoint)
        this.isResultModalOpen = true
      }
    },
    afterQuestionDisappear() {
      this.$refs.questionImage.removeEventListener('transitionend', this.afterQuestionDisappear)
      this.questionCount += 1
      setTimeout(() => {
        this.isShowQuestion = true
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 1920px) {
  .quiz-description {
    height: 22vh;
    font-size: 1.5vw;
  }
  .quiz-question {
    font-size: 2vw;
  }
  .quiz-question-container {
    left: 5vw;
    top: 0;
  }
  .answer-button-container {
    height: 10vh;
  }
}

@media (min-width: 1920px) {
  .quiz-description {
    height: 280px;
    font-size: 27px;
  }
  .quiz-question {
    font-size: 39px;
  }
  .quiz-question-container {
    left: 8vw;
    top: 0;
  }
  .answer-button-container {
    height: 80px;
  }
}

.quiz-main-page {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/images/quiz/quiz_main_background.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.quiz-brand-logo {
  position: absolute;
  top: 2vh;

  &:hover {
    cursor: pointer;
  }
}

.quiz-container {
  position: absolute;
  width: 100vw;
  max-width: 2100px;
  color: white;

  .quiz-image-container {
    position: relative;
    width: 28vw;
    height: 60vh;
    max-width: 900px;
    max-height: 650px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      height: 100%;
      transition: all .5s ease-out;
    }

    &.is-show {
      img {
        top: 0;
      }
    }
    &.is-hide {
      img {
        top: 100%;
      }
    }
  }

  .quiz-question-container {
    position: absolute;
    width: 28vw;
    max-width: 400px;
    height: 100%;

    .is-show {
      p {
        top: 0%;
      }
    }
    .is-hide {
      p {
        top: 110%;
      }
    }

    .quiz-description {
      position: relative;
      width: 100%;
      margin-top: 15vh;
      flex-shrink: 0;
      flex-grow: 1;
      overflow: hidden;

      p {
        position: absolute;
        width: 100%;
        transition: all .4s ease-out;
      }
    }
    
    .quiz-question {
      position: relative;
      width: 100%;
      height: 50px;
      font-weight: 700;
      flex-shrink: 0;
      flex-grow: 1;
      overflow: hidden;
      transition: all .2s ease-out;

      p {
        position: absolute;
        width: 100%;
        transition: all .2s ease-out;
      }
    }
  }

  .quiz-answer-container {
    position: absolute;
    margin-top: 12vh;
    top: 0;
    right: 7vw;
    width: 28vw;
    max-width: 500px;
    height: 100%;

    .answer-button-container {
      position: relative;
      margin-top: 15px;
      width: 100%;
      overflow: hidden;
    }

    .answer-button {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      color: white;
      background-color: transparent;
      border-color: white;
      border-radius: 35px;
      transition: all .2s ease-out;

      &:hover {
        background-color: rgba($color: white, $alpha: .3);
        border-color: white;
      }

      &.is-show {
        top: 0;
      }
      &.is-hide {
        top: 105%;
      }
    }
  }
}
</style>
