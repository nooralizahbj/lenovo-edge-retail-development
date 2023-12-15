<template>
  <a class="case-study">
    <img :src="image" alt="" class="case-study__image" loading="lazy" />
    <div class="case-study__content">
      <h2>{{ title }}</h2>
      <slot></slot>
    </div>
    <footer class="case-study__footer">
      <Button :url="url">Read case study</Button>
    </footer>
  </a>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    url: String,
  },
}
</script>

<style lang="scss">
.case-study {
  background: var(--pale-blue-2);
  display: grid;
  grid-template-rows: auto 1fr auto;

  &__image {
    width: 100%;
    aspect-ratio: 4/1;
    object-fit: cover;
  }

  &__content {
    padding: 1rem;

    :first-child {
      margin-top: 0;
    }
    :last-child {
      margin-bottom: 0;
    }
  }

  &__footer {
    text-align: right;
  }
}
</style>
