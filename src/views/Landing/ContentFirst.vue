<template>
  <div class="content-first-page">
    <!-- <div class="box-gradient">
      <div id="box-upper" />
      <div id="box-lower" />
    </div> -->
    <div class="content-first-container">
      <video
        class="content-first-background-video"
        :src="require('@/assets/images/content-first/content_first_background_video.mp4')"
        autoplay
        muted
      />
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
  // background-image: url('../../assets/images/content-first/content_born_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  align-content: center;
}

.content-first-background-video {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 100%;
  z-index: 1;
}

.content-first-container {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  max-height: 1080px;
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

$middle-text-gradient-1: black;
$middle-text-gradient-2: #3ae9ea;
$middle-text-gradient-3: white;

.box-gradient {
  position: absolute;
  top: 50%;
  transform: rotate(270deg);
  width: 170vh;
  height: 200px;
  mask: url('../../assets/images/content-first/middle_text.svg');
  mask-size: contain;
  mask-repeat: repeat;
  animation: 2s animate-box infinite linear;

  @keyframes animate-box {
    from {
      mask-position: right;
    }
    to {
      mask-position: left;
    }
  }

  #box-upper {
    position: inherit;
    top: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(to left,
      $middle-text-gradient-1 70%,
      $middle-text-gradient-2 80%,
      $middle-text-gradient-3 90%
    );
  }
  #box-lower {
    position: inherit;
    bottom: 0;
    width: 100%;
    height: 30%;
    background: white;
  }
}
</style>
