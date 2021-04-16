<template>
  <div class="timer-container" align="left">
    <img class="timer-icon" src="../../assets/images/intro/timer_icon.svg" />
    <h1>
      {{ thaiNumberConverted }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    isUserPerformAnyAction: {
      type: Boolean,
      default: false
    }
  },
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
      if (this.counter <= 30 && this.isUserPerformAnyAction) {
        this.stopTimeInterval()
      } else if (this.counter === 0) {
        this.stopTimeInterval()
      }
    },
    stopTimeInterval() {
      clearInterval(this.timer)
      this.$emit('timesUp')
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 1920px) {
  .timer-container h1 {
    font-size: 3vw;
  }
}
@media (min-width: 1920px) {
  .timer-container h1 {
    font-size: 62px;
  } 
}

.timer-container {
  position: relative;
  width: fit-content;
  height: fit-content;
  margin-top: 100px;

  .timer-icon {
    width: 10vw;
    max-width: 210px;
    max-height: 210px;
  }
  
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: '9_our_king';
    font-weight: 700;
    color: white;
  }
}
</style>
