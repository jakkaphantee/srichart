<template>
  <b-modal
    v-model="isModalOpen"
    size="xl"
    centered
    hide-header
    hide-footer
    hide-backdrop
    no-close-on-backdrop
    no-fade
  >
    <template #default>
      <div align="center">
        <img
          class="brand-background-pattern"
          src="../../assets/images/brand_background_pattern_opacity20.png"
        />
        <div class="quiz-result-modal-body my-5 py-3">
          <p>
            {{ quizResultText }}
          </p>
          <button
            class="text-button quiz-product-button"
            @click="changeUserPage('product'); changeCurrentProductView()"
          >
            สินค้าที่จะช่วยท่าน
          </button>
        </div>
        <img
          class="brand-background-pattern"
          src="../../assets/images/brand_background_pattern_opacity20.png"
        />
      </div>
    </template>
  </b-modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'QuizResult',
  props: {
    isModalOpen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState('user', {
      userPoint: state => state.user.point
    }),
    quizResultText() {
      if (this.userPoint <= 7) {
        return 'ท่านเป็นคนที่มิยังไม่เข้าใจถึงจิตใจของสตรีดีพอ'
      } else if (this.userPoint <= 12) {
        return 'ท่านเป็นคนที่มิมีความอดทนเท่าใดนัก'
      } else {
        return 'ท่านเป็นคนที่ชอบใช้ความรุนแรงกับเพศหญิง'
      }
    },
    resultProduct() {
      if (this.userPoint <= 7) {
        return 'glove'
      } else if (this.userPoint <= 12) {
        return 'brush'
      } else {
        return 'handkerchief'
      }
    }
  },
  methods: {
    ...mapMutations('preference', {
      changeUserPage: 'changeUserPage',
      changeCurrentProductView: 'changeCurrentProductView'
    })
  }
}
</script>

<style lang="scss" scoped>
.brand-background-pattern {
  width: 100%;
}
.quiz-result-modal-body {
  p {
    font-size: 36px;
  }
}
.quiz-product-button {
  color: white;
  font-size: 48px;
  font-weight: 600;
  border-bottom: 2px solid white;
}
</style>
