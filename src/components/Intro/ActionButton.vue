<template>
  <div class="action-button-container">
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
          label: 'ปาก',
          action: 'mouth',
          imageName: 'mouth'
        },
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
  width: 9vw;
  height: 9vw;
  max-width: 150px;
  max-height: 150px;
  background-color: black;
  border: none;
  color: white;
  margin-right: 5vw;
  margin-bottom: 3.5vh;
  padding: 0;
}
</style>
