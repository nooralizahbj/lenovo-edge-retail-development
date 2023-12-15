<template>
  <div class="bannerBgColor" id="resources">
    <div class="container">
      <h2 class="banner-header">Resources</h2>
      <section
        class="bannerEbook dwld-margin-remove"
        aria-label="Testimonial"
        @click="$emit('showEbookForm')"
        id="banner_download_ebook"
      >
        <div class="banner-ebook-grid">
          <div class="ebook-grid-item">
            <h2>
              Revolutionizing Retail and Restaurant operations with edge AI
            </h2>
            <p>
              How edge-based AI technology enables the retail, restaurant, and
              quick-service restaurant (QSR) industries to address big
              challenges and deliver better retail operations and customer
              experiences.
            </p>
            <p>
              <Button
                @click="$emit('showEbookForm')"
                id="button_banner_download_ebook"
                >Download eBook</Button
              >
            </p>
          </div>
          <div class="ebook-grid-item">
            <img src="/images/e-guide-small-banner.png" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.bannerBgColor {
  /*background: var(--pale-blue-2);*/
  padding-top: 0rem;
}

.banner-header {
  color: var(--signature-red);
  font-size: 2rem;
  font-weight: 900;
  padding-top: 0;
  margin-top: 0;
}

.banner-ebook-grid {
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  max-width: 90%;
  margin: 0 auto;

  @media (min-width: 900px) {
    grid-template-columns: auto auto;
    max-width: 100%;
  }
}

.ebook-grid-item {
  display: flex;
  flex-direction: column;
  align-content: left;
  justify-content: center;
}

.ebook-grid-item img {
  max-width: 90%;
  height: auto;

  @media (min-width: 800px) {
    max-width: 350px;
    height: auto;
  }
}

.dwld-margin-remove {
  margin: 0 0 !important;
}

.bannerEbook {
  background: #0a0f1b url('/images/ai-ebook-download.webp') right bottom
    no-repeat;
  background-size: contain;
  color: var(--white);
  padding: 2rem;
  display: grid;
  gap: 0rem;
  grid-template-areas: 'content' 'quote';
  margin: 1rem 0;
  cursor: pointer;

  @media (min-width: 800px) {
    background: #0a0f1b url('/images/ai-ebook-download.webp') right no-repeat;
    background-size: contain;
    grid-template-areas: 'content quote';
    gap: 30%;
    padding: 2rem 2rem;
  }

  &__content {
    grid-area: content;

    h2 {
      font-weight: 900;
    }
  }

  &__quote {
    grid-area: quote;

    blockquote {
      margin: 0;
      font-size: 1.6rem;

      &::before,
      &::after {
        content: '';
        height: 1.5rem;
        width: 1.5rem;
        background: url('/images/quote-mark.png') center no-repeat;
        background-size: contain;
        display: inline-block;
      }
      &::before {
        margin: 0 0.5rem 0 -0.5rem;
      }
      &::after {
        margin-left: 0.5rem;
        transform: rotate(180deg);
      }
    }

    p {
      text-align: right;
    }
  }
}
</style>
