<template>
  <div class="home-page">
    <img
      class="home-brand-logo"
      :src="require('@/assets/images/home/home_brand_logo.png')"
    />
    <img
      class="text-logo-image"
      :src="require('@/assets/images/home/home_text_logo.png')"
    />
    <img class="swing-left-head" :src="require('@/assets/images/home/swing_left_head.png')" />
    <img class="swing-left-foot" :src="require('@/assets/images/home/swing_left_foot.png')" />
    <img class="swing-right-head" :src="require('@/assets/images/home/swing_right_head.png')" />
    <img class="swing-right-foot" :src="require('@/assets/images/home/swing_right_foot.png')" />
    <div class="bottom-navigation-container">
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
$swing-duration: 2.7s;

.home-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/images/home/home_background.png');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
}
.home-brand-logo {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 7%;
  max-width: 140px;
  margin-top: 15px;
  z-index: 10;
}

.swing-left-head {
  position: absolute;
  top: 40%;
  left: 20px;
  width: 5vw;
  max-width: 100px;
  transform: translateY(-50%);
}

.swing-left-foot {
  position: absolute;
  width: 3vw;
  margin-top: 10px;
  transform-origin: top;
  max-width: 55px;
  animation: $swing-duration swing-start-left infinite ease-in-out;

  @keyframes swing-start-left {
    0% {
      top: 44%;
      left: 10px;
      transform: rotate(30deg);
    }
    25% {
      top: 45%;
    }
    50% {
      top: 44%;
      left: 68px;
      transform: rotate(-30deg);
    }
    75% {
      top: 45%;
    }
    100% {
      top: 44%;
      left: 10px;
      transform: rotate(30deg);
    }
  }
}

.swing-right-head {
  position: absolute;
  top: 40%;
  right: 20px;
  width: 5vw;
  max-width: 100px;
  transform: translateY(-50%);
}

.swing-right-foot {
  position: absolute;
  width: 3vw;
  max-width: 55px;
  margin-top: 10px;
  transform-origin: top;
  animation: $swing-duration swing-start-right infinite ease-in-out;

  @keyframes swing-start-right {
    0% {
      top: 44%;
      right: 10px;
      transform: rotate(-30deg);
    }
    25% {
      top: 45%;
    }
    50% {
      top: 44%;
      right: 68px;
      transform: rotate(30deg);
    }
    75% {
      top: 45%;
    }
    100% {
      top: 44%;
      right: 10px;
      transform: rotate(-30deg);
    }
  }
}

.text-logo-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  max-width: 1150px;
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
