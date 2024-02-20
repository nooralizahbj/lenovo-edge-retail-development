<template>
  <ul class="video-list">
    <div>
      <div class="vertical-title">
        <div>
          <strong>{{ title }}</strong>
        </div>
        <div>
          <button
            class="highlight__vid-hotspot highlight__hotspot--interactive"
            @click="showVideoModal = true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="23"
                height="23"
                rx="11.5"
                fill="#E1251B"
              />
              <rect
                x="0.5"
                y="0.5"
                width="23"
                height="23"
                rx="11.5"
                stroke="#E1251B"
              />
              <path
                d="M8.33334 7.32618C8.33334 6.67874 8.33334 6.35502 8.46834 6.17657C8.58594 6.02111 8.76569 5.92491 8.96028 5.91329C9.18363 5.89995 9.45299 6.07952 9.99169 6.43866L17.0021 11.1122C17.4472 11.409 17.6697 11.5574 17.7473 11.7444C17.8151 11.9079 17.8151 12.0916 17.7473 12.2551C17.6697 12.4422 17.4472 12.5905 17.0021 12.8873L9.99169 17.5609C9.45299 17.92 9.18363 18.0996 8.96028 18.0862C8.76569 18.0746 8.58594 17.9784 8.46834 17.823C8.33334 17.6445 8.33334 17.3208 8.33334 16.6733V7.32618Z"
                fill="white"
                stroke="#E1251B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <li v-if="description_1 !== ''">
        <span v-html="description_1"></span>
      </li>
      <li v-if="description_2 !== ''">
        <span v-html="description_2"></span>
      </li>
      <li v-if="description_3 !== ''">
        <span v-html="description_3"></span>
      </li>
    </div>
  </ul>
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
    title: String,
    description_1: String,
    description_2: String,
    description_3: String,
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
.vertical-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.video-list {
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
.highlight {
  &__vid-hotspot {
    // position: absolute;
    transform: translate(-20%, -30%);
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
