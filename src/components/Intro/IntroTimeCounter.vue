<template>
  <div class="timer-container" align="left">
    <img class="timer-icon" :src="require('@/assets/images/intro/timer_icon.svg')" />
    <h1>
      {{ thaiNumberConverted }}
    </h1>
    <div
      v-if="!isIntroEnd"
      class="start-button"
      align="center"
      @click="startTimer()"
    >
      <strong>กดเพื่อเริ่ม</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroTimeCounter',
  props: {
    isUserPerformAnyAction: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timer: null,
      counter: '',
      isIntroEnd: false
    }
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
    startTimer() {
      this.isIntroEnd = true
      this.counter = 60
      this.timer = setInterval(this.timerCallback, 1000)
      this.$emit('introEnd')
    },
    timerCallback() {
      this.counter -= 1
      if (this.counter <= 30 && this.isUserPerformAnyAction) {
        console.log('in')
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
  .start-button {
    font-size: 3vw;
  }
}
@media (min-width: 1920px) {
  .timer-container h1 {
    font-size: 62px;
  }
  .start-button {
    font-size: 62px;
  }
}

.timer-container {
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  .timer-icon {
    width: 10vw;
    max-width: 220px;
    max-height: 220px;
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

.start-button {
  position: absolute;
  top: 120%;
  width: 150%;
  color: white;
  white-space: pre;
  border-bottom: 3px solid white;
  &:hover {
    cursor: pointer;
  }
}
</style>
