<template>
  <div class="action-button-container">
    <button
      class="action-button"
      @click="playMouthVideo()"
    >
      <img
        width="100%"
        :src="require('@/assets/images/intro/mouth.png')"
      />
      <video
        ref="mouthVideo"
        width="100%"
        :src="require('@/assets/images/intro/mouth_cooldown.mp4')"
      />
    </button>
    <button
      v-for="button in actionList"
      :key="button.label"
      class="action-button"
      @click="$emit('changeImageType', button.action)"
    >
      <img width="100%" :src="require(`@/assets/images/intro/${button.imageName}.png`)" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actionList: [
        {
          label: 'มือ',
          action: 'hand',
          imageName: 'hand'
        },
        {
          label: 'เท้า',
          action: 'feet',
          imageName: 'foot'
        }
      ]
    }
  },
  methods: {
    playMouthVideo() {
      this.$refs.mouthVideo.play()
      setTimeout(() => {
        this.$emit('changeImageType', 'mouth')
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.action-button-container {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: fit-content;
  z-index: 10;
}

.action-button {
  position: relative;
  width: 9vw;
  height: 9vw;
  max-width: 150px;
  max-height: 150px;
  background-color: black;
  border: 1px solid transparent;
  border-radius: 5px;
  color: white;
  margin-right: 5vw;
  margin-bottom: 3.5vh;
  padding: 0;
  overflow: hidden;
  video {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
  }
}
</style>
