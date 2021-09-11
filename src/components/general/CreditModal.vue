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
    <template>
      <div>
        <img
          class="close-button"
          :src="require('@/assets/images/icons/cross.svg')"
          @click="$emit('closeModal')"
        />
        <img
          class="brand-background-pattern"
          :src="require('@/assets/images/brand_background_pattern_opacity20.png')"
        />
        <div class="p-4" align="left">
          <h2>
            <strong>
              ขอขอบพระคุณผู้ช่วยเหลือทุกคน
            </strong>
          </h2>
          <b-row
            v-for="credit in creditList"
            :key="credit.name"
            class="credit-content mt-1 mb-1"
          >
            <b-col cols="6">
              {{ credit.name }}
            </b-col>
            <b-col cols="6">
              {{ credit.role }}
            </b-col>
          </b-row>
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
  name: 'CreditModal',
  props: {
    isModalOpen: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    creditList: [
      {
        name: 'นาย พิทยพงษ์ วิทยานนท์',
        role: ': สินค้า 3D\n(คนสนับสนุนให้กำลังใจ)'
      },
      {
        name: 'นาย อรรถชัย ศรชัย',
        role: ': เสียงผู้ชายตะโกน'
      },
      {
        name: 'นาย นพณัฐ ดินแดง',
        role: ': เสียงในเว็บ'
      },
      {
        name: 'น.ส. ปภาวริทร์ เลี้ยงบุญเลิศชัย',
        role: ': ตากล้องคิวทอง'
      },
      {
        name: 'น.ส. ครรชิตา เทอดสุทธิรณภูมิ',
        role: ': นางวันทอง นางเอกหลัก\n(คนร่วมฝ่าฟันมาด้วยกัน)'
      },
      {
        name: 'นาย นพรุจ จันนุวงศ์',
        role: ': นายแบบสุดหล่อ'
      },
      {
        name: 'น.ส. ธัญดา วงษ์สมาน',
        role: ': นางกากี'
      },
      {
        name: 'น.ส. ธัญญเรศ ภูบุญเรือง',
        role: ': นางมัทนา'
      },
      {
        name: 'น.ส. ณัฏฐธิดา คล่องคณิตสรณ์',
        role: ': เพื่อนไม่ทิ้งกัน'
      },
      {
        name: 'น.ส. ณัฐวดี นางงาม',
        role: ': แต่งหน้า/ทำผม'
      },
      {
        name: 'นาย ธนภูมิ ไชยกิตติโสภณ',
        role: ': แต่งหน้า/ทำผม'
      },
      {
        name: 'ร้านดรีมราตรี',
        role: ': เช่าชุดไทย'
      },
      {
        name: 'พี่อาร์ม ชั้น 15',
        role: ': คนช่วยจัดการ studio'
      },
      {
        name: 'นาย จักรพันธ์ พยุหะเกียรติ',
        role: ': ผู้บันดาลเว็บไซต์'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.brand-background-pattern {
  width: 100%;
}
.credit-content {
  font-size: 18px;
  white-space: pre-line;
}
.close-button {
  position: absolute;
  top: 2%;
  right: 2%;
  width: 30px;
  &:hover {
    cursor: pointer;
  }
}
</style>
