<template>
  <div
    id="content-intro-page"
    class="content-intro-page"
  >
    <div class="content-text-container">
      <div
        v-for="content in scrollTextList"
        :key="content.id"
        :id="content.id"
        class="content-text"
        :style="content.style"
      >
        <img :src="require('@/assets/images/content-intro/text_icon.png')" />
        <strong>
          {{ content.text }}
        </strong>
        <img :src="require('@/assets/images/content-intro/text_icon.png')" />
      </div>
    </div>
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
          text: 'ภรรยาที่ดีต้องเชื่อฟังสามีเท่านั้น',
          style: 'bottom: -125vh;'
        },
        {
          id: 'content-text-2',
          text: 'สเน่ห์หญิงไทยอยู่ที่ปลายจวัก',
          style: 'top: -5vh;'
        },
        {
          id: 'content-text-3',
          text: 'งานบ้านงานเรือนของเรื่องของผู้หญิง',
          style: 'bottom: -185vh;'
        },
        {
          id: 'content-text-4',
          text: 'กุลสตรีต้องเรียบร้อย พูดน้อย อ่อนหวาน',
          style: 'top; 5vh;'
        },
        {
          id: 'content-text-5',
          text: 'สามีเป็นช้างเท้าหน้าภรรยาเป็นช้างเท้าหลัง',
          style: 'bottom; -165vh;'
        }
      ],
      windowHeightEdge: 0,
      currentComponentTopRect: null,
      scrollDirection: '',
      textPositions: {
        first: -125,
        second: 0,
        third: -185,
        fifth: -165
      }
    }
  },
  computed: {
    isPageInViewport() {
      return (this.currentComponentTopRect > 0) && (this.currentComponentTopRect < this.windowHeightEdge)
    }
  },
  watch: {
    currentComponentTopRect() {
      if (this.isPageInViewport) {
        const pixelChange = this.windowHeightEdge - this.currentComponentTopRect
        const changeInPercent = (pixelChange * 100) / window.innerHeight
        if (changeInPercent === 100) {
          this.textPositions = {
            first: 0,
            second: 105,
            third: 20,
            forth: 95,
            fifth: 0
          }
        } else {
          this.textPositions.first = this.calculateNewPosition(changeInPercent, 125)
          this.textPositions.second = changeInPercent + 5
          this.textPositions.third = this.calculateNewPosition(changeInPercent, 185) + 20
          this.textPositions.forth = changeInPercent - 5
          this.textPositions.fifth = this.calculateNewPosition(changeInPercent, 165)
        }
        this.scrollTextList[0].style = `bottom: ${this.textPositions.first}vh;`
        this.scrollTextList[1].style = `top: ${this.textPositions.second}vh;`
        this.scrollTextList[2].style = `bottom: ${this.textPositions.third}vh;`
        this.scrollTextList[3].style = `top: ${this.textPositions.forth}vh;`
        this.scrollTextList[4].style = `bottom: ${this.textPositions.fifth}vh;`
      }
    }
  },
  mounted() {
    this.windowHeightEdge = window.innerHeight * 2
    document.addEventListener('wheel', this.wheelListener)
  },
  methods: {
    wheelListener($event) {
      const contentFirstPageRect = document.getElementById('content-first-page').getBoundingClientRect()
      this.currentComponentTopRect = contentFirstPageRect.top
      this.scrollDirection = scrollEventCheck.checkScrollDirection($event)
    },
    calculateNewPosition(changeInPercent, defaultPosition) {
      const positionChange = (changeInPercent * defaultPosition) / 100
      const newPosition = positionChange - defaultPosition
      return newPosition
    }
  },
  beforeDestroy() {
    document.removeEventListener('wheel', this.wheelListener)
  }
}
</script>

<style lang="scss" scoped>
$font-color: #D11111;

@media (max-width: 1920px) {
  .content-text-container {
    font-size: 4vw;
  }
}

@media (min-width: 1920px) {
  .content-text-container {
    font-size: 80px;
  }
}

.content-intro-page {
  position: relative;
  background-color: black;
  color: $font-color;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}

.content-text-container {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1920px;
}

.content-text {
  width: fit-content;
  height: fit-content;
  padding-left: 60px;
  padding-right: 60px;

  &#content-text-1 {
    position: absolute;
    left: 18vw;
    transform: rotate(270deg);
    transform-origin: left;
  }

  &#content-text-2 {
    position: absolute;
    left: 34vw;
    transform: rotate(270deg);
    transform-origin: left;
  }

  &#content-text-3 {
    position: absolute;
    left: 50vw;
    transform: rotate(270deg);
    transform-origin: left;
  }

  &#content-text-4 {
    position: absolute;
    left: 64vw;
    transform: rotate(270deg);
    transform-origin: left;
  }

  &#content-text-5 {
    position: absolute;
    left: 85vw;
    transform: rotate(270deg);
    transform-origin: left;
  }

  img {
    margin-top: 30px;
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
