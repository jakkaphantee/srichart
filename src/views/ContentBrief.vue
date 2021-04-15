<template>
  <div class="content-brief-page">
    <div class="content-brief-text">
      ความเป็นชายมิหายเพราะงานบ้าน<br/>
      โปรดอย่าคร้านว่ามิใช่หน้าที่<br/>
      แล้วผลักไสงานนั้นให้สตรี<br/>
      คู่ที่ดีต้องมีความเท่าเทียม
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentBrief'
}
</script>

<style lang="scss" scoped>
$theme-red: #D11111;

@media (max-width: 1920px) {
  .content-brief-text {
    font-size: 3vw;
  }
}

@media (min-width: 1920px) {
  .content-brief-text {
    font-size: 70px;
  }
}

.content-brief-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/images/content-brief/content_brief_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  align-content: center;
}

.content-brief-text {
  position: absolute;
  top: 30vh;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: fit-content;
  max-width: 1100px;
  color: $theme-red;
  font-weight: 600;
}
</style>
