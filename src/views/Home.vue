<template>
  <div class="home-page">
    <video
      class="home-background-video"
      src="../assets/images/home/home_video_background.mp4"
      autoplay
      muted
      loop
    />
    <img
      class="home-brand-logo"
      src="../assets/images/home/home_brand_logo.png"
    />
    <img
      class="text-logo-image"
      src="../assets/images/home/home_text_logo.png"
    />
    <div
      class="bottom-navigation-container"
    >
      <button
        v-for="bottomButton in bottomNavigationList"
        :key="bottomButton.label"
        class="text-button home-text-button mx-5"
      >
        <strong>
          {{ bottomButton.label }}
        </strong>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('preference', {
      bottomNavigationList: state => state.menuList
    })
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 1920px;
  max-height: 1080px;
}
.home-background-video {
  position: relative;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.home-brand-logo {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 7%;
  margin-top: 15px;
  z-index: 10;
}
.text-logo-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  z-index: 10;
}
.bottom-navigation-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: fit-content;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
}
.home-text-button {
  color: black;
  font-family: 'Krub';
  font-size: 33px;
}
</style>
