<template>
  <div align="center">
    <Intro v-if="false" />
    <Home />
  </div>
</template>

<script>
export default {
  components: {
    Intro: () => import('./views/Intro'),
    Home: () => import('./views/Home')
  }
}
</script>
