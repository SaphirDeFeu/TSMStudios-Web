<template>
  <NavigationBar></NavigationBar>
  <NuxtPage></NuxtPage>
</template>

<script setup lang="ts">
useHead({
  title: 'Home | TSM Studios',
  meta: [
    { name: 'description', content: "Tout ce qu'un groupe d'amis a fait en étant bourré (je crois)" }
  ],
  script: [ { innerHTML: '' } ]
})
</script>

<style lang="scss">

</style>