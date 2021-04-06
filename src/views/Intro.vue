<template>
  <div class="intro-page">
    <div class="content-left">
    </div>
    <div class="content-right">
      <div class="pl-5">
        <IntroTimeCounter />
        <div class="intro-head-text">
          <strong>
            {{ introHeadText }}
          </strong>
        </div>
      </div>
      <div class="mt-5" align="left">
        <div class="intro-body-text">
          {{ introBodyText }}
          <div id="intro-footer">
            {{ introFooterText }}
          </div>
        </div>
      </div>
      <button class="text-button skip-button">
        ข้าม
      </button>
    </div>
    <ActionButton />
  </div>
</template>

<script>
import IntroTimeCounter from '@/components/Intro/IntroTimeCounter.vue'
import ActionButton from '@/components/Intro/ActionButton.vue'

export default {
  name: 'Intro',
  components: {
    IntroTimeCounter,
    ActionButton
  },
  data() {
    return {
      introHeadText: 'ปลุกหญิงสาวผู้นี้\nภายใน ๖๐ วินาที',
      introBodyText: 'หลายๆ คนบอกว่าความสุข\nของผู้หญิงคือการตื่นเช้ามา\nทำอาหารอร่อยๆ ให้คนรัก',
      introFooterText: 'จริงฤา??'
    }
  }
}
</script>

<style lang="scss" scoped>
$themed-red: #8D0000;

.intro-page {
  position: relative;
  background-image: url('../assets/images/intro/intro_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 100vw;
  min-height: 100vh;
}

.content-left {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: $themed-red;
  width: 53%;
  height: 100%;
}

.content-right {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 47%;
  height: 100%;
}

.intro-head-text {
  font-family: '9_our_king';
  font-size: 72px;
  color: black;
  white-space: pre-line;
  line-height: 80px;
}

.intro-body-text {
  width: fit-content;
  font-size: 28px;
  white-space: pre-line;
  text-align-last: left;
  margin-left: 30%;
  
  #intro-footer {
    font-size: 48px;
    font-weight: 600;
  }
}

.text-button {
  color: white;
  background-color: transparent;
  border: none;
  font-size: 24px;

  &.skip-button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 3%;
    margin-bottom: 3%;
  }
}
</style>
