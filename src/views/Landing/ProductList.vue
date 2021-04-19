<template>
  <div class="product-list-page">
    <div class="product-page-title">
      คลังสินค้า
    </div>
    <div class="product-list-container">
      <img
        v-for="(product, index) in productList"
        :key="product.productName"
        :class="index === 1 ? 'mx-5' : ''"
        :src="require(`@/assets/images/product-list/${product.imageName}.png`)"
      />
    </div>
    <div class="product-description" align="right">
      <div
        v-for="description in descriptionList"
        :key="description"
        class="my-2"
      >
        {{ description }}
        <img width="20px" :src="require('@/assets/images/intro/timer_icon.svg')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      productList: [
        {
          productName: 'brush',
          imageName: 'brush'
        },
        {
          productName: 'handkerchief',
          imageName: 'handkerchief'
        },
        {
          productName: 'glove',
          imageName: 'glove'
        }
      ],
      descriptionList: [
        'เครื่องมือทำความสะอาดเรือน',
        'เหมาะสำหรับพ่อศรีบ้านพ่อศรีเรือน'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 1920px) {
  .product-description {
    font-size: 1vw;
  }
  .product-page-title {
    font-size: 15vw;
  }
}

@media (min-width: 1920px) {
  .product-description {
    font-size: 22px;
  }
  .product-page-title {
    font-size: 288px;
  }
}

.product-list-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 1920px;
  background-color: grey;
}
.product-page-title {
  position: absolute;
  top: 1%;
  left: 4%;
  color: grey;
  font-weight: 600;
  z-index: 4;
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
}
.product-list-container {
  position: absolute;
  top: 50%;
  max-width: 1920px;
  transform: translateY(-50%);
  margin-left: 8vw;
  margin-right: 8vw;
  z-index: 5;
  img {
    display: inline-block;
    width: 30%;
    &:hover {
      cursor: pointer;
    }
  }
}
.product-description {
  position: absolute;
  bottom: 5%;
  right: 10%;
  color: white;
}
</style>
