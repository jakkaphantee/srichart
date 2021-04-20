<template>
  <div class="product-detail-page">
    <div class="product-detail-container">
      <img
        class="product-brand-logo"
        :src="require('@/assets/images/logo/logo_white.svg')"
      />
      <img
        class="product-detail-background-image"
        :src="require(`@/assets/images/product-detail/background_${currentProduct.imageName}.png`)"
      />
      <div class="product-content-container">
        <div class="product-first-content">
          <img
            class="product-main-image"
            :src="require(`@/assets/images/product-detail/${currentProduct.imageName}_main.png`)"
          />
          <img
            class="product-middle-image"
            :src="require(`@/assets/images/product-detail/${currentProduct.imageName}_middle.jpeg`)"
          />
        </div>
        <div class="product-second-content">
          <p>
            แปรงขัดที่แสดงถึงความอดทนของ
            ลูกผู้หญิงที่ต้องทั้งทำงานทำการ
            นอกบ้านกระนั้นก็ต้องรับผิดชอบ
            งานในครัวเรือนไม่ให้
            ขาดตกบก
            พร่องอันเกิดมาจากกรอบสังคมที่
            ตีค่าว่าหญิงไทยที่ดีคือ หญิงที่เก่ง
            การบ้านการเรือนจึงนำเสนอผ่าน แปรงที่หนักเพื่อให้เข้าใจถึงความ อดทนของผู้หญิง
          </p>
          <video
            class="product-video"
            :src="require(`@/assets/images/product-detail/${currentProduct.imageName}_video.mp4`)"
            autoplay
            muted
            loop
          />
        </div>
        <div class="product-third-content">
          <img
            class="product-person"
            :src="require(`@/assets/images/product-detail/${currentProduct.imageName}_person.jpeg`)"
          />
          <p>
            แปรงนี้มีแนวคิดมาจากตัว นางวันทอง ในวรรณคดีเรื่อง
            ‘ขุนช้างขุนแผน’โดย นางวันทองเป็นตัวละครสะท้อนให้เห็น
            ถึงกรอบของสังคมว่าเป็นสตรีที่ดีต้องความสามารถในด้านการบ้านการเรือน เย็บปักถักร้อย ต้องมีสเน่ห์ปลายจวัก เรียบร้อยหัวอ่อนเชื่อฟังคำสั่งฝ่ายชาย เมื่อตอนเด็กเชื่อฟังพ่อ  พอแต่งงานให้ เชื่อฟังปรนนิบัติสามีโดยจากในวรรณ-คดีนั้นนางวันทองต้องจำยอมแต่งงานกับขุนช้างตามคำสtั่งของมารดาเพื่อ แสดง
            ความกตัญญูแม้ใจจะไม่อยาก แต่งเพราะมีขุนแผนเป็นคนรักอยู่
            แล้ว แต่เมื่อแต่งไปก็ปฏิบัติหน้าที่ภรรยาได้ อย่างไม่ขาดตกบกพร่อง 
          </p>
          <div class="product-carousel">
            <img
              class="product-carousel-image"
              :class="productCarouselCount === 1 ? 'current-carousel' : ''"
              :src="require(`@/assets/images/product-detail/${currentProduct.imageName}_carousel_1.jpeg`)"
            />
            <img
              class="product-carousel-image"
              :class="productCarouselCount === 2 ? 'current-carousel' : ''"
              :src="require(`@/assets/images/product-detail/${currentProduct.imageName}_carousel_2.jpeg`)"
            />
            <img
              class="product-carousel-image"
              :class="thirdCarouselClass"
              :src="require('@/assets/images/product-detail/product_carousel_3.jpeg')"
            />
          </div>
        </div>
        <div class="product-forth-content">
          <div class="product-quote-text">
            <p>
              ความอดทนคน<br />มิได้คงกระพัน
            </p>
          </div>
          <div class="product-quote-description">
            ดอกซ่อนกลิ่นเป็นสัญลักษณ์แทนตัวนางวันทองได้ดี เพราะ ดอกซ่อนกลิ่น เปรียบเหมือน ความรู้สึกของนางวันทองที่ ถูกซ่อนไว้ในใจ ทั้งเรื่องการ อดทนอยู่กับชายที่ไม่ได้รัก การวางตัวเป็น
            สตรีที่ดีเพื่อ ไม่ให้เป็นขี้ปากชาวบ้าน
          </div>
          <img
            class="product-quote-person"
            :src="require(`@/assets/images/product-detail/${currentProduct.imageName}_quote.jpeg`)"
          />
          <div class="product-buy-text">
            ซื้อสินค้า
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProductDetail',
  data() {
    return {
      productDetail: {
        brush: {
          imageName: 'brush',
          productDescription1: '',
          productDescription2: '',
          productQuote: '',
          productQuoteDescription: ''
        },
        handkerchief: {
          imageName: 'handkerchief',
          productDescription1: '',
          productDescription2: '',
          productQuote: '',
          productQuoteDescription: ''
        },
        glove: {
          imageName: 'glove',
          productDescription1: '',
          productDescription2: '',
          productQuote: '',
          productQuoteDescription: ''
        }
      },
      productCarouselCount: 0,
      productCarouselImage: null
    }
  },
  computed: {
    ...mapState('preference', {
      currentProductView: state => state.currentProductView
      // state => state.currentProductView
    }),
    currentProduct() {
      switch (this.currentProductView) {
      case 'brush': {
        return this.productDetail.brush
      }
      case 'handkerchief': {
        return this.productDetail.handkerchief
      }
      default: {
        return this.productDetail.glove
      }
      }
    },
    thirdCarouselClass() {
      if (this.productCarouselCount === 2) {
        return 'hide-carousel'
      } else {
        return this.productCarouselCount === 3 ? 'current-carousel' : ''
      }
    }
  },
  mounted() {
    window.scrollTo(0,0)
    this.changeCarouselImage()
  },
  methods: {
    changeCarouselImage() {
      if (this.productCarouselCount === 3) {
        this.productCarouselCount = 1
      } else {
        this.productCarouselCount += 1
      }
      setTimeout(() => {
        this.changeCarouselImage()
      }, 4000)
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 1920px) {
  .product-brand-logo {
    width: 6vw;
    height: 6vw;
  }
  .product-second-content {
    p {
      font-size: 1.5vw;
    }
  }
  .product-third-content {
    p {
      font-size: 1vw;
    }
  }
  .product-forth-content {
    .product-quote-text {
      font-size: 4.5vw;
    }
    .product-quote-description {
      font-size: 1.2vw;
    }
    .product-buy-text {
      font-size: 6.5vw;
    }
  }
}
@media (min-width: 1920px) {
  .product-brand-logo {
    width: 100px;
    height: 100px;
  }
  .product-second-content {
    p {
      font-size: 28px;
    }
  }
  .product-third-content {
    p {
      font-size: 20px;
    }
  }
  .product-forth-content {
    .product-quote-text {
      font-size: 100px;
    }
    .product-quote-description {
      font-size: 24px;
    }
    .product-buy-text {
      font-size: 144px;
    }
  }
}
.product-detail-page {
  position: relative;
  width: 100vw;
  background-color: red;
}
.product-detail-container {
  position: relative;
  width: 100%;
  height: fit-content;
  max-width: 1920px;
  .product-detail-background-image {
    position: relative;
    left: 0;
    width: 100%;
  }
  .product-brand-logo {
    position: absolute;
    top: 2vw;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
  }
}
.product-content-container {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  max-width: 1920px;
}
.product-first-content {
  position: relative;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  max-height: 1080px;
  .product-main-image {
    position: absolute;
    height: 80%;
    max-height: 900px;
    bottom: 0;
    left: 7%;
  }
  .product-middle-image {
    position: absolute;
    top: 70%;
    left: 50%;
    width: 20%;
    max-width: 400px;
    transform: translateX(-50%);
  }
}
.product-second-content {
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  max-height: 1080px;
  p {
    position: absolute;
    top: 12%;
    left: 5%;
    width: fit-content;
    max-width: 22%;
    text-align: left;
    color: white;
  }
  .product-video {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50%;
    max-height: 520px;
  }
}
.product-third-content {
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  max-height: 1080px;
  overflow-x: hidden;
  p {
    position: absolute;
    top: 30%;
    left: 38%;
    max-width: 16%;
    color: white;
    text-align: left;
  }
  .product-person {
    position: absolute;
    top: 12%;
    left: 5%;
    width: 28%;
  }
  .product-carousel {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 42%;
    height: 64%;
    max-width: 805px;
    max-height: 690px;
    .product-carousel-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 4;
      &.current-carousel {
        animation: move-in-carousel .5s forwards;
        z-index: 5;
        @keyframes move-in-carousel {
          from {
            left: 100%;
          }
          to {
            left: 0;
          }
        }
      }
      &.hide-carousel {
        left: 100%;
      }
    }
  }
}
.product-forth-content {
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  max-height: 1080px;
  .product-quote-text {
    position: absolute;
    top: 5%;
    right: 30%;
    color: transparent;
    -webkit-text-stroke: 2px white;
    font-weight: 600;
    font-style: italic;
    z-index: 4;
  }
  .product-quote-description {
    position: absolute;
    top: 40%;
    left: 33%;
    max-width: 17%;
    color: white;
    text-align: left;
  }
  .product-quote-person {
    position: absolute;
    top: 12%;
    right: 18%;
    width: 20%;
  }
  .product-buy-text {
    position: absolute;
    bottom: 10%;
    right: 5%;
    border-bottom: 4px solid white;
    color: white;
    font-weight: 700;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
