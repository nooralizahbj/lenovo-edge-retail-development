<template>
  <div class="navbar">
    <Button class="navbar__toggle" color="transparent" @click="toggleMobileMenu"
      >☰</Button
    >
    <nav :data-open="isOpenMobile">
      <a href="#top" @click="toggleMobileMenu">Back to top</a>
      <a href="#case-studies" @click="toggleMobileMenu">Case Studies</a>
      <a href="#products" @click="toggleMobileMenu">ThinkEdge Products</a>
      <a href="#resources" @click="toggleMobileMenu">Resources</a>
      <a href="#form" @click="toggleMobileMenu">Contact</a>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenMobile: false,
    }
  },

  methods: {
    toggleMobileMenu() {
      this.isOpenMobile = !this.isOpenMobile
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  width: 100%;
  height: var(--navbar-height);
  top: 0;
  z-index: 10;
  pointer-events: none;

  &__toggle {
    display: none;
    font-size: 2rem;
    pointer-events: all;
  }

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    &__toggle {
      display: unset;
      margin-top: 2rem;
      position: absolute;
      z-index: 11;
    }
  }

  nav {
    box-shadow: 0 0 5px rgb(0 0 0 / 0.1);
    width: 100%;
    background: var(--white);
    pointer-events: all;
    @media (max-width: 700px) {
      display: none;
      position: fixed;
      top: 5rem;
      left: 0;

      &[data-open='true'] {
        display: flex;
        flex-direction: column;
      }
    }

    @media (min-width: 800px) {
      display: flex;
      align-items: stretch;
      flex-direction: row;
    }
  }

  a {
    padding: 0 1rem;
    text-decoration: none;
    transition: all 100ms ease;
    color: inherit;
    line-height: var(--navbar-height);
    font-weight: 600;

    &:hover,
    &:focus {
      background: var(--deep-blue-2);
      color: var(--white);
    }
  }
}
</style>
