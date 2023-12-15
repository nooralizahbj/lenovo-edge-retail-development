<template>
  <div class="products" id="products">
    <CenteredSection name="ThinkEdge Products">
      <h2>Lenovo ThinkEdge Products</h2>
      <div class="products__carousel">
        <div class="glide">
          <div class="glide__track" data-glide-el="track">
            <div class="glide__slides">
              <Product
                class="glide__slide"
                image="/images/SE10_antennas.png"
                name="ThinkEdge SE10 Series"
                details=""
                datasheet="/pdfs/Lenovo_ThinkEdge_SE10.pdf"
              >
                <p>
                  ThinkEdge SE10 Series, including the SE10 and SE10-I, are the
                  most versatile edge clients in our ThinkEdge portfolio. In
                  addition to being rugged and modular, the SE10 series is
                  designed to capture data at the outermost edge of your
                  organization, delivering unrestricted entry performance.
                </p>
              </Product>
              <Product
                class="glide__slide"
                image="/images/SE30.png"
                name="ThinkEdge SE30"
                details=""
                datasheet="https://techtoday.lenovo.com/gb/en/solutions/media/10189/download"
              >
                <p>
                  ThinkEdge SE30 is an IoT-ready platform built for industrial
                  computing and challenging edge applications, with durable
                  performance even in harsh environments.
                </p>
              </Product>
              <Product
                class="glide__slide"
                image="/images/SE50.png"
                name="ThinkEdge SE50"
                details=""
                datasheet="https://techtoday.lenovo.com/us/en/solutions/media/10301/download"
              >
                <p>
                  ThinkEdge SE50 is designed for versatile applications that
                  require higher analytics and data processing at the edge. The
                  embedded edge compute device offers a flexible range of I/O
                  capabilities following industrial standards.
                </p>
              </Product>
              <Product
                class="glide__slide"
                image="/images/SE70.png"
                name="ThinkEdge SE70"
                details="https://techtoday.lenovo.com/origind8/sites/default/files/2022-01/ThinkEdge-SE70-Flyer_2.pdf"
                datasheet=""
              >
                <p>
                  Lenovo ThinkEdge SE70 is a powerful and flexible AI edge
                  platform for enterprise, powered by the NVIDIA Jetson Xavier
                  NX platform. It's designed to meet transformation needs from
                  logistics, transportation and smart cities to retail,
                  healthcare and manufacturing.
                </p>
              </Product>
              <Product
                class="glide__slide"
                image="/images/SE350.png"
                name="ThinkSystem SE350"
                details="https://www.lenovo.com/gb/en/data-center/servers/edge/ThinkSystem-SE350/p/77TM7DSSE35"
                datasheet="https://lenovopress.com/lp1168-thinksystem-se350-edge-server"
              >
                <p>
                  ThinkSystem SE350 is a rugged compact-sized and
                  NVIDIA-Certified Edge server with a focus on smart
                  connectivity, security, and manageability for harsh
                  environments. It also allows you to run VMware and Microsoft
                  HCI at the Edge.
                </p>
              </Product>
              <Product
                class="glide__slide"
                image="/images/SE450.png"
                name="ThinkEdgeSE450"
                details="https://www.lenovo.com/gb/en/data-center/edge-ai"
                datasheet="https://s7d1.scene7.com/is/content/Lenovoassetsprod/na-datasheet-lenovo-nvidia-thinkedge-se450-power-of-2pdf?refId=fe0e4566-2285-46ad-9e83-a0af58515670"
              >
                <p>
                  ThinkEdge SE450 is an NVIDIA-certified server that brings the
                  data centre to the Edge. Powered by the latest Intel Xeon
                  CPUs, it is designed to virtualise traditional IT applications
                  as well as new transformative AI systems.
                </p>
              </Product>
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
    </CenteredSection>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'

export default {
  mounted() {
    new Glide('.products .glide', {
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

.products {
  scroll-margin-top: 6rem;
  background: linear-gradient(
    to bottom,
    var(--white) 35%,
    var(--pale-blue-2) 35%
  );

  &__carousel {
    padding: 0 3rem;
    @media (max-width: 700px) {
      padding: 0 1rem;
    }
  }
}

h2 {
  color: var(--signature-red);
  font-size: 2rem;
  font-weight: 900;
}

.glide {
  &__track {
    padding-top: 3rem;
  }

  &__slide {
    height: unset;
  }

  &__arrows:focus &__arrow,
  &__arrows:hover &__arrow {
    animation-play-state: paused;
  }

  &__arrow {
    top: 0;
    color: var(--deep-purple-2);
    font-size: 2rem;
    font-weight: 900;
    border: 0;
    box-shadow: none;
    padding: 0;
    margin: 0;

    .chevron {
      display: block;
      width: 2rem;
      height: 2rem;
      box-shadow: inset 3px 3px 0 2px var(--deep-purple-2);
      transform: rotate(-45deg);
    }

    &--left {
      left: -1rem;
      animation: bounceLeft 1s ease-in-out infinite alternate;
    }

    &--right {
      right: -1rem;
      animation: bounceRight 1s ease-in-out infinite alternate;

      .chevron {
        transform: rotate(135deg);
      }
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
