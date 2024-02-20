<template>
  <div class="floor">
    <div class="floor__aside-background"></div>

    <transition name="slide">
      <aside class="floor__intro" v-if="store.floor === 1 && !store.highlight">
        <div class="floor__intro-container">
          <h1>
            Create a future-proof organization of productivity and
            sustainability with Lenovo Manufacturing Solutions
          </h1>
          <TickList
            :items="[
              {
                title: '',
                description:
                  'Reduce labor costs by up to 80% and scheduling time by up to 83%.',
              },
              {
                title: '',
                description:
                  'Achieve up to 60% reduction indecision making time when it comes to leading your business to the future.',
              },
              {
                title: '',
                description:
                  'Create an environmentally conscious supply chain for a more sustainable future with Lenovo’s range of sustainability-driven technology and solutions.',
              },
            ]"
          />
          <p>
            Learn more about how Lenovo can help revolutionize your business by
            selecting an option below:
          </p>
          <HighlightList
            id="highlight--1-1"
            number="num1"
            label="Smarter technology makes a sustainable difference"
          >
          </HighlightList>
          <HighlightList
            id="highlight--1-2"
            number="num2"
            label="Robot automation designed to collaborate seamlessly with a human workforce"
          >
          </HighlightList>
          <HighlightList
            id="highlight--1-3"
            number="num3"
            label="Scale round-the-clock vigilance for your organization"
          >
          </HighlightList>
          <HighlightList
            id="highlight--1-4"
            number="num4"
            label="Centralize and automate supply chain management in one single hub"
          >
          </HighlightList>
        </div>
      </aside>
    </transition>
    <transition name="slide">
      <aside class="floor__intro" v-if="store.floor === 2 && !store.highlight">
        <div class="floor__intro-container">
          <h1>Transform your retail experience</h1>
          <TickList
            :items="[
              {
                title: '',
                description:
                  'Lenovo Retail Solutions provide one-stop, unmatched, comprehensive solutions to retailers, designed to transform today’s retail experience and bring the future of retail to life.',
              },
              {
                title: '',
                description:
                  'Streamline staff productivity by reducing repetitive manual tasks through store management tools and mobile devices.',
              },
              {
                title: '',
                description:
                  'Deliver seamless shopping journeys and enhanced experiences to your customers.',
              },
            ]"
          />
          <p>
            Learn more about how Lenovo can help revolutionize your business by
            selecting an option below:
          </p>
          <HighlightList
            id="highlight--2-5"
            number="num1"
            label="Harness the power of smart technology and AI to empower your store"
          >
          </HighlightList>
          <HighlightList
            id="highlight--2-3"
            number="num2"
            label="Enhance your customer experience and prevent stock losses"
          >
          </HighlightList>
          <HighlightList
            id="highlight--2-2"
            number="num3"
            label="Customer and store insights right at your fingertips"
          >
          </HighlightList>
          <HighlightList
            id="highlight--2-4"
            number="num4"
            label="Retail made for the phygital age"
          >
          </HighlightList>
          <HighlightList
            id="highlight--2-1"
            number="num5"
            label="Customer loyalty made dynamic"
          >
          </HighlightList>
        </div>
      </aside>
    </transition>
    <transition name="slide">
      <aside class="floor__intro" v-if="store.floor === 3 && !store.highlight">
        <div class="floor__intro-container">
          <h1>Redefining the future of employee productivity</h1>
          <TickList
            :items="[
              {
                title: '',
                description:
                  'Unlock up to 50% improvement in time to employee productivity.',
              },
              {
                title: '',
                description:
                  'Comprehensive monitoring and protection, 24/7, 365 days a year.',
              },
              {
                title: '',
                description:
                  'Scale your performance capabilities to meet any demand.',
              },
            ]"
          />
          <p>
            Learn more about how Lenovo can help revolutionize your business by
            selecting an option below:
          </p>
          <HighlightList
            id="highlight--3-3"
            number="num1"
            label="Accelerate purposeful innovation everywhere"
          >
          </HighlightList>
          <HighlightList
            id="highlight--3-1"
            number="num2"
            label="Setting the standard in security"
          >
          </HighlightList>
          <HighlightList
            id="highlight--3-2"
            number="num3"
            label="Innovate without limits with Lenovo TruScale"
          >
          </HighlightList>
          <HighlightList
            id="highlight--3-4"
            number="num4"
            label="The path to future-ready IT starts here"
          >
          </HighlightList>
        </div>
      </aside>
    </transition>
    <transition>
      <aside class="floor__intro" v-if="store.floor === 4 && !store.highlight">
        <div class="floor__intro-container">
          <h1>Enter the future of retail</h1>
          <p>
            <b style="font-weight: 900">Lenovo Services for Retail</b> unifies
            the power of hardware, software and services to deliver an
            experience that’s ready for the future of retail. Growing with your
            business, our unified solution simplifies and smooths your evolution
            to a seamless shopping experience your customers trust, and love.
          </p>
          <TickListNew
            :items="[
              {
                title: 'Deploy seamlessly without hassle',
                description:
                  'Simple access to customized technology from day 1, from onsite device deployment and data migration to testing support - allowing you to begin revolutionizing your retail business with minimal to no disruption.',
              },
              {
                title: 'Optimize your resources with our management solutions',
                description:
                  'Outsource your day-to-day management of your IT tasks and functions with onsite field services, asset inventory and management, flex pool management and many more - so that your business can focus on what matters.',
              },
              {
                title: 'Transform your IT experience',
                description:
                  'Keep your devices performing at peak efficiency and elevate employee productivity with Lenovo Premier Support suite, offering direct access to advanced technicians, 24x7x365 expedited support, escalation management, extended protection plans and AI-powered insights, all designed to help you achieve more and waste less.',
              },
              {
                title: 'Protect your business from digital threats',
                description:
                  'Defending your IT against tomorrow’s threats. From the factory, to supply, to the hands of your hybrid workforce.',
              },
              {
                title: 'Maximize your circularity',
                description:
                  '<strong>Lenovo Asset Recovery Services</strong> provide packaging collection, data backup and wiping, and recycling and disposal services so that you can minimize product and e-waste.',
              },
            ]"
          />
        </div>
      </aside>
    </transition>

    <slot name="highlights" v-if="mounted" />

    <nav class="floor__controls">
      <button
        v-for="floorControl in store.floors"
        :key="floorControl"
        class="floor__control"
        :data-active="floor === floorControl"
        @click="selectFloor(floorControl)"
      >
        {{ floorControl }}
        <span class="floor__control-name">{{
          [
            'Ground Floor',
            'Store Front',
            'Office Floor',
            'Services For Retail',
          ][floorControl - 1]
        }}</span>
      </button>
    </nav>

    <div class="floor__title" v-if="store.floor != 4">
      <h2>{{ title }}</h2>
      <p>
        <!-- <span class="non-touch">Click</span><span class="touch-only">Tap</span> -->
        {{ description }}
      </p>
    </div>

    <div class="floor__title" v-if="store.floor === 4">
      <h2>{{ title }}</h2>
      <p>
        {{ description }}
      </p>
    </div>

    <div
      class="floor__image"
      ref="imageContainer"
      @click="clearHighlight"
      v-if="store.floor != 4"
    >
      <img
        :src="baseImage ?? `https://via.placeholder.com/1000`"
        alt="Floor image"
        ref="base"
      />
      <div
        class="floor__highlights"
        :id="`floor--${floor}__highlights`"
        ref="highlights"
      ></div>
    </div>

    <div
      class="floor__image_floor_4"
      ref="imageContainer"
      @click="clearHighlight"
      v-if="store.floor === 4"
    >
      <img
        :src="baseImage ?? `https://via.placeholder.com/1000`"
        alt="Floor image"
        ref="base"
      />
      <div
        class="floor__highlights"
        :id="`floor--${floor}__highlights`"
        ref="highlights"
      ></div>
    </div>
  </div>
</template>

<script>
import { useStore } from '~~/store/store'

export default {
  props: {
    floor: Number,
    totalFloors: Number,
    selectedHighlight: Object,
    title: String,
    description: String,
    baseImage: String,
  },

  data() {
    return {
      store: useStore(),
      mounted: false,
    }
  },

  mounted() {
    this.mounted = true
    window.addEventListener('resize', () => this.resizeHighlights())
    this.$refs.base.addEventListener('load', () => this.resizeHighlights())
  },

  unmounted() {
    this.mounted = false
  },

  methods: {
    resizeHighlights() {
      this.$refs.highlights.style.width = `${this.$refs.base.clientWidth}px`
      this.$refs.highlights.style.height = `${this.$refs.base.clientHeight}px`
    },

    selectFloor(floor) {
      this.store.$patch({ floor, highlight: null })
    },

    clearHighlight() {
      this.store.$patch({ highlight: null })
    },
  },
}
</script>

<style lang="scss">
.video-title {
  display: flex;

  &__icon {
    margin-top: 2rem;
    margin-right: 1rem;
  }
}
.floor {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: grid;
  box-shadow: inset 0 6px 0 var(--signature-red);
  position: absolute;
  grid-template-columns: min(500px, 40%) 1fr auto;
  grid-template-rows: max-content auto;
  grid-template-areas: 'sidebar controls title' 'sidebar image image';
  gap: 0 6rem;

  @media (max-width: 920px) {
    grid-template-areas: 'controls title' 'image image' 'sidebar sidebar';
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto auto auto;
    height: auto;
    position: static;
  }
  @media (max-width: 700px) {
    grid-template-areas: 'controls' 'title' 'image' 'sidebar';
    grid-template-columns: auto;
  }

  &__title {
    grid-area: title;
    padding: 1rem;
    z-index: 1;
    margin: auto;

    h2 {
      font-size: 1.8rem;
      font-weight: 900;

      @media (max-width: 700px) {
        display: none;
      }
    }

    @media (max-width: 920px) {
      .non-touch {
        display: none;
      }
    }
    @media (min-width: 920px) {
      .touch-only {
        display: none;
      }
    }
  }

  &__intro {
    background: var(--white);
    grid-area: sidebar;
    box-shadow: 2rem 0 4rem var(--pale-blue-1);
    position: relative;
    padding-right: 8rem;
    height: 100%;
    display: grid;
    align-content: center;
    z-index: 2;

    @media (max-width: 920px) {
      height: auto;
      padding-right: 0;
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

    h1 {
      color: var(--signature-red);
      font-weight: 900;
      font-size: 2rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    .benefits {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, auto);
      grid-auto-flow: column;
      text-align: center;

      > * {
        margin: 0;
      }

      dt {
        font-weight: 900;
        font-size: 1.2rem;
        align-self: center;
      }
    }
  }

  &__intro-container {
    @media (min-width: 920px) {
      max-height: calc(100vh - var(--navbar-height));
      overflow-y: auto;

      &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
      }
    }
    @media (max-width: 700px) {
      padding: 0 1rem;
    }
    z-index: 2;
  }

  &__aside-background {
    grid-area: sidebar;
    background: var(--white);
    position: relative;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      right: -4rem;
      top: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 400px 4rem 0 0;
      border-color: var(--white) transparent transparent transparent;
    }
    &::after {
      content: '';
      position: absolute;
      right: -4rem;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 400px 0 0 4rem;
      border-color: transparent transparent transparent var(--white);
    }
  }

  &__controls {
    grid-area: controls;
    font-size: 5rem;
    display: flex;
    gap: 1rem;
    z-index: 2;
    align-items: flex-start;

    @media (max-width: 700px) {
      justify-content: center;
    }
  }

  &__control {
    font-weight: 600;
    padding: 2rem 0 0;
    text-align: center;
    color: var(--white);
    background: transparent;
    border: 0;
    border-top: 6px solid var(--signature-red);
    cursor: pointer;

    @media (max-width: 920px) {
      padding: 0;
    }

    &[data-active='true'] {
      color: var(--deep-blue-2);
      border-top-color: var(--deep-blue-2);

      > * {
        opacity: 1;
      }
    }
  }

  &__control-name {
    opacity: 0.5;
    display: block;
    font-size: 1.2rem;
    text-transform: uppercase;
    width: min-content;
  }

  &__image {
    grid-area: image;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-left: -8rem;
    margin-top: -8rem;

    @media (max-width: 920px) {
      margin: -8rem 0 3rem -4rem;
    }
    @media (max-width: 700px) {
      margin: -4rem -0.5rem 3rem -2rem;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      object-position: bottom center;
      aspect-ratio: 1265/935;
    }
  }

  &__image_floor_4 {
    grid-area: image;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-left: -8rem;
    margin-top: -6rem;
    margin-right: -4rem;

    @media (max-width: 920px) {
      margin: -8rem 0 3rem -4rem;
    }
    @media (max-width: 700px) {
      margin: -3rem -3rem 3rem -2rem;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      object-position: bottom center;
      aspect-ratio: 1265/935;
    }
  }

  &__highlights {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &__highlight-line {
    position: absolute;
    border: 0 solid yellow;
    border-right-width: 10px;
    left: -10px;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 300ms ease-out;
  transform: translate(0, 0);
  opacity: 1;
}
.slide-enter-from,
.slide-leave-to {
  transform: translate(-100%, 0);
  opacity: 0;
  @media (max-width: 920px) {
    transform: translateY(100%);
  }
}
</style>
