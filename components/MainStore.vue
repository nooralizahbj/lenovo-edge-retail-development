<template>
  <CenteredSection name="Store">
    <div class="store">
      <Transition name="floor" mode="out-in">
        <Floor
          title="Sparks the Industry 4.0 revolution"
          :floor="1"
          baseImage="/images/warehouse-floor-2024.svg"
          v-if="store.floor === 1"
          description=""
        >
          <template v-slot:highlights>
            <Highlight
              id="highlight--1-1"
              :x="20"
              :y="66"
              :width="32"
              image="/images/warehouse-sustainability.svg"
              :floor="1"
              icon="/images/destop_warehouse-01-ani.gif"
              iconMobile="/images/mobile_warehouse-01-ani.gif"
              label="Sustainability"
            >
              <h2>Smarter technology makes a sustainable difference</h2>
              <p>
                Sustainability is more critical than ever before as investors value ESG governance, customers favour brands and products that embrace environmental consciousness, and governments  implement ever tightening sustainability policies. Embrace a sustainable future and stay ahead of the curve with Lenovo sustainability solutions.
              </p>
              <TickListVideo
                :items="[
                  {
                    title: 'Reuse, refurbish & recycle',
                    description: '<strong>Lenovo Asset Recovery Services</strong> Maximizes the reuse, recycling and/or disposal of end-of-life products, parts and waste to mitigate security concerns and maximize asset value, sustaining an environmentally conscious circular economy.',
                    floor: 1,
                    video: '/video/Lenovo Asset Recovery Services.mp4',
                    poster: '#',
                  },
                  {
                    title: 'Manage the carbon footprint of your devices seamlessly',
                    description:
                      'Offset the estimated carbon emissions associated with new or existing Lenovo devices across your IT fleet with <strong>Lenovo CO2 Offset Services</strong> and support verified climate action projects around the world.',
                    floor: 1,
                    video: '/video/Lenovo C02 Offset Services (1080p).mp4',
                    poster: '#',
                    x: 0,
                    y: 0
                  },
                  {
                    title: 'Digitizing ESG data management across the value chain',
                    description:
                      '<strong>Lenovo ESG Navigator</strong> enables you to monitor key ESG metrics at manufacturing sites and delivers near-real-time insights on GHG emissions and energy use.',
                    floor: 1,
                    video: '/video/Lenovo ESG Navigator.mp4',
                    poster: '#',
                    x: 0,
                    y: 0
                  },
                ]"
              />
            </Highlight>
            <Highlight
              id="highlight--1-4"
              :x="69"
              :y="82"
              :width="36"
              image="/images/warehouse-wessystem.svg"
              :floor="1"
              icon="/images/destop_office-02-ani.gif"
              iconMobile="/images/mobile_office-02-ani.gif"
              label="Supply chain"
            >
              <h2>Centralize and automate supply chain management in one single hub</h2>
              <p>
                Enable your business with immediate visibility, coordination, and management across your entire system with our <strong>Warehouse Execution System (WES)</strong> and award-winning <strong>Supply Chain Intelligence (SCI)</strong> solutions, made to fit for your business’ operations.
              </p>
              <TickListNew
                :items="[
                  {
                    title: 'Streamlined warehouse management made for efficiency',
                    description:
                      'Lenovo’s Warehouse Execution System is a unified data and command gateway between the <strong>Warehouse Management System (WMS)</strong> and the Warehouse Control System (WCS), providing a comprehensive and real-time overview of warehouse operations.',
                  },
                  {
                    title: 'Efficient high-quality production with efficient decision-making',
                    description:
                      'Our AI-powered Supply Chain Intelligence Solution lets you manage your entire supply chain operations on one centralized hub, allowing you to manage every aspect of your business from one integrated platform.',
                  },
                  {
                    title: 'Proven and measurable supply chain optimization',
                    description:
                      'When used together, our supply chain management solutions deliver multiple efficiency benefits: <br>- 60% reduction in decision making time <br>-20% cost reduction in manufacturing and logistics <br>-4.8% boost in revenue',
                  },
                ]"
              />
            </Highlight>
            <Highlight
              id="highlight--1-3"
              :x="40"
              :y="90"
              :width="20"
              :floor="1"
              icon="/images/destop_office-02-ani.gif"
              iconMobile="/images/mobile_office-02-ani.gif"
              label="Scale"
            >
              <h2>Scale round-the-clock vigilance for your organization</h2>
              <p>
                Experience always-on monitoring without physical limits when you equip your business with Lenovo Manufacturing Solutions :
              </p>
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.3rem">Gain complete oversight over your production process</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      '<strong>Lenovo Industrial Computer Vision</strong> utilizes AI technologies to analyze and interpret real-time visual data for different use scenarios, including quality inspection, safety supervision, equipment monitoring, and general monitoring.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.3rem">Optimize your operations, security and employee welfare</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Lenovo’s <strong>Asset Tracking</strong> service incorporates Real Time Locating System (RTLS) technology, providing accurate and reliable tracking services through RFID, Wi-Fi, Bluetooth, ultra-wideband (UWB), infrared, and GPS whether it’s tracking your warehouse, inventory, personnel, or security threats.',
                  },
                  {
                    title: '',
                    description:
                      'Leverage AI-driven technology and tracking services to enhance your employees’ welfare and manufacturing line efficiency.',
                  },
                ]"
              />
            </Highlight>
            <Highlight
              id="highlight--1-2"
              :x="44"
              :y="41"
              :width="20"
              :floor="1"
              icon="/images/destop_warehouse-03-ani.gif"
              iconMobile="/images/mobile_warehouse-03-ani.gif"
              label="Work systems"
            >
              <h2>Robot automation designed to collaborate seamlessly with a human workforce</h2>
              <p>
                Lenovo’s <strong>Pick Assist AMR (Autonomous Mobile Robots)</strong> utilizes the most advanced “order-to-person” collaborative mode, minimising human intervention whilst maximising efficiency within your warehouse operations.
              </p>
              <h3 style="font-weight:800; margin-bottom:-0.3rem">Logistics powered by human and robot synergy</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Lenovo’s Pick Assist AMR intelligently plans the optimal routes to autonomously navigate through dynamic environments to serve your logistical needs at every stage of order fulfillment.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.3rem">50-80% reduction on laborcosts</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Our Pick Assist AMR technology delivers significant cost advantages by reducing labor costs, providing you with visible return on investments within 10 to 24 months.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.3rem">Unparalleled flexibility</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Pick Assist AMR technology is ready to use out-of-the-box, providing you maximum convenience to begin optimizing your warehouse operations.',
                  },
                  {
                    title: '',
                    description:
                      'Customize your fleet across a range of robot types in flexible quantities, allowing you to tailor your solution to your specific business and facility requirements.',
                  },
                ]"
              />
            </Highlight>
            <!-- <VideoHighlight
              x="38"
              y="81"
              floor="1"
              videoUrl="/video/Lenovo-Supply-Chain.mp4"
              posterUrl="/video/lenovo-supply-chain-poster.jpg"
            />
            <VideoHighlight
              x="33"
              y="56"
              floor="1"
              videoUrl="/video/Robot_Dog-3.mp4"
              posterUrl="#"
            />
            <VideoHighlight
              x="51.5"
              y="34"
              floor="1"
              videoUrl="/video/Automated_guided_forklift_(AGF)-2.mp4"
              posterUrl="#"
            /> -->
          </template>
        </Floor>
      </Transition>

      <Transition name="floor" mode="out-in">
        <Floor
          title="Experience the future of store retail"
          :floor="2"
          baseImage="/images/shop-2024.svg"
          v-if="store.floor === 2"
          description=""
        >
          <template v-slot:highlights>
            <Highlight
              id="highlight--2-1"
              :x="73"
              :y="75"
              :width="15"
              :floor="2"
              icon="/images/destop_retail-01-ani.gif"
              iconMobile="/images/mobile_retail-01-ani.gif"
              label="Customer experiences"
            >
              <h2>Fortified customer loyalty</h2>
              <p>
                Customers need more reasons to shop with you than just “price”.
                Lenovo equips Retailers with the smarter technologies to
                transform the customer shopping experience and increase the
                customer loyalty.
              </p>
              <TickList
                :items="[
                  {
                    title: 'Better, more appealing marketing',
                    description: 'with our ESLs and Digital Signage solutions.',
                  },
                  {
                    title: 'New ways to engage customers',
                    description:
                      'including Virtual Reality (VR) and Augmented Reality (AR).',
                  },
                  {
                    title: 'Faster, easier transactions',
                    description:
                      'with mobile-first technologies and optimized store operations.',
                  },
                ]"
              />
            </Highlight>
            <Highlight
              id="highlight--2-2"
              :x="43"
              :y="56"
              :width="14"
              :floor="2"
              icon="/images/destop_retail-02-ani.gif"
              iconMobile="/images/mobile_retail-02-ani.gif"
              label="Store optimization"
            >
              <h2>Store optimization</h2>
              <p>
                Use anonymized data and video to reveal new insights into
                customer and staff behavior. These insights can help you:
              </p>
              <TickList
                :items="[
                  {
                    title: 'Optimize staff schedules',
                  },
                  {
                    title: 'Improve store planning',
                    description: 'by placing goods in optimal locations.',
                  },
                  {
                    title: 'Create a digital twin of your store',
                    description:
                      'with Lenovo ThinkReality AR-powered smart glasses to enable smarter store design.',
                  },
                ]"
              />
              <p>
                <strong
                  >Outcomes can include higher sales and more efficient use of
                  space.</strong
                >
              </p>
            </Highlight>
            <Highlight
              id="highlight--2-3"
              :x="35"
              :y="68"
              :width="18"
              :floor="2"
              icon="/images/destop_retail-03-ani.gif"
              iconMobile="/images/mobile_retail-03-ani.gif"
              label="Reduce friction"
            >
              <h2>Reduce customer friction and stock losses</h2>
              <p>
                Deliver a seamless checkout experience which is fast, easy and
                convenient.
              </p>
              <TickList
                :items="[
                  {
                    title: 'No more wait time',
                    description:
                      'with our Self Service Kiosk, customers can enjoy the fast and easy check-out experience, just like what they do online.',
                  },
                  {
                    title:
                      'Mitigate the business risk and digitalize the high-value business process',
                    description:
                      'by rapidly analyzing video data through computer vision, powered by Loss Prevention AI technology.',
                  },
                  {
                    title: 'Fix problems intelligently',
                    description:
                      'correcting most errors without the need to pull staff away from other duties.',
                  },
                ]"
              />
            </Highlight>
            <Highlight
              id="highlight--2-4"
              :x="56"
              :y="40"
              :width="15"
              :floor="2"
              icon="/images/destop_retail-04-ani.gif"
              iconMobile="/images/mobile_retail-04-ani.gif"
              label="Digital"
            >
              <h2>Make the physical digital:</h2>
              <p>
                Enhance the customer experience and optimize the store operation
                with our turnkey solutions:
              </p>
              <TickList
                :items="[
                  {
                    title: 'Bridging online and offline shopping experience',
                    description:
                      'through our next generation ESLs solution. Enjoy the personalized experience like  “buy online pick up in-store”, “click and collect”, and “membership promotion.”',
                  },
                  {
                    title: 'Streamline the operational work',
                    description:
                      'by automating the repetitive work through our Dynamic Pricing solution, and enabling remote control the shelf display through our Digital Shelving solution.',
                  },
                ]"
              />
            </Highlight>
            <Highlight
              id="highlight--2-5"
              :x="26"
              :y="42"
              :width="11"
              :floor="2"
              icon="/images/destop_warehouse-01-ani.gif"
              iconMobile="/images/mobile_warehouse-01-ani.gif"
              label="Food Waste"
            >
              <h2>Insights empowered by AI in every dimension of the store:</h2>
              <p>
                According to UN data, around one third of all food produced
                globally each year (or 1.3 billion tons) is wasted.
                <sup><a href="#2">2</a></sup>
              </p>
              <TickList
                :items="[
                  {
                    title: 'Reduce food waste',
                    description:
                      'by tracking and monitoring food on it’s route from field to shelf with smart end-to-end cold chain management.',
                  },
                  {
                    title:
                      'Improve store performance, optimize conversion, and enhance staff productivity',
                    description:
                      'with the Traffic Analysis solution which provides real-time insights and actionable recommendations based on the shopper behaviors and foot traffic data.',
                  },
                ]"
              />
            </Highlight>
            <!-- <VideoHighlight
              x="65"
              y="32"
              floor="2"
              videoUrl="#"
              posterUrl="#"
            /> -->
            <!-- <VideoHighlight
              x="60"
              y="54"
              floor="2"
              videoUrl="#"
              posterUrl="#"
            /> -->
            <!-- <VideoHighlight
              x="71"
              y="65"
              floor="2"
              videoUrl="/video/Lenovo-dynamic_Pricing_ESL_Subbed-04012024.mp4"
              posterUrl="#"
            />
            <VideoHighlight
              x="50"
              y="32"
              floor="2"
              videoUrl="/video/Lenovo_Digital_Shelving_Subbed-04012024.mp4"
              posterUrl="#"
            /> -->
          </template>
        </Floor>
      </Transition>
      <Transition name="floor" mode="out-in">
        <Floor
          title="Smarter brings productivity and simplicity together"
          :floor="3"
          baseImage="/images/office.svg"
          v-if="store.floor === 3"
          description=""
        > 
          <template v-slot:highlights>
            <Highlight
              id="highlight--3-1"
              :x="35"
              :y="43"
              :width="25"
              image="/images/office-door.svg"
              :floor="3"
              icon="/images/destop_office-01-ani.gif"
              iconMobile="/images/mobile_office-01-ani.gif"
              label="Secure devices"
            >
              <h2>A new definition of “safe” is required.</h2>
              <p>
                Retaining the trust of your customers and partners means
                protecting their private data from cyber-attacks and loss.
              </p>
              <TickList
                :items="[
                  {
                    title: 'Better protection',
                    description:
                      'With Lenovo ThinkShield, you can be confident that your customers, your people, and your organizations are all protected.',
                  },
                  {
                    title: 'Optimize security investments',
                    description:
                      'Purpose-built Managed eXtended Detection & Response (MxDR) Services give you the capability to detect the right threats, respond with the right actions, all with the agility and adaptability you need.',
                  },
                  {
                    title: 'Built-in Security',
                    description:
                      'And Lenovo servers, including ThinkEdge systems retailers deploy at the edge, build in modern security features such as self-healing BIOS and self-encrypting drives to protect data and your business.',
                  },
                ]"
              />
            </Highlight>
            <Highlight
              id="highlight--3-2"
              :x="70"
              :y="70"
              :width="20"
              image="/images/office-desk2.svg"
              :floor="3"
              icon="/images/destop_office-02-ani.gif"
              iconMobile="/images/mobile_office-02-ani.gif"
              label="Transformation"
            >
              <h2>Transform to obtain AI and edge benefits sooner.</h2>
              <p>
                Digital transformation can be a long and challenging journey,
                but ambitious Retailers don’t stop there. They ask themselves
                how to realize the benefits.
              </p>
              <TickList
                :items="[
                  {
                    title: 'You can run faster',
                    description:
                      'when you choose interoperable hardware, software and services.',
                  },
                  {
                    title: 'Tested, validated and deployed',
                    description: 'by Lenovo experts.',
                  },
                ]"
              />
            </Highlight>
            <Highlight
              id="highlight--3-3"
              :x="31"
              :y="68"
              :width="20"
              image="/images/office-desk3.svg"
              :floor="3"
              icon="/images/destop_office-03-ani.gif"
              iconMobile="/images/mobile_office-03-ani.gif"
              label="Features"
            >
              <h2>Accelerate purposeful innovation everywhere</h2>
              <p>
                Our solutions not only help Retailers enhance the customer
                satisfaction, operational efficiency, and revenue opportunities,
                but also empower the employees in their daily work.
              </p>
              <TickList
                :items="[
                  {
                    title:
                      'Unlock up to 50% improvement in time to employee productivity',
                    description:
                      'with a digital workplace culture that gives them seamless collaboration and increased efficiency.',
                  },
                  {
                    title: 'Smarter solutions for the workplace:',
                    description:
                      'Keep employees connected no matter where they’re working. Lenovo collaboration solutions like the ThinkSmart One + Controller feature the Intel vPro<sup>®</sup> platform for easy remote manageability.',
                  },
                  {
                    title: 'Transform your business',
                    description:
                      'with next generation technology, automation and tools that free up your IT Support teams and leverage external expertise to deliver business efficiency through Lenovo Digital Workplace Solutions.',
                  },
                  {
                    title: 'Manage carbon footprints',
                    description:
                      'and support UN and Gold Standard vetted climate action projects with Lenovo CO<sub>2</sub> Offset Services.',
                  },
                  {
                    title: 'Reuse, refurbish, and recycle',
                    description:
                      'your retiring IT assets with secure data disposal through Lenovo Asset Recovery Services.',
                  },
                ]"
              />
            </Highlight>
            <Highlight
              id="highlight--3-4"
              :x="79"
              :y="50"
              :width="35"
              image="/images/office-servers.svg"
              :floor="3"
              icon="/images/destop_office-04-ani.gif"
              iconMobile="/images/mobile_office-04-ani.gif"
              label="Prevent disruption"
            >
              <h2>The path to future-ready IT starts here</h2>
              <p>
                Make sure downtime doesn’t come between your customers and your
                services. Build a foresighted tech team while leave the heavy
                lifting with us.
              </p>
              <TickList
                :items="[
                  {
                    title: 'Innovate without limits',
                    description:
                      'Lenovo TruScale combines the cloud flexibility and the on-prem security and control, all into one smarter alternative: managed, sustainable, cost effective and fast!',
                  },
                  {
                    title: 'Reduce energy consumption',
                    description:
                      'with accurate utilization and metering technology that prevents over-provisioning of systems.',
                  },
                  {
                    title: 'Eliminate the trade-off',
                    description:
                      'between performance, energy efficiency, and cost-savings with Lenovo Neptune™ direct water cooling that delivers 95% heat removal efficiency and 40% lower power consumption',
                  },
                  {
                    title: 'Always be prepared',
                    description: 'and respond to incidents with our support.',
                  },
                  {
                    title: 'Be innovative and strategic',
                    description:
                      'with our Advisory and Professional Services. Free your team from the hassle of operating inefficient infrastructure and evolve to future-proof IT.',
                  },
                ]"
              />
            </Highlight>
            <Highlight
              id="highlight--3-5"
              :x="50"
              :y="60"
              :width="50"
              image="/images/office-misc.svg"
              :nonInteractive="true"
              :floor="3"
            >
            </Highlight>
            <!-- <VideoHighlight
              x="67"
              y="33"
              floor="3"
              videoUrl="/video/Lenovo-Server.mp4"
              posterUrl="/video/lenovo-server-poster.jpg"
            />
            <VideoHighlight
              x="52"
              y="68"
              floor="3"
              videoUrl="/video/Lenovo-DWS.mp4"
              posterUrl="/video/lenovo-dws-poster.jpg"
            />
            <VideoHighlight
              x="46"
              y="56"
              floor="3"
              videoUrl="/video/Lenovo-TruScale.mp4"
              posterUrl="/video/lenovo-truscale-poster.jpg"
            />
            <VideoHighlight
              x="27"
              y="60"
              floor="3"
              videoUrl="/video/Lenovo-ASRS.mp4"
              posterUrl="#"
            /> -->
          </template>
        </Floor>
      </Transition>
      <Transition name="floor" mode="out-in">
        <Floor
          title="Reimagine retail across every stage of your business"
          :floor="4"
          baseImage="/images/LEN002-LNFR-Static 2.png"
          v-if="store.floor === 4"
        >
          <template v-slot:highlights>
                
            <VideoHighlightFloor4
              x="55"
              y="57"
              floor="4"
              videoUrl="/video/Lenovo NFR Animation 28122023.mp4"
              posterUrl="/images/LEN002-LNFR-Static 2.png"
            />
          </template>
        </Floor>
      </Transition>
      <img
        src="/images/lenovo-logo.png"
        alt="Lenovo"
        class="store__lenovo-logo"
      />
    </div>
  </CenteredSection>
</template>

<script>
import { useStore } from '../store/store'

export default {
  data() {
    return {
      store: useStore(),
    }
  },
}
</script>

<style lang="scss" scoped>
.store {
  background: var(--pale-blue-1);
  position: relative;
  height: calc(100vh);
  max-height: 800px;

  @media (max-width: 920px) {
    height: auto;
    max-height: unset;
  }
  @media (max-width: 700px) {
    margin-left: -1rem;
    margin-right: -1rem;
    margin-top: 0;
  }

  &__lenovo-logo {
    position: absolute;
    right: 0;
    top: 0;
    height: 100px;
    @media (min-width: 700px) {
      top: auto;
      bottom: 48%;
    }
    @media (min-width: 800px) {
      top: auto;
      bottom: 34%;
    }
    @media (min-width: 921px) {
      top: auto;
      bottom: calc(4rem - 20px);
      height: 10rem;
    }
  }
}

.floor-enter-active,
.floor-leave-active {
  transition: all 600ms ease;
}
.floor-enter-from {
  transform: translateY(100px);
  filter: blur(20px);
  opacity: 0;
}
.floor-enter-to {
  transition-delay: 300ms;
}
.floor-leave-to {
  transform: translateY(-100px);
  filter: blur(20px);
  opacity: 0;
}
</style>
