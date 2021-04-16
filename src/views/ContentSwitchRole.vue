<template>
  <div class="content-switch-role-page">
    <div class="content-switch-role-container">
      <div class="content-left">
        <h2
          id="head-primary"
          :class="currentPrimary ? 'is-primary' : 'is-secondary'"
          @click="currentPrimary = !currentPrimary"
        >
          บทบาท
        </h2>
        <h2
          id="head-secondary"
          :class="currentPrimary ? 'is-secondary' : 'is-primary'"
          @click="currentPrimary = !currentPrimary"
        >
          การสลับ
        </h2>
        <p>
          การสลับบทบาท นั้นคือการให้เหล่าชายฉกรรจ์
          มารับบทบาทเป็นแม่บ้าน แม่เรือน เพื่อให้เข้าใจ
          ถึงหัวอก หัวใจ ของสตรีไทยที่โดนกรอบสังคม
          กดดันให้รับภาระหน้าที่่นี้
        </p>
      </div>
      <div class="content-right">
        <h1>
          คอนเซปต์
        </h1>
        <img
          id="image-primary"
          :class="currentPrimary ? 'is-primary' : 'is-secondary'"
          :src="require('@/assets/images/content-switch-role/man_primary.png')"
        />
        <img
          id="image-secondary"
          :class="currentPrimary ? 'is-secondary' : 'is-primary'"
          :src="require('@/assets/images/content-switch-role/man_secondary.png')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentSwitchRole',
  data() {
    return {
      currentPrimary: true
    }
  }
}
</script>

<style lang="scss" scoped>
$theme-red: #d11111;
$transition-duration: .2s;

@media (max-width: 1920px) {
  .content-left {
    h2 {
      &#head-primary {
        font-size: 5vw;
      }
      &#head-secondary {
        font-size: 4.5vw;
      }
    }
    p {
      font-size: 1.4vw;
    }
  }
  
  .content-right {
    h1 {
      font-size: 4.2vw;
    }
  }
}

@media (min-width: 1920px) {
  .content-left {
    h2 {
      &#head-primary {
        font-size: 100px;
      }
      &#head-secondary {
        font-size: 90px;
      }
    }
    p {
      font-size: 24px;
    }
  }

  .content-right {
    h1 {
      font-size: 80px;
    }
  }
}

.content-switch-role-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-image: url('../assets/images/content-switch-role/content_switch_role_background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.content-switch-role-container {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  .content-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;

    h2 {
      position: inherit;
      color: $theme-red;
      font-weight: 700;
      letter-spacing: 7px;

      &:hover {
        cursor: pointer;
      }

      &#head-primary {
        left: 50%;
        transform: translateX(-50%);
        transition: top $transition-duration ease-in-out;
      }
      &#head-secondary {
        left: 50%;
        transform: translateX(-50%);
        transition: top $transition-duration ease-in-out;
      }

      &.is-primary {
        top: 30%;
      }
      &.is-secondary {
        top: 40%;
      }
    }

    p {
      position: inherit;
      top: 55%;
      left: 50%;
      transform: translateX(-50%);
      max-width: 270px;
      color: white;
    }
  }

  .content-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;

    h1 {
      position: inherit;
      top: 35%;
      color: white;
      font-family: '9_our_king';
      z-index: 5;
    }

    img {
      position: inherit;
      width: 25vw;
      max-width: 500px;
      transition: $transition-duration ease-in-out;

      &.is-primary {
        top: 30%;
        left: 250px;
        transform: scale(1);
        z-index: 4;
      }

      &.is-secondary {
        top: 45%;
        left: 100px;
        transform: scale(.6);
        z-index: 3;
      }
    }
  }
}
</style>
