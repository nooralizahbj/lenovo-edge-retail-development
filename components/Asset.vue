<template>
  <article class="asset">
    <picture class="asset__image">
      <source media="(max-width: 700px)" :srcset="imageMobile" />
      <img :src="image" alt="" loading="lazy" />
    </picture>
    <div class="asset__content">
      <h3>{{ title }}</h3>
      <slot></slot>
    </div>
    <footer class="asset__footer">
      <Button color="blue" :url="url" :id="id">{{ cta }}</Button>
    </footer>
  </article>
</template>

<script>
export default {
  props: {
    image: String,
    imageMobile: String,
    title: String,
    cta: String,
    url: String,
    id: String,
  },
}
</script>

<style lang="scss">
.asset {
  background: var(--white);
  border: 1px solid var(--deep-blue-2);
  display: grid;
  grid-template-areas: 'image content' 'image footer';
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr auto;

  @media (max-width: 700px) {
    grid-template-areas: 'image' 'content' 'footer';
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
  }

  &__image {
    grid-area: image;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    grid-area: content;
    padding: 1rem 2rem;
  }

  &__footer {
    grid-area: footer;
    text-align: right;
  }
}
</style>
