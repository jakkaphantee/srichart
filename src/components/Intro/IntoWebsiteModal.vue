<template>
  <b-modal
    v-model="isModalOpen"
    size="xl"
    centered
    hide-header
    hide-footer
    hide-backdrop
    no-close-on-backdrop
    no-fade
  >
    <template #default>
      <div align="center">
        <img
          class="brand-background-pattern"
          src="../../assets/images/brand_background_pattern.png"
        />
        <div class="into-web-modal-body my-5">
          <p v-if="isUserPerformAnyAction">
            ท่านมีความเสี่ยงที่จะมีชุดความคิดชายเป็นใหญ่ !!!
          </p>
          <button
            class="text-button into-website-button"
            :class="isUserPerformAnyAction ? 'mt-5' : ''"
            @click="changeUserPage('home')"
          >
            โปรดเข้าสู่เว็บไซต์
          </button>
        </div>
        <img
          class="brand-background-pattern"
          src="../../assets/images/brand_background_pattern.png"
        />
      </div>
    </template>
  </b-modal>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'IntoWebsiteModal',
  props: {
    isModalOpen: {
      type: Boolean,
      default: false
    },
    isUserPerformAnyAction: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapMutations('user', {
      changeUserPage: 'changeUserPage'
    })
  }
}
</script>

<style lang="scss" scoped>
.brand-background-pattern {
  width: 100%;
  opacity: 20%; 
}

.into-web-modal-body {
  p {
    font-size: 36px;
  }
}

.into-website-button {
  color: white;
  font-size: 48px;
  font-weight: 600;
  border-bottom: 2px solid white;
}
</style>
