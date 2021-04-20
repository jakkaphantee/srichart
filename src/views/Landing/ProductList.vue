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
        @click="changeUserPage('product'); changeCurrentProductView(product.productName);"
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
import { mapMutations } from 'vuex'

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
  },
  methods: {
    ...mapMutations('preference', {
      changeUserPage: 'changeUserPage',
      changeCurrentProductView: 'changeCurrentProductView'
    })
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/images/product-list/product_list_background.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.product-page-title {
  position: absolute;
  top: 1%;
  left: 4%;
  color: transparent;
  font-weight: 600;
  -webkit-text-stroke: 2px white;
  z-index: 4;
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
