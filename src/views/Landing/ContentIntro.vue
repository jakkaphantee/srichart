<template>
  <div
    ref="contentIntroPage"
    id="content-intro-page"
    class="content-intro-page"
  >
    <div
      ref="contentTextContainer"
      class="content-text-container"
      :class="isScrollEnable ? '' : 'stop-scroll'"
    >
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
export default {
  props: {
    isScrollEnable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scrollTextList: [
        {
          id: 'content-text-1',
          text: 'ภรรยาที่ดีต้องเชื่อฟังสามีเท่านั้น',
          style: ''
        },
        {
          id: 'content-text-2',
          text: 'สเน่ห์หญิงไทยอยู่ที่ปลายจวัก',
          style: 'top: -20%;'
        },
        {
          id: 'content-text-3',
          text: 'งานบ้านงานเรือนของเรื่องของผู้หญิง',
          style: ''
        },
        {
          id: 'content-text-4',
          text: 'กุลสตรีต้องเรียบร้อย พูดน้อย อ่อนหวาน',
          style: 'top: -20%;'
        },
        {
          id: 'content-text-5',
          text: 'สามีเป็นช้างเท้าหน้าภรรยาเป็นช้างเท้าหลัง',
          style: ''
        }
      ]
    }
  },
  watch: {
    isScrollEnable(newValue) {
      console.log(newValue)
      if (newValue) {
        this.$refs.contentTextContainer.addEventListener('wheel', this.scrollListener)
      }
    }
  },
  mounted() {
    this.$refs.contentTextContainer.addEventListener('wheel', this.scrollListener)
  },
  methods: {
    scrollListener() {
      const contentText3 = document.getElementById('content-text-3').getBoundingClientRect()
      this.calculatePosition(contentText3.top)
      console.log(contentText3.top)
      if (contentText3.top < -1980) {
        this.$emit('stopScroll')
        this.$refs.contentTextContainer.scrollBy(0, -5)
      }
    },
    calculatePosition(staticPosition) {
      const percentLeft = 100 - (staticPosition * 100 / window.innerHeight)
      this.scrollTextList[1].style = `top: ${percentLeft * 1.9}%;`
      this.scrollTextList[3].style = `top: ${percentLeft * 2.1}%;`
    }
  },
  beforeDestroy() {
    document.removeEventListener('wheel', this.scrollListener)
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
  overflow: hidden;
}

.content-text-container {
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 1920px;
  overflow: scroll;
  &.stop-scroll {
    overflow: hidden;
  }
}

.content-text {
  width: fit-content;
  height: fit-content;

  &#content-text-1 {
    position: absolute;
    bottom: -125%;
    left: 15%;
    transform: rotate(270deg);
    transform-origin: left;
  }

  &#content-text-2 {
    position: absolute;
    left: 34%;
    transform: rotate(270deg);
    transform-origin: left;
  }

  &#content-text-3 {
    position: absolute;
    bottom: -175%;
    left: 50%;
    transform: rotate(270deg);
    transform-origin: left;
  }

  &#content-text-4 {
    position: absolute;
    left: 69%;
    transform: rotate(270deg);
    transform-origin: left;
  }

  &#content-text-5 {
    position: absolute;
    bottom: -225%;
    left: 85%;
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
