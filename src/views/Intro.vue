<template>
  <div
    class="intro-page"
    :class="[
      isHandCursor ? 'show-hand-cursor' : '',
      isFeetCursor ? 'show-feet-cursor' : ''
    ]"
    align="left"
  >
    <div class="content-left">
      <img
        id="woman-sleep"
        :src="require('@/assets/images/intro/woman_sleep.png')"
        :class="!isWomanWake ? 'is-primary' : 'is-secondary'"
      />
      <img
        :src="require('@/assets/images/intro/woman_awake.png')"
        :class="isWomanWake ? 'is-primary' : 'is-secondary'"
      />
    </div>
    <div class="content-right">
      <div class="pl-5">
        <IntroTimeCounter
          v-bind="{
            isUserPerformAnyAction
          }"
          @timesUp="showEnterSiteModal()"
        />
        <div class="intro-head-text">
          {{ introHeadText }}
        </div>
      </div>
      <div class="mt-3" align="left">
        <div class="intro-body-text">
          {{ introBodyText }}
          <div id="intro-footer">
            {{ introFooterText }}
          </div>
        </div>
      </div>
      <button
        class="text-button skip-button"
        @click="changeUserPage('home')"
      >
        ข้าม
      </button>
    </div>
    <ActionButton @changeImageType="changeImageType" />
    <IntoWebsiteModal
      v-bind="{
        isModalOpen: isIntoWebsiteModalOpen,
        isUserPerformAnyAction
      }"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import IntroTimeCounter from '@/components/Intro/IntroTimeCounter.vue'
import ActionButton from '@/components/Intro/ActionButton.vue'
import IntoWebsiteModal from '@/components/Intro/IntoWebsiteModal.vue'

export default {
  name: 'Intro',
  components: {
    IntroTimeCounter,
    ActionButton,
    IntoWebsiteModal
  },
  data() {
    return {
      introHeadText: 'ปลุกหญิงสาวผู้นี้\nภายใน ๖๐ วินาที',
      introBodyText: 'หลายๆ คนบอกว่าความสุข\nของผู้หญิงคือการตื่นเช้ามา\nทำอาหารอร่อยๆ ให้คนรัก',
      introFooterText: 'จริงฤา??',
      isUserPerformAnyAction: false,
      isIntoWebsiteModalOpen: false,
      actionTimeout: null,
      isHandCursor: false,
      isFeetCursor: false,
      isWomanWake: false
    }
  },
  computed: {
    isSpecialCursorOn() {
      return this.isHandCursor || this.isFeetCursor
    }
  },
  watch: {
    isSpecialCursorOn(newValue) {
      if (newValue) {
        document.addEventListener('mousedown', this.onSpecialCursorClick)
      } else {
        document.removeEventListener('mousedown', this.onSpecialCursorClick)
      }
    }
  },
  methods: {
    ...mapMutations('preference', {
      changeUserPage: 'changeUserPage'
    }),
    changeImageType(actionType) {
      this.isUserPerformAnyAction = true
      switch (actionType) {
        case 'hand': {
          this.isHandCursor = true
          this.isFeetCursor = false
          break
        }
        case 'feet': {
          this.isHandCursor = false
          this.isFeetCursor = true
          break
        }
        default: {
          clearTimeout(this.actionTimeout)
          this.isWomanWake = true
          this.actionTimeout = setTimeout(() => {
            this.isWomanWake = false
          }, 1200)
          break
        }
      }
    },
    showEnterSiteModal() {
      this.isIntoWebsiteModalOpen = true
    },
    onSpecialCursorClick($event) {
      const id = $event.target.id
      this.isHandCursor = false
      this.isFeetCursor = false
      if (id === 'woman-sleep') {
        const audio = new Audio(require('@/assets/sound/intro_woman_sound.mp3'))
        audio.play()
        clearTimeout(this.actionTimeout)
        setTimeout(() => {
          this.isWomanWake = true
          this.actionTimeout = setTimeout(() => {
            this.isWomanWake = false
          }, 1200)
        }, 300)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$themed-red: #8D0000;
$themed-dark: #1d1717;

@media (max-width: 1920px) {
  .intro-head-text {
    font-size: 4vw;
  }
  .intro-body-text {
    font-size: 1.5vw;
    margin-left: 30%;
    
    #intro-footer {
      font-size: 3vw;
    }
  }
}

@media (min-width: 1920px) {
  .intro-head-text {
    font-size: 72px;
  }
  .intro-body-text {
    font-size: 32px;
    margin-left: 300px;

    #intro-footer {
      font-size: 62px;
    }
  }
}

.intro-page {
  position: relative;
  background-image: url('../assets/images/intro/intro_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  &.show-hand-cursor {
    cursor: url('../assets/images/intro/hand_cursor.png'), auto;
  }
  &.show-feet-cursor {
    cursor: url('../assets/images/intro/feet_cursor.png'), auto;
  }
}

.content-left {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: $themed-dark;
  width: 52.5%;
  height: 100%;

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    border-right: 4px solid $themed-red;

    &.is-primary {
      z-index: 5;
    }

    &.is-secondary {
      z-index: 4;
    }
  }
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
  position: absolute;
  top: 11vh;
  left: 13vw;
  color: white;
  font-weight: 600;
  white-space: pre-line;
  line-height: 8vh;
}

.intro-body-text {
  width: fit-content;
  white-space: pre-line;
  text-align-last: left;
  margin-top: 10vh;
  margin-left: 16vw;
  
  #intro-footer {
    font-weight: 600;
  }
}

.skip-button {
  position: absolute;
  color: white;
  bottom: 0;
  right: 0;
  margin-right: 3%;
  margin-bottom: 3%;
}
</style>
