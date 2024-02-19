<template>
  <ul>
    <li v-for="(item, index) in items" :key="index" v-bind:class="item.number">
      <strong>{{ item.title }}</strong>
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
    background-size: 3rem;
    padding-left: 4rem;
    min-height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    &.num1 {
      background: url('/images/1.svg') top left no-repeat;
    }
    &.num2 {
      background: url('/images/2.svg') top left no-repeat;
    }
    &.num3 {
      background: url('/images/3.svg') top left no-repeat;
    }
    &.num4 {
      background: url('/images/4.svg') top left no-repeat;
    }
    &.num5 {
      background: url('/images/5.svg') top left no-repeat;
    }
    strong {
      display: block;
      font-size: 1rem;
      font-weight: 800;
    }
  }
}
</style>
