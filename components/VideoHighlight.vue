<template>
  <Teleport :to="`#floor--${floor}__highlights`">
    <button
      class="highlight__vid-hotspot highlight__hotspot--interactive"
      :style="{
        left: `${x}%`,
        top: `${y}%`,
      }"
      @click="showVideoModal = true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 989.3 1000"
      >
        <path
          d="M494.6 5.3C221.5 5.3 0 226.7 0 500c0 273.1 221.5 494.7 494.6 494.7 273.2 0 494.7-221.5 494.7-494.7 0-273.3-221.4-494.7-494.7-494.7zm0 934.4C251.8 939.7 55 742.8 55 500 55 257.1 251.8 60.3 494.6 60.3c242.9 0 439.7 196.8 439.7 439.7 0 242.8-196.8 439.7-439.7 439.7z"
          fill="#294e95"
        />
        <path
          d="M494.6 115.3c-212.5 0-384.7 172.2-384.7 384.7s172.3 384.7 384.7 384.7c212.5 0 384.7-172.3 384.7-384.7.1-212.5-172.2-384.7-384.7-384.7zm186.2 404.1L542.9 599 405 678.6c-18.5 10.7-33.6 2-33.6-19.4V340.8c0-21.4 15.1-30.1 33.6-19.4L542.9 401l137.9 79.6c18.5 10.7 18.5 28.1 0 38.8z"
          fill="#294e95"
        />
      </svg>
    </button>
  </Teleport>
  <Teleport to="body">
    <div class="modal" v-if="showVideoModal">
      <div class="modal-content">
        <button @click="showVideoModal = false" class="close_button">x</button>
        <vue-plyr>
          <video controls crossorigin playsinline :poster="posterUrl">
            <source size="1080" :src="videoUrl" type="video/mp4" />
          </video>
        </vue-plyr>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr.js'
import 'vue-plyr/dist/vue-plyr.css'
</script>
<script>
export default {
  props: {
    x: Number,
    y: Number,
    floor: Number,
    videoUrl: String,
    posterUrl: String,
  },

  data() {
    return {
      showVideoModal: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.highlight {
  &__vid-hotspot {
    position: absolute;
    transform: translate(-50%, -50%);
    background: none;
    border: 0;
    cursor: pointer;
    width: 3rem;

    &:not(.highlight__vid-hotspot--interactive) {
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
      animation: none;
      @media (min-width: 920px) {
        box-shadow: none;
        background: white;
        filter: blur(10px);
        animation: none;
      }
    }
  }
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 10px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;
}

/* Modal Content */
.modal-content {
  background-color: var(--pale-blue-2);
  margin: auto;
  padding: 2.25rem 1.25rem 1.25rem;
  width: 100%;
  max-width: 86vw;
  text-align: center;
  position: relative;
  margin-top: 4rem;
}

@media screen and (min-width: 768px) {
  .modal-content {
    padding: 2rem;
    max-width: 80vw;
  }
}

/* Overrides */
button.highlight__vid-hotspot.highlight__hotspot--interactive::before {
  animation: none;
  background: none;
  box-shadow: none;
}

/* The Close Button */

.close_button {
  display: block;
  margin-bottom: 1em;
}

.close_button {
  background-color: var(--pale-blue-1);
  padding: 0.5em;
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  left: 0;
  border: 0;
  overflow: hidden;
  padding: 10px;
}

.close_button:hover {
  background-color: var(--deep-blue-2);
  color: #fff;
}
</style>
