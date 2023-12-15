<template>
  <div class="form" ref="form">
    <CenteredSection name="Form">
      <div class="form__grid">
        <div class="form__content">
          <p>
            <img src="/images/chat.svg" alt="" loading="lazy" />
          </p>
          <h2>How can I help you today?</h2>
          <p>
            The Lenovo edge computing and retail solutions teams are here to
            discuss your goals and problems and help you find the best
            solutions.
          </p>
          <p>
            You can also make use of the Lenovo AI Center of Discovery and
            Excellence, which offers workshops, proof of technology demos,
            advice on best practices, and more.
          </p>
          <p>Complete the form to arrange a conversation.</p>
        </div>
        <div class="form__form">
          <form id="mktoForm_28419"></form>
          <ModalThanks
            v-if="showThankyouForm"
            @close="showThankyouForm = false"
          ></ModalThanks>
        </div>
      </div>
    </CenteredSection>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showThankyouForm: false,
    }
  },

  mounted() {
    if (this.$route.query.popup == 'true') {
      this.showThankyouForm = true
    }

    // Marketo form
    const mkto = document.createElement('script')
    document.body.append(mkto)
    mkto.addEventListener('load', () => {
      MktoForms2.loadForm('//pages.lenovo.com', '183-WCT-620', 28419)
    })
    mkto.src = '//pages.lenovo.com/js/forms2/js/forms2.min.js'

    // Chat widget
    const i = document.createElement('script')
    i.type = 'text/javascript'
    i.async = true
    i.src = 'https://eu4-track.inside-graph.com/gtm/IN-1001026/include.js'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(i, s)
  },

  methods: {
    scrollToForm() {
      this.$refs.form.scrollIntoView({ behaviour: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  background: var(--pale-blue-2);
  padding: 2rem 0;

  &__grid {
    display: grid;
    gap: 1rem;

    @media (min-width: 800px) {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    @media (min-width: 1200px) {
      gap: 8rem;
    }

    h2 {
      font-weight: 900;
      color: var(--signature-red);
      font-size: 2rem;
    }
  }
}
</style>

<style lang="scss">
.mktoForm {
  width: unset !important;
  font: inherit !important;

  .mktoFormCol {
    float: none !important;
  }

  .mktoFieldWrap {
    width: 100%;
  }

  .mktoOffset {
    display: none;
  }

  input[type='text'],
  input[type='email'],
  input[type='tel'],
  select {
    width: 100% !important;
    border: 0;
    padding: 0.5rem 1rem !important;
  }
  .mktoCheckboxList {
    width: 100% !important;
  }

  .mktoButton {
    background: var(--signature-red) !important;
    border: 0 !important;
    &:hover,
    &:focus {
      background-color: var(--mid-red-1) !important;
    }
    &:active {
      background-color: var(--deep-red-2) !important;
    }
  }
}
</style>
