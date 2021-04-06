<template>
  <div class="timer-container mt-5 pt-5" align="left">
    <img class="timer-icon" src="../../assets/images/intro/timer_icon.svg" />
    <div class="timer-text">
      {{ thaiNumberConverted }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      counter: 60
    }
  },
  mounted() {
    // this.timer = setInterval(this.timerCallback, 1000)
  },
  computed: {
    thaiNumberConverted() {
      const thaiNumbers = {
        '0': '๐',
        '1': '๑',
        '2': '๒',
        '3': '๓',
        '4': '๔',
        '5': '๕',
        '6': '๖',
        '7': '๗',
        '8': '๘',
        '9': '๙'
      }
      const number = `${this.counter}`
      const splitedNumber = number.split('')
      let convertedNumber = ''
      splitedNumber.map(num => {
        convertedNumber = convertedNumber + thaiNumbers[num]
      })
      return convertedNumber
    }
  },
  methods: {
    timerCallback() {
      this.counter -= 1
      if (this.counter === 0) {
        clearInterval(this.timer)
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.timer-container {
  position: relative;
  width: fit-content;
  height: fit-content;

  .timer-icon {
    width: 210px;
    height: 210px;
  }
  
  .timer-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -25%);
    font-family: '9_our_king';
    font-size: 72px;
    color: white;
  }
}
</style>
