<template>
  <div>
    <Home />
    <ContentIntro />
    <ContentFirst />
    <ContentSwitchRole />
    <ContentBrief />
    <QuizIntro />
  </div>
</template>

<script>
export default {
  components: {
    Home: () => import('./Home'),
    ContentIntro: () => import('./ContentIntro'),
    ContentFirst: () => import('./ContentFirst'),
    ContentSwitchRole: () => import('./ContentSwitchRole'),
    ContentBrief: () => import('./ContentBrief'),
    QuizIntro: () => import('../Quiz/QuizIntro')
  }
}
</script>
