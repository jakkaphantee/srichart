<template>
  <div class="intro-page" align="left">
    <div class="content-left">
      <img
        :src="require('@/assets/images/intro/woman_sleep.png')"
        :class="actionType === '' ? 'is-primary' : 'is-secondary'"
      />
      <img
        :src="require('@/assets/images/intro/woman_awake.png')"
        :class="actionType !== '' ? 'is-primary' : 'is-secondary'"
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
      actionType: '',
      actionTimeout: null
    }
  },
  methods: {
    ...mapMutations('preference', {
      changeUserPage: 'changeUserPage'
    }),
    changeImageType(actionType) {
      this.isUserPerformAnyAction = true
      this.actionType = actionType
      clearTimeout(this.actionTimeout)
      this.actionTimeout = setTimeout(() => {
        this.actionType = ''
      }, 1200)
    },
    showEnterSiteModal() {
      this.isIntoWebsiteModalOpen = true
    }
  }
}
</script>

<style lang="scss" scoped>
$themed-red: #8D0000;

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
}

.content-left {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: $themed-red;
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
