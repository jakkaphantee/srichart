<template>
  <div
    id="content-intro-page"
    class="content-intro-page"
    :class="isScrollEnable ? 'content-enable-scroll' : ''"
  >
    <div
      class="content-text"
      id="content-text-1"
    >
      <img :src="require('@/assets/images/content-intro/text_icon.png')" />
      <h1>
        ภรรยาที่ดีต้องเชื่อฟังสามีเท่านั้น
      </h1>
      <img :src="require('@/assets/images/content-intro/text_icon.png')" />
    </div>
    <!-- <div class="content-text-container">
      <div
        class="content-text my-5"
        :id="content.id"
        v-for="content in scrollTextList"
        :key="content.text"
      >
        <img :src="require('@/assets/images/content-intro/text_icon.png')" />
        <h1>
          {{ content.text }}
        </h1>
        <img :src="require('@/assets/images/content-intro/text_icon.png')" />
      </div>
    </div> -->
  </div>
</template>

<script>
import scrollEventCheck from '@/helpers/scrollEventCheck.js'

export default {
  data() {
    return {
      scrollTextList: [
        {
          id: 'content-text-1',
          text: 'ภรรยาที่ดีต้องเชื่อฟังสามีเท่านั้น'
        },
        {
          id: 'content-text-2',
          text: 'สเน่ห์หญิงไทยอยู่ที่ปลายจวัก'
        },
        {
          id: 'content-text-3',
          text: 'งานบ้านงานเรือนของเรื่องของผู้หญิง'
        },
        {
          id: 'content-text-4',
          text: 'กุลสตรีต้องเรียบร้อย พูดน้อย อ่อนหวาน'
        },
        {
          id: 'content-text-5',
          text: 'สามีเป็นช้างเท้าหน้าภรรยาเป็นช้างเท้าหลัง'
        }
      ],
      contentBoundingRect: null,
      isScrollEnable: false,
      scrollPoint: -60,
      test: false
    }
  },
  computed: {
    contentTextStyle() {
      return `bottom: ${this.scrollPoint}vh;`
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollListener() {
      const contentContainer = document.querySelector('.content-intro-page')
      const result = scrollEventCheck.isInViewport(contentContainer)
      if (result) {
        const contentIntroPage = document.getElementById('content-intro-page')
        contentIntroPage.focus()
        this.isScrollEnable = true
        document.addEventListener('wheel', this.contentTextAnimate)
        this.$emit('setScrollLock', true)
      } else {
        this.isScrollEnable = false
        document.removeEventListener('wheel', this.contentTextAnimate)
        this.$emit('setScrollLock', false)
      }
    },
    contentTextAnimate($event) {
      const direction = scrollEventCheck.checkScrollDirection($event)
      if (direction === 'up') {
        this.scrollPoint -= 1
      } else {
        this.scrollPoint += 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$font-color: #D11111;

.content-intro-page {
  position: relative;
  background-color: black;
  color: $font-color;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  &.content-enable-scroll {
    overflow: scroll;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
}

.content-text-container {
  transform: rotate(270deg);
}

.content-text {
  width: fit-content;

  &.paused-animate {
    animation-play-state: paused !important;
  }

  &.running-animate {
    animation-play-state: running !important;
  }

  &#content-text-1 {
    position: absolute;
    bottom: -60vh;
    left: -25vw;
    transform: rotate(270deg);
  }

  img {
    top: 50%;
    transform: translateY(-30%);
    display: inline;
    width: 3vw;
    max-width: 60px;
  }

  h1 {
    display: inline;
    font-family: '9_our_king';
    font-weight: 700;
    font-size: 5vw;
  }
}
</style>
