<template>
  <div class="intro-page">
    <div class="content-left">
      <div>
        123
      </div>
    </div>
    <div class="content-right">
      <div>
        <div class="pl-5">
          <IntroTimeCounter />
          <div class="intro-head-text">
            <strong>
              {{ introHeadText }}
            </strong>
          </div>
        </div>
        <div class="mt-5" align="center">
          <div class="intro-body-text">
            {{ introBodyText }}
            <div id="intro-footer">
              {{ introFooterText }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IntroTimeCounter from '@/components/Intro/IntroTimeCounter.vue'

export default {
  name: 'Intro',
  components: {
    IntroTimeCounter
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
  background-image: url('../assets/images/intro/intro_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
}

.content-left {
  position: relative;
  display: inline-grid;
  background-color: $themed-red;
  width: 53%;
  height: 100%;
}
.content-right { 
  position: relative;
  display: inline-grid;
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
  
  #intro-footer {
    font-size: 48px;
    font-weight: 600;
  }
}
</style>
