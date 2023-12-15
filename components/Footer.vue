<template>
  <footer>
    <CenteredSection name="Footer">
      <p id="1">
        1. Omdia (2022). Moving AI from Idea to Execution – Retail [E-book].
      </p>
      <p id="2">
        2. According to UN data, around one third of all food produced globally
        each year (or 1.3 billion tons) is wasted. Food and Agriculture
        Organization of the United Nations.
        <a href="https://www.fao.org/3/mb060e/mb060e.pdf" target="_blank"
          >Global Food Losses and Food Waste</a
        >.
      </p>
      <p>
        © 2023 Lenovo. All rights reserved. Lenovo and the Lenovo logo are
        trademarks or registered trademarks of Lenovo. NVIDIA and the NVIDIA
        logo are trademarks and/or registered trademarks of NVIDIA Corporation
        in the U.S. and other countries.
      </p>
      <p>
        Other company, product and service names may be trademarks or service
        marks of others.
      </p>
      <dialog
        class="privacy__dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
      >
        <h4 class="privacy__title">Privacy Consent</h4>
        <p>
          This website uses cookies to anonymously analyse usage. For more
          information read our
          <a href="https://www.lenovo.com/privacy/" target="_blank"
            >Privacy Policy</a
          >. You can change your preference at any time by clicking "Update
          privacy settings".
        </p>
        <div class="privacy__buttons">
          <Button
            class="privacy__button privacy__button"
            data-consent="all"
            color="blue"
          >
            Accept all
          </Button>
          <Button
            class="privacy__button privacy__button"
            data-consent=""
            color="blue"
          >
            Only essential
          </Button>
        </div>
        <p class="privacy__current-preference"></p>
      </dialog>
      <p>
        <Button id="update-privacy-settings" color="blue"
          >Update privacy settings</Button
        >
      </p>
    </CenteredSection>
  </footer>
</template>

<script>
import 'privacy-consent-policy/src/privacy'
</script>

<style lang="scss" scoped>
@import 'privacy-consent-policy/src/privacy.scss';
footer {
  background: var(--pale-blue-2);
  text-align: center;
  padding: 3rem 1rem;
  font-size: 0.9rem;
}

.privacy {
  &__dialog {
    background: var(--pale-blue-2);
  }
  &__buttons {
    display: flex;
    justify-content: center;
    gap: 2px;
  }
  &__button {
    border-radius: 0;
  }
}
</style>
