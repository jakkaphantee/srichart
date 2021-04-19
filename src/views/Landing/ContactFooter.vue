<template>
  <div class="contact-footer-bar">
    <img class="contact-brand-logo" :src="require('@/assets/images/contact-footer/brand_logo_red.svg')" />
    <div class="contact-form" align="left">
      <div align="right">
        รัตโกสินทร์ศก ๒๔๐
      </div>
      <div align="left">
        <p>ถึงคุณ ชญานี จันทร์อินทร์</p>
      </div>
      <div>
        <b-input class="contact-input" autocomplete="off" block />
      </div>
      <div class="mt-2" align="right">
        <p>ด้วยความเคารพยิ่ง</p>
      </div>
      <div class="contact-form-foot" align="right">
        <div>
          ท่าน
        </div>
        <b-input class="contact-input small-input" autocomplete="off" size="sm" />
      </div>
    </div>
    <div class="producer-profile-container">
      <img :src="require('@/assets/images/contact-footer/producer.jpeg')" />
      <div class="producer-name mt-1">
        <strong>
          นางสาว ชญานี จันทร์อินทร์
        </strong>
      </div>
      <div class="producer-major">
        สาขาการออกแบบสื่อปฏิสัมพันธ์และมัลติมีเดีย, มศว
      </div>
    </div>
    <div class="producer-contact-data" align="left">
      <h3>
        ติดต่อ
      </h3>
      <div class="producer-phone">
        โทร. 082-2190795
      </div>
      <div class="producer-email">
        chayanee.chanin@gmail.com
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactFooter',
  data() {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 1920px) {
  .contact-form {
    font-size: 1.5vw;
  }
  .producer-name {
    font-size: .9vw;
  }
  .producer-major {
    font-size: .8vw;
  }
  .producer-phone {
    font-size: 1.3vw;
  }
  .producer-email {
    font-size: 1vw;
  }
}

@media (min-width: 1920px) {
  .contact-form {
    font-size: 28px;
  }
  .producer-name {
    font-size: 18px;
  }
  .producer-major {
    font-size: 15px;
  }
  .producer-phone {
    font-size: 24px;
  }
  .producer-email {
    font-size: 18px;
  }
}

.contact-footer-bar {
  position: relative;
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/images/contact-footer/footer_background.png');
  background-size: contain;
  background-repeat: repeat-x;
  overflow: hidden;
  color: white;
}
.contact-brand-logo {
  position: absolute;
  top: 15%;
  width: 4vw;
  max-width: 90px;
  max-height: 90px;
}
.contact-form {
  position: absolute;
  top: 30%;
  width: 40vw;
  height: fit-content;
  max-width: 750px;
  .contact-form-foot {
    position: relative;
    div {
      height: 100%;
      display: inline-block;
      margin-right: 10px;
    }
    input {
      display: inline-block;
    }
  }
}
.contact-input {
  background-color: #C4C4C4;
  border-radius: 0;
  &:focus {
    box-shadow: none;
    outline: none;
  }
  &.small-input {
    max-width: 50%;
  }
}
.producer-profile-container {
  position: absolute;
  top: 30%;
  right: 7%;
  width: 11vw;
  height: 280px;
  max-width: 300px;
  img {
    width: 100%;
  }
}
.producer-contact-data {
  position: absolute;
  top: 38%;
  left: 7%;
  width: 18vw;
  h3 {
    font-weight: 600;
  }
}
</style>
