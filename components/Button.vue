<template>
  <a
    :href="url"
    :data-theme="color ?? 'red'"
    v-if="url"
    :target="url.match('http') ? '_blank' : ''"
    :download="
      url.match('.pdf') ? this.url.substr(this.url.lastIndexOf('/') + 1) : null
    "
  >
    <slot></slot>
  </a>
  <button @click="action" :data-theme="color ?? 'red'" v-else>
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    url: String,
    action: Function,
    color: String,
  },

  methods: {
    openLink() {
      if (this.url?.match('http')) {
        window.open(this.url, '_blank')
        return
      }
      if (this.url?.match('.pdf')) {
        const link = document.createElement('a')
        link.href = this.url
        link.download = this.url.substr(this.url.lastIndexOf('/') + 1)
        link.click()
        return
      }
    },
  },
}
</script>

<style lang="scss" scoped>
a,
button {
  border: 0;
  color: var(--white);
  font-size: 1rem;
  font-weight: normal;
  font: inherit;
  display: inline-block;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 150ms ease;
  text-decoration: none;

  &[data-theme='red'] {
    background: var(--signature-red);
    &:hover,
    &:focus {
      background-color: var(--mid-red-1);
    }
    &:active {
      background-color: var(--deep-red-2);
    }
  }

  &[data-theme='blue'] {
    background: var(--deep-blue-2);
    &:hover,
    &:focus {
      background-color: var(--deep-blue-1);
    }
    &:active {
      background-color: var(--signature-red);
    }
  }

  &[data-theme='purple'] {
    background: var(--deep-purple-2);
    &:hover,
    &:focus {
      background-color: var(--deep-purple-1);
    }
    &:active {
      background-color: var(--signature-red);
    }
  }

  &[data-theme='transparent'] {
    background: var(--pale-blue-1);
    &:focus {
      background-color: var(--mid-red-1);
    }
    &:active {
      background-color: var(--deep-red-2);
    }
  }
}
</style>
