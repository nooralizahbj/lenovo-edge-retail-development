<template>
  <div class="assets">
    <CenteredSection name="Resources" id="">
      <div class="assets__container">
        <div class="glide">
          <div class="glide__track" data-glide-el="track">
            <div class="glide__slides">
              <Asset
                class="glide__slide"
                title="Revolutionizing Retail and Restaurant operations with edge AI"
                image="/images/asset-New-ebook-desktop.jpg"
                imageMobile="/images/asset-New-ebook-mobile.jpg"
                cta="Download the eBook"
                url=""
                @click="$emit('showEbookForm')"
                id="button_carousel_download_ebook"
              >
                <p>
                  How edge-based AI technology enables the retail, restaurant,
                  and quick-service restaurant (QSR) industries to address big
                  challenges and deliver better retail operations and customer
                  experiences.
                </p>
              </Asset>
              <Asset
                class="glide__slide"
                title="Solution Brief: How Edge and AI solutions are transforming Retail"
                image="/images/asset-ai-solutions1-desktop.jpg"
                imageMobile="/images/asset-ai-solutions1-mobile.jpg"
                cta="Read the solution brief"
                url="/pdfs/Edge-AI-Retail-Solution-Brief.pdf"
              >
                <p>
                  Learn how, with Lenovo and NVIDIA Edge AI key technologies for
                  retail and restaurants, you can drive customer experience and
                  achieve operational efficiencies.
                </p>
              </Asset>
              <Asset
                class="glide__slide"
                title="Demystifying Edge AI from Proof of Concept to Production"
                image="/images/asset-ai-webinar-desktop.png"
                imageMobile="/images/asset-ai-webinar-mobile.png"
                cta="View the webinar"
                url="https://info.nvidia.com/demystifying-edge-ai.html"
              >
                <p>
                  Join Lenovo and NVIDIA to learn how we are enabling
                  organizations to bring automation, efficiency and improved
                  consumer experiences to their operations.
                </p>
              </Asset>
              <Asset
                class="glide__slide"
                title="Moving AI from Idea to Execution"
                image="/images/asset-moving-ai-desktop.jpg"
                imageMobile="/images/asset-moving-ai-mobile.jpg"
                cta="Read the eBook"
                url="/pdfs/na-mini-ebook-lenovo-nvidia-retail-power-of-2.pdf"
              >
                <p>
                  Learn how Lenovo and NVIDIA can help retailers harness the
                  value of data and transform business, in this 14-page e-book
                  created by global research company OMDIA.
                </p>
              </Asset>
              <Asset
                class="glide__slide"
                title="Solution brief: Real-time AI performance at the Edge"
                image="/images/asset-real-time-ai-desktop.jpg"
                imageMobile="/images/asset-real-time-ai-mobile.jpg"
                cta="Read the solution brief"
                url="/pdfs/na-solution-brief-edge-computing-lenovo-nvidia-power-of-2.pdf"
              >
                <p>
                  Learn how you can generate faster insights from AI deployed
                  across thousands of devices using Lenovo AI edge servers
                  powered by NVIDIA EGXTM platform. Use cases discussed include
                  inventory optimization and shrinkage reduction in retail
                  stores.
                </p>
              </Asset>
              <Asset
                class="glide__slide"
                title="Lenovo Think AI Podcast"
                image="/images/asset-podcast-desktop.jpg"
                imageMobile="/images/asset-podcast-mobile.jpg"
                cta="Listen to the podcast"
                url="https://lenovopodcasts.podbean.com/"
              >
                <p>
                  Join industry experts and share insights, knowledge and
                  opinion on the challenges and opportunities of bringing AI and
                  Computer Vision from the realm of research to real business.
                  Listen to our retail-focused episode.
                </p>
              </Asset>
              <Asset
                class="glide__slide"
                title="Solution Brief AI Training and Inference Lenovo + NVIDIA "
                image="/images/asset-ai-training-desktop.jpg"
                imageMobile="/images/asset-ai-training-mobile.jpg"
                cta="Read the solution brief"
                url="/pdfs/na-solution-brief-ai-training-and-inference-lenovo-nvidia-power-of-2pdf.pdf"
              >
                <p>
                  Learn how you can transform your company with an AI-ready
                  infrastructure strategy that enables faster ROI, increased
                  productivity, and streamlined manageability. Build new
                  capabilities including process automation, conversational AI,
                  customer recommendations, and more.
                </p>
              </Asset>
              <Asset
                class="glide__slide"
                title="The Five Most Common IT Hardware Mistakes in AI"
                image="/images/asset-mistakes-desktop.jpg"
                imageMobile="/images/asset-mistakes-mobile.jpg"
                cta="Read the guide"
                url="/pdfs/LENOVO_5 mistake_Guide_05.pdf"
              >
                <p>
                  Read about the five most common IT hardware mistakes you can
                  make in AI and why you need specialist expertise to select the
                  best IT hardware solution for your project.
                </p>
              </Asset>
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
  data() {
    return {}
  },

  mounted() {
    new Glide('.assets .glide', {
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

h2 {
  color: var(--signature-red);
  font-size: 2rem;
  font-weight: 900;
}

.assets {
  /*background: var(--pale-blue-2);*/
  padding: 0rem 0 1rem;
  scroll-margin-top: 3rem;

  &__container {
    background: var(--white);
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 0.1);
    padding: 1rem;
    margin: 0rem;
  }
}

.glide {
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

  &__slide {
    height: unset;
  }

  .chevron {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    box-shadow: inset 2px 2px 0 1px var(--white);
    transform: rotate(-45deg);
  }

  &__arrow--left {
    left: -3rem;
    border-radius: 50% 0 0 50%;
    padding-right: 0;
  }

  &__arrow--right {
    right: -3rem;
    padding-left: 0;
    border-radius: 0 50% 50% 0;

    .chevron {
      transform: rotate(135deg);
    }
  }
}
</style>
