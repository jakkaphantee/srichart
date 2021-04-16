<template>
  <div class="content-brief-page">
    <div
      class="content-brief-text"
      :class="isPageInViewport ? 'show-brief-text' : ''"
      align="center"
    >
      <div>
        <p>ความเป็นชายมิหายเพราะงานบ้าน</p>
      </div>
      <div>
        <p>โปรดอย่าคร้านว่ามิใช่หน้าที่</p>
      </div>
      <div>
        <p>แล้วผลักไสงานนั้นให้สตรี</p>
      </div>
      <div>
        <p>คู่ที่ดีต้องมีความเท่าเทียม</p>
      </div>
    </div>
  </div>
</template>

<script>
import scrollEventCheck from '@/helpers/scrollEventCheck'

export default {
  name: 'ContentBrief',
  data() {
    return {
      isPageInViewport: false
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollListener() {
      const contentBriefContainer = document.querySelector('.content-brief-page')
      const isInViewport = scrollEventCheck.isEnterViewport(contentBriefContainer)
      if (isInViewport) {
        this.isPageInViewport = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$theme-red: #D11111;
$font-size-responsive: 3vw;
$font-size-fixed: 65px;

@media (max-width: 1920px) {
  .content-brief-text {
    font-size: $font-size-responsive;
    div {
      height: 3.5vw;
    }
  }
}

@media (min-width: 1920px) {
  .content-brief-text {
    font-size: $font-size-fixed;
    div {
      height: 90px;
    }
  }
}

.content-brief-page {
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/images/content-brief/content_brief_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  align-content: center;
}

.content-brief-text {
  position: relative;
  margin: auto;
  width: fit-content;
  height: fit-content;
  color: $theme-red;
  font-weight: 600;
  overflow: hidden;

  div {
    position: relative;
    // display: flex;
    // justify-content: center;
    overflow: hidden;
    margin-bottom: 20px;

    p {
      margin-top: 100px;
      transition: margin-top .8s ease-out;
    }
  }

  &.show-brief-text {
    p {
      margin-top: 0px;
    }
  }
}
</style>
