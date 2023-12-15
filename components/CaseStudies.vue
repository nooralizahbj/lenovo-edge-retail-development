<template>
  <section class="case-studies" aria-label="Case Studies">
    <div class="case-studies__carousel">
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <CaseStudy
              title="Fueling award-winning customer service"
              image="/images/lenovo_enoc_casestudy-pic.jpg"
              url="https://www.lenovo.com/us/en/case-studies-customer-success-stories/emirates-national-oil-company"
              class="glide__slide"
            >
              <p>
                ENOC’s Retail division equipped its national network of almost
                200 gas stations with robust Lenovo Edge servers, boosting
                availability and customer service.
              </p>
            </CaseStudy>
            <CaseStudy
              title="Keeping car washes spotlessly safe"
              image="/images/lenovo_sonnys_casestudy-pic.jpg"
              url="https://www.lenovo.com/us/en/case-studies-customer-success-stories/sonnys-enterprises"
              class="glide__slide"
            >
              <p>
                Sonny's Enterprises uses Lenovo ThinkEdge SE70 edge computing
                devices, powered by NVIDIA, to enable a first-of-its-kind
                computer vision application that automatically detects risky
                conditions in car washes.
              </p>
            </CaseStudy>
            <CaseStudy
              title="Shaping the self-checkout of tomorrow"
              image="/images/case-kroger.jpg"
              url="https://www.lenovo.com/us/en/case-studies-customer-success-stories/kroger"
              class="glide__slide"
            >
              <p>
                Large US retailer Kroger reduced customer friction and stock
                losses with a Lenovo AI retail solution featuring powerful edge
                AI servers, the NVIDIA Accelerated Computing AI platform, and
                Everseen Visual AI.
              </p>
            </CaseStudy>
            <CaseStudy
              title="Smoothing coffee operations at the edge"
              image="/images/case-coffee.jpg"
              url="https://www.lenovo.com/us/en/case-studies-customer-success-stories/strauss-coffee-romania"
              class="glide__slide"
            >
              <p>
                Lenovo ThinkSystem SE350 edge servers form an essential part of
                Strauss Coffee’s SCADA system. Connected to 8,000 equipment
                sensors, the servers control and collect data from more than
                42,000 digital devices.
              </p>
            </CaseStudy>
            <CaseStudy
              title="Quicker, more convenient casual dining"
              image="/images/case-eggs.jpg"
              url="https://www.lenovo.com/us/en/resources/data-center-solutions/case-studies/EGGS-N-THINGS/"
              class="glide__slide"
            >
              <p>
                Popular Japanese casual dining chain EGGS ‘N THINGS created a
                self-service experience with the same level of customer
                satisfaction as a full-service restaurant, by putting customer
                data to work using ThinkSystem SE350 edge servers – and no need
                for a server room.
              </p>
            </CaseStudy>
          </div>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button
            class="glide__arrow glide__arrow--left"
            data-glide-dir="<"
            title="Back"
          >
            <i class="chevron"></i>
          </button>
          <button
            class="glide__arrow glide__arrow--right"
            data-glide-dir=">"
            title="Next"
          >
            <i class="chevron"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Glide from '@glidejs/glide'

export default {
  mounted() {
    new Glide('.case-studies__carousel .glide', {
      type: 'carousel',
      perView: 3,
      gap: 12,
      /*autoplay: 5000,*/
      breakpoints: {
        980: {
          perView: 2,
        },
        650: {
          perView: 1,
        },
      },
    }).mount()
  },
}
</script>

<style lang="scss" scoped>
@import '@glidejs/glide/src/assets/sass/glide.core';
@import '@glidejs/glide/src/assets/sass/glide.theme';

.case-studies {
  margin: 1rem 0 3rem;
  scroll-margin-top: 6rem;

  &__carousel {
    padding: 0 3rem;
  }
}

.glide {
  &__slide {
    height: unset;
  }

  &__arrow {
    background: var(--signature-red);
    border: 0;
    width: 2rem;

    &:hover,
    &:focus {
      background: var(--deep-red-2);
    }
    &:active {
      background: var(--deep-red-1);
    }
  }
  .chevron {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    box-shadow: inset 2px 2px 0 1px var(--white);
    transform: rotate(-45deg);
  }

  &__arrow--left {
    left: -2rem;
    border-radius: 50% 0 0 50%;
    padding-right: 0;
  }

  &__arrow--right {
    right: -2rem;
    padding-left: 0;
    border-radius: 0 50% 50% 0;

    .chevron {
      transform: rotate(135deg);
    }
  }
}

@keyframes bounceLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(1rem);
  }
}

@keyframes bounceRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1rem);
  }
}
</style>
