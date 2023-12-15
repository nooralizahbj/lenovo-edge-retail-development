<template>
  <section class="banner" id="case-studies" aria-label="Testimonial">
    <div class="banner__content">
      <h2>Retail solutions and success stories</h2>
      <p>
        Explore Lenovo solutions for retail powered by NVIDIA technologies and
        our specialized software partners, and be inspired by other retailers’
        transformations.
      </p>
    </div>
    <div class="banner__quote">
      <blockquote>
        They've allowed us to enable truly innovative capabilities without
        adding complexity
      </blockquote>
      <p>
        <Button
          url="https://www.lenovo.com/us/en/case-studies-customer-success-stories/kroger"
          >Kroger, large U.S. retailer</Button
        >
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.banner {
  background: var(--black) url('/images/road.webp') center no-repeat;
  background-size: cover;
  color: var(--white);
  padding: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-areas: 'content' 'quote';
  margin: 1rem 0;

  @media (min-width: 800px) {
    grid-template-areas: 'content quote';
    gap: 30%;
    padding: 6rem 2rem;
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
