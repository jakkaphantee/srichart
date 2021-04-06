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
  display: inline;
  width: 140px;
  height: 140px;
  background-color: black;
  border: none;
  color: white;
  font-size: 54px;
  margin-right: 100px;
}
</style>
