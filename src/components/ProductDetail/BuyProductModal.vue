<template>
  <b-modal
    v-model="isModalOpen"
    size="lg"
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
          :src="require('@/assets/images/brand_background_pattern_opacity20.png')"
        />
        <img
          class="product-icon mt-5"
          width="50px"
          :src="require(`@/assets/images/product-detail/${productIconName}_icon.png`)"
        />
        <img
          class="modal-close-button"
          :src="require('@/assets/images/icons/cross.svg')"
          @click="$emit('closeModal')"
        />
        <div class="buy-product-modal-body mt-3 mr-5 ml-5 mb-5">
          <p>
            {{ modalText }}
          </p>
        </div>
        <img
          class="brand-background-pattern"
          :src="require('@/assets/images/brand_background_pattern_opacity20.png')"
        />
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: {
    isModalOpen: {
      type: Boolean,
      default: false
    },
    modalText: {
      type: String,
      default: ''
    },
    productIconName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.brand-background-pattern {
  width: 100%;
}
.buy-product-modal-body {
  p {
    font-size: 28px;
  }
}
.modal-close-button {
  position: absolute;
  top: 4%;
  right: 2%;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
}
</style>
