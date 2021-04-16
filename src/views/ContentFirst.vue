<template>
  <div class="content-first-page">
    <div class="content-first-container">
      <div class="content-first-text" align="right">
        <h1>
          การกำเนิด
        </h1>
        <p>
          อันศรีชาติมีที่มาจากการสังเกตถึง ‘ระบบชายเป็นใหญ่ภายในบ้าน’ 
          เป็นความสัมพันธ์ภายในครอบครัวที่สามี
          เป็นใหญ่เหนือภรรยาหรือภรรยาต้องรับผิดชอบ
          เฉพาะเรื่องในครัวเรือน เป็นภาพจำที่พบได้ในหัวของ
          คนไทยโดยทั่วไปในวัฒนธรรมชายเป็นใหญ่มุมมอง
          ต่อสตรีเพศจะถูกเชื่อมโยงกับ “หลังบ้าน” เนื่องจาก
          ติดภาพจำว่า สตรีไทยต้องเป็นแม่บ้านแม่เรือน คอยหุงหาอาหาร ทำความสะอาด ดูแลลูก ปรนนิบัติ
          สามีซึ่งชุดความคิดนี้
          ในเวลาปัจจุบันนั้นเป็นเรื่องที่
          ล้าสมัยไปแล้ว บทบาทของสตรีในสังคมปัจจุบันนั้น
          สามารถทำงานภายนอกบ้านได้ไม่แตกต่างจาก
          เหล่าชายชาตรี การผลักภาระหน้าที่การดูแลภายในบ้าน
          มาให้สตรีทำให้เกิดความไม่เท่าเทียมในการอยู่ร่วมกัน
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentFirst'
}
</script>

<style lang="scss" scoped>
@media (max-width: 1920px) {
  .content-first-text {
    h1 {
      font-size: 5vw;
    }
    p {
      font-size: 1.7vw;
    }
  }
}

@media (min-width: 1920px) {
  .content-first-text {
    h1 {
      font-size: 72px;
    }
    p {
      font-size: 32px;
    }
  }
}

.content-first-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/images/content-first/content_born_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  align-content: center;
}

.content-first-background-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}

.content-first-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 1920px;
}

.content-first-text {
  position: absolute;
  top: 100px;
  right: 100px;
  width: 35%;
  height: 100%;
  color: white;
  z-index: 2;

  h1 {
    font-family: '9_our_king';
  }

  p {
    margin-top: 50px;
  }
}
</style>
