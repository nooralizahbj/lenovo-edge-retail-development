<template>
  <div class="highlight" :ref="`highlight--${id}`">
    <transition name="slide" v-if="!nonInteractive">
      <aside v-if="store.highlight === id">
        <Button class="highlight__close" @click="close">
          <i>&times;</i>
        </Button>
        <div class="highlight__container">
          <picture class="highlight__icon">
            <source media="(max-width: 920px)" :srcset="iconMobile" />
            <img :src="icon" alt="" loading="lazy" />
          </picture>
          <slot></slot>
        </div>
      </aside>
    </transition>
    <Teleport :to="`#floor--${floor}__highlights`">
      <button
        :class="{
          highlight__hotspot: true,
          'highlight__hotspot--interactive': !nonInteractive,
        }"
        :id="`hotspot-${id}`"
        :tabindex="nonInteractive ? -1 : 0"
        :style="{
          left: `${x}%`,
          top: `${y}%`,
          width: `${width}%`,
          height: `${width}%`,
        }"
        :data-selected="store.highlight === id"
        @click.stop="select"
        :aria-label="label"
        :aria-hidden="nonInteractive ? true : false"
      >
        <img :src="image" alt="" />
      </button>
    </Teleport>
  </div>
</template>

<script>
import { useStore } from '../store/store'

export default {
  props: {
    id: String,
    x: Number,
    y: Number,
    width: Number,
    image: String,
    icon: String,
    iconMobile: String,
    nonInteractive: Boolean,
    floor: Number,
    label: String,
  },

  data() {
    return {
      store: useStore(),
      isMounted: false,
    }
  },

  methods: {
    close() {
      this.store.$patch({ highlight: null })
      window.scroll({
        top: 0,
        behavior: 'smooth',
      })
    },

    select() {
      this.store.$patch({ highlight: this.id })
      if (window.innerWidth < 920) {
        this.$nextTick(() =>
          setTimeout(
            () =>
              this.$refs[`highlight--${this.id}`]
                .querySelector('.highlight__close')
                .scrollIntoView({
                  behavior: 'smooth',
                }),
            500,
          ),
        )
      }
    },
  },
}
</script>

<style lang="scss">
.highlight {
  grid-area: sidebar;

  aside {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: var(--white);
    box-shadow: 2rem 0 4rem var(--pale-blue-1);
    z-index: 1;
    width: min(500px, 40%);

    @media (max-width: 920px) {
      position: relative;
      left: unset;
      top: unset;
      bottom: 0;
      width: unset;
    }

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      border-style: solid;
      border-width: 400px 0 400px 4rem;
      border-color: transparent transparent transparent var(--white);

      @media (max-width: 920px) {
        border-width: 0 50vw 4rem 50vw;
        border-color: transparent transparent var(--white) transparent;
        left: -1rem;
        top: -2rem;
      }
      @media (max-width: 700px) {
        left: 0;
      }
    }

    h2 {
      color: var(--signature-red);
      font-size: 2rem;
      font-weight: 900;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: calc(100% - 8rem);
    transform: translateY(-50%);
    z-index: 2;
    width: 10rem;

    @media (max-width: 920px) {
      position: static;
      margin: -2rem auto 0;
      transform: translate(0, 0);
    }

    @media (max-width: 700px) {
      margin-top: -5rem;
    }

    img {
      width: 100%;
    }
  }

  &__container {
    padding-right: 8rem;
    clear: right;
    display: grid;
    align-content: center;
    height: 100%;
    overflow-y: auto; 

    &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }

    @media (max-width: 920px) {
      padding-right: 0;
    }

    @media (max-width: 700px) {
      padding: 3rem 1rem;
    }
  }

  &__close {
    position: absolute;
    top: 1rem;
    right: -1rem;
    height: 2rem;
    width: 2rem;
    padding: 0 !important;
    text-align: center;
    border-radius: 1rem;
    z-index: 1;
    @media (max-width: 920px) {
      right: 1rem;
      top: -1rem;
    }

    i {
      font-style: normal;
      font-size: 2rem;
      line-height: 2rem;
      vertical-align: middle;
    }
  }

  &__hotspot {
    position: absolute;
    transform: translate(-50%, -50%);
    background: none;
    border: 0;
    cursor: pointer;

    &:not(.highlight__hotspot--interactive) {
      pointer-events: none;
      z-index: 1;
    }

    &[data-selected='true'] {
      z-index: 2;
    }

    img {
      object-fit: contain;
      position: relative;
    }

    &--interactive:hover::before {
      background: var(--signature-red);
      animation: none;
      @media (min-width: 920px) {
        opacity: 0.7;
        background: white;
      }
    }

    &--interactive[data-selected='true']::before {
      animation: none;
      background: var(--signature-red);
      @media (min-width: 920px) {
        opacity: 0.6;
        filter: blur(0px);
        background: white;
      }
    }

    &--interactive[data-selected='true']::after {
      content: '';
      display: block;
      position: absolute;
      background: url('/images/data-slant-ani.gif') center no-repeat;
      background-size: contain;
      width: 5rem;
      height: 5rem;
      left: 80%;
      bottom: 50%;
    }

    &#hotspot-highlight--1-1::after {
      left: 60%;
      bottom: 30%;
    }
    &#hotspot-highlight--1-3::after {
      left: 40%;
      bottom: 8%;
    }
    &#hotspot-highlight--1-2::after,
    &#hotspot-highlight--3-4::after {
      left: 52%;
      bottom: 74%;
    }

    &--interactive::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 80%;
      transform: translate(-50%, -50%);
      transform-origin: 0 0;
      aspect-ratio: 1/1;
      background: transparent;
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--signature-red);
      animation: forwards infinite pulsateMobile 3s ease-in-out;
      @media (min-width: 920px) {
        box-shadow: none;
        background: white;
        filter: blur(10px);
        animation: pulsateDesktop 1s ease-in-out infinite alternate;
      }
    }
  }
}

@keyframes pulsateDesktop {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
}

@keyframes pulsateMobile {
  0% {
    opacity: 0;
    transform: scale(2) translate(-50%, -50%);
  }
  50% {
    opacity: 1;
    transform: scale(0.7) translate(-50%, -50%);
  }
  80% {
    opacity: 1;
    transform: scale(0.8) translate(-50%, -50%);
  }
  100% {
    opacity: 0;
    transform: scale(0.8) translate(-50%, -50%);
  }
}

/* Overrides */
#hotspot-highlight--1-1.highlight__hotspot--interactive::before,
#hotspot-highlight--1-2.highlight__hotspot--interactive::before {
  width: 50%;
}
</style>
