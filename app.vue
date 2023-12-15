<template>
  <NuxtLayout>
    <MainStore />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Lenovo Edge Retail',
  htmlAttrs: {
    lang: 'en',
  },
})
</script>
<script>
export default {
  mounted() {
    if (window.location.hash) {
      console.log(window.location.hash)
      document.querySelector(window.location.hash)?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  },
}
</script>
