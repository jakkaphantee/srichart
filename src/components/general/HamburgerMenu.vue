<template>
  <div>
    <div class="hamburger-icon" @click="openMenu()">
      <img src="../../assets/images/icons/hamburger.svg" />
    </div>
    <div
      class="hamburger-overlay-menu"
      :class="isMenuOpen ? 'overlay-opened' : ''"
    >
      <img
        class="overlay-close-button"
        src="../../assets/images/icons/cross.svg"
        @click="closeMenu()"
      />
      <div class="overlay-menu-container">
        <div
          v-for="menu in menuList"
          :key="menu.label"
          align="center"
        >
          <div class="my-2">
            <img src="../../assets/images/icons/diamond_rectangle.svg" />
          </div>
          <button
            class="text-button overlay-menu-button"
            @click="closeMenu(); openPage(menu.to)"
          >
            {{ menu.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  computed: {
    ...mapState('preference', {
      menuList: state => state.menuList
    })
  },
  methods: {
    ...mapMutations('preference', {
      changeUserPage: 'changeUserPage',
      changeUserHomeComponent: 'changeUserHomeComponent'
    }),
    openMenu() {
      this.isMenuOpen = true
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    openPage(componentId) {
      this.changeUserPage('home')
      this.changeUserHomeComponent(componentId)
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger-icon {
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  margin-top: 35px;
  margin-left: 35px;
  z-index: 10;

  &:hover {
    cursor: pointer;
  }
}

.hamburger-overlay-menu {
  position: fixed;
  width: 100%;
  height: 100%;
  left: -100%;
  background-color: black;
  z-index: 11;
  transition: left .3s;

  &.overlay-opened {
    left: 0;
  }

  .overlay-close-button {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    margin-top: 35px;
    margin-right: 35px;

    &:hover {
      cursor: pointer;
    }
  }
  
  .overlay-menu-container {
    position: absolute;
    width: 100%;
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.overlay-menu-button {
  font-family: '9_our_king';
  font-size: 68px;
  color: white;
}
</style>
