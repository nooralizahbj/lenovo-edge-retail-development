<template>
  <section :aria-label="name" :id="id ?? name.toLowerCase().replace(' ', '-')">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: String,
    id: String,
  },
}
</script>

<style lang="scss">
.container {
  padding: 0 1rem;
  margin: 0 auto;
  max-width: 1400px;
}
</style>
