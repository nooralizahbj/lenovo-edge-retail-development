<template>
  <div class="product">
    <img :src="image" alt="" class="product__image" />
    <h3 class="product__name">
      <img
        src="/images/arrow.svg"
        alt=""
        class="product__icon"
        loading="lazy"
      />
      {{ name }}
    </h3>
    <slot />
    <p>
      <Button v-if="details" color="blue" :url="details" target="_blank"
        >Product details</Button
      >
    </p>
    <p>
      <Button v-if="datasheet" color="purple" :url="datasheet" target="_blank"
        >Read the datasheet</Button
      >
    </p>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    name: String,
    datasheet: String,
    details: String,
  },
}
</script>

<style lang="scss">
.product {
  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
  padding: 1rem;

  &__icon {
    width: 2rem;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
}
</style>
