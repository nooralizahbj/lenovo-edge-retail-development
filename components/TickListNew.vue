<template>
  <ul>
    <div v-for="(item, index) in items" :key="index">
      <strong>{{ item.title }}</strong>
      <li>
        <span v-html="item.description"></span>
      </li>
    </div>
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

  div {
    strong {
      display: block;
      font-size: 1.2rem;
      font-weight: 900;
      padding-bottom: 0.8rem;
    }
    li {
      background: url('/images/tick.svg') top left no-repeat;
      background-size: 2rem;
      padding-left: 3rem;
      min-height: 2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
}
</style>
