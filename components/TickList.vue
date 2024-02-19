<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <strong>{{ item.title }}</strong>
      <span v-html="item.description"></span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: Array,
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: grid;
  gap: 1rem;
  padding-left: 0;

  li {
    background: url('/images/tick.svg') top left no-repeat;
    background-size: 2rem;
    padding-left: 3rem;
    min-height: 2rem;
    strong {
      display: block;
      font-size: 1.2rem;
      font-weight: 900;
    }
  }
}
</style>
