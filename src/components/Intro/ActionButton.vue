<template>
  <div class="action-button-container">
    <button
      v-for="button in actionList"
      :key="button.label"
      class="action-button"
      @click="$emit('changeImageType', button.action)"
    >
      {{ button.label }}
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
          action: 'hand'
        },
        {
          label: 'เท้า',
          action: 'feet'
        },
        {
          label: 'ปาก',
          action: 'mouth'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 1920px) {
  .action-button {
    width: 10vw;
    height: 10vw;
    font-size: 2.5vw;
  }
}

@media (min-width: 1920px) {
  .action-button {
    width: 150px;
    height: 150px;
    font-size: 48px;
  }
}

.action-button-container {
  position: absolute;
  left: 50%;
  right: 49%;
  bottom: 0;
  width: fit-content;
  height: fit-content;
  margin-bottom: 40px;
  z-index: 10;
}

.action-button {
  max-width: 150px;
  max-height: 150px;
  background-color: black;
  border: none;
  color: white;
  margin-right: 100px;
}
</style>
