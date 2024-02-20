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
                      'Lenovo’s <strong>Warehouse Execution System</strong> is a unified data and command gateway between the Warehouse Management System (WMS) and the Warehouse Control System (WCS), providing a comprehensive and real-time overview of warehouse operations.',
                  },
                  {
                    title: 'Efficient high-quality production with efficient decision-making',
                    description:
                      'Our AI-powered <strong>Supply Chain Intelligence</strong> Solution lets you manage your entire supply chain operations on one centralized hub, allowing you to manage every aspect of your business from one integrated platform.',
                  },
                  {
                    title: 'Proven and measurable supply chain optimization',
                    description:
                      'When used together, our <strong>Supply Chain Intelligence</strong> solutions deliver multiple efficiency benefits:<br>- 60% reduction in decision making time <br>-20% cost reduction in manufacturing and logistics <br>-4.8% boost in revenue',
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
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Gain complete oversight over your production process</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      '<strong>Lenovo Industrial Computer Vision</strong> utilizes AI technologies to analyze and interpret real-time visual data for different use scenarios, including quality inspection, safety supervision, equipment monitoring, and general monitoring.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Optimize your operations, security and employee welfare</h3>
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
              :x="59"
              :y="35"
              :width="30"
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
                      'Lenovo’s <strong>Pick Assist AMR</strong> intelligently plans the optimal routes to autonomously navigate through dynamic environments to serve your logistical needs at every stage of order fulfillment.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">50-80% reduction on laborcosts</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Our <strong>Pick Assist AMR</strong> technology delivers significant cost advantages by reducing labor costs, providing you with visible return on investments within 10 to 24 months.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Unparalleled flexibility</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      '<strong>Pick Assist AMR</strong> technology is ready to use out-of-the-box, providing you maximum convenience to begin optimizing your warehouse operations.',
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
              <h2>Customer loyalty made dynamic</h2>
              <p>
                Customers need more reasons to shop with you than just “price”. Lenovo equips Retailers with the smarter technologies to transform the customer shopping experience and increase the customer loyalty.
              </p>
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Seamless integration of IoT devices and sensors</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'ThinkEdge devices like the <strong>SE50</strong> enable collection and analysis of data from various sources such as point of sale systems, RFID tags, video surveillance, and environmental sensors.  Gain valuable insights into customer behavior, optimize inventory management, and deliver personalized experiences.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Deliver personalized experiences with your signage</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Our <strong>Digital Signage Solution</strong> provides an interactive customer experience by personalizing in-store information and promotions based on your shoppers’ individual interests',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Discover new ways to engage your customers</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Leverage customer and store activity data to identify opportunities for innovative marketing experiences, such as Virtual Reality and Augmented Reality or personalized mobile-driven experiences..',
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
              label="Customer and store insights right at your fingertips"
            >
              <h2>Customer and store insights right at your fingertips</h2>
              <p>
                Arm your team with tools that provide quick access to product and inventory information to help them streamline store operations and provide more personalized customer experiences.
              </p>
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Mobile-first staff operations</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Equip your staff with multifunctional <strong>Motorola Phones</strong> for use as barcode scanners for store operations, inventory management, customer engagement, and in-store communication.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Virtual reality tools for store operations planning</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Empower your staff with virtual reality tools like the <strong>ThinkReality VRX Headset</strong>, which allows store associates to leverage digital twins to plan and optimize store layout, inventory, security implementation, and more - all in a virtual environment.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Manage store operations on one device</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Keep operations running smoothly on the <strong>ThinkCenter M80q Desktop</strong> that can be customized to handle the varied needs of the manager\'s office, engineered with the end-to-end security of <strong>ThinkShield</strong>.',
                  },
                ]"
              />
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
              <h2>Enhance your customer experience and prevent stock losses</h2>
              <p>
                <strong>Lenovo Retail Solutions</strong> empower your stores with seamless customer experiences up to the checkout experience, ensuring a fast, easy, and secure purchase in every transaction.
              </p>
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">No more wait times</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Lenovo <strong>Self Service Kiosk (SSK)</strong> lets customers enjoy a fast and easy checkout experience while reducing customer dissatisfaction and labor costs.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Mitigate risk and losses with AI</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Lenovo’s <strong>Loss Prevention Solution</strong> rapidly analyzes video data through computer vision to immediately detect and act upon potential stock loss threats right as they happen, be it at checkout or any instance within your store.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Resolve issues intelligently and remotely</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Correct most errors remotely without the need to pull staff away from their duties, or disrupting the shopping experience.',
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
              <h2>Retail made for the phygital age</h2>
              <p>
                Enhance the customer experience right at the shelves with our digital signage solutions and functionalities.
              </p>
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Dynamic pricing on-the-go, at scale</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Our <strong>Dynamic Pricing Solution</strong> lets you manage and update millions of <strong>Electronic Shelf Labels</strong> simultaneously, streamlining store operations by reducing repetitive manual work for your store staff.',
                  },
                  {
                    title: '',
                    description:
                      'Easy integration with other backend databases and systems, providing you a wealth of data-driven insights and management options.',
                  },
                  {
                    title: '',
                    description:
                      'Enable personalized experiences for your customers, such as “click & collect” shopping options and mobile loyalty program integrations.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Mobile-first staff operations</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Through a seamless data flow from IOT devices to algorithm layers, Lenovo <strong>Digital Shelving</strong> provides you with valuable insights into your shelf displays and make data-driven decisions on display optimization, sales efficiency and personalized shopping experiences.',
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
              icon="/images/destop_retail-03-ani.gif"
              iconMobile="/images/mobile_warehouse-01-ani.gif"
              label="Food Waste"
            >
              <h2>Harness the power of smart technology and AI to empower your store</h2>
              <p>
                According to the UN, around one third of all food produced globally each year (or 1.3 billion tons) is wasted. Lenovo not only helps you reduce your food waste footprint in your operations, we help ensure you preserve the value of every product you produce and send to your stores.
              </p>
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">End-to-end cold chain supply management</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Lenovo’s <strong>Global Supply Chain Solutions</strong> provide you a unified view and centralized management of your entire supply chain from route to field to shelf, reducing overall waste and costs across the ecosystem.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Retail enhanced by customer and staff behavior</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Improve store performance, optimize conversion, and enhance staff productivity with the AI-powered <strong>Traffic Analysis Solutions</strong>, providing you real-time insights and actionable recommendations based on shopper behaviors and foot traffic data.',
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
          baseImage="/images/office-2024.svg"
          v-if="store.floor === 3"
          description=""
        > 
          <template v-slot:highlights>
            <Highlight
              id="highlight--3-1"
              :x="35"
              :y="43"
              :width="25"
              :floor="3"
              icon="/images/destop_office-01-ani.gif"
              iconMobile="/images/mobile_office-01-ani.gif"
              label="Secure devices"
            >
              <h2>Setting the standard in security</h2>
              <p>
                As your trusted partner, Lenovo builds security into our solutions from development through to delivery to protect your customer and company data, allowing you to focus on your business growth.
              </p>
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Comprehensive monitoring and protection across all endpoints</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Powered by Critical Start’s Zero-Trust Analytics Platform (ZTAP), our new <strong>Digital Workplace Solutions - Managed Extended Detection and Response (MxDR)</strong> integrates seamlessly with multiple industry-leading security technologies, helping organizations of all sizes stay ahead of adversaries.',
                  },
                  {
                    title: '',
                    description:
                      'Safeguard digital assets and business continuance and improve overall digital experience and productivity',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">With great power, comes even greater security</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Lenovo’s range of globally certified <strong>ThinkEdge</strong> gives you greater power in a smaller footprint, so your processing power can be discreetly tucked away at the edge of your business, ready for action.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Safeguard your customer, payment and company information</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      '<strong>Lenovo ThinkShield</strong> evolves with the modern threat landscape to protect your business and adapt to the needs of the workforce. All vulnerabilities can be totally and securely covered by our extensive portfolio of secure solutions, software, and services.',
                  },
                ]"
              />
            </Highlight>
            <Highlight
              id="highlight--3-2"
              :x="70"
              :y="70"
              :width="20"
              :floor="3"
              icon="/images/destop_office-02-ani.gif"
              iconMobile="/images/mobile_office-02-ani.gif"
              label="Transformation"
            >
              <h2>Innovate without limits with Lenovo TruScale</h2>
              <p>
                Lenovo TruScale IaaS provides a cloud-like experience, allowing you to leverage the right solutions for your business, from the pocket to the Edge - All with on-premise security for control and peace of mind.
              </p>
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Build the vision that takes your business forward</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      '<strong>Lenovo TruScale for Edge and AI</strong> delivers the right data center as a service solution based on advanced metering technologies of your choice so you can embark on your digital transformation journey with minimal upfront investment.',
                  },
                  {
                    title: '',
                    description:
                      'Take away the burden of day-to-day datacenter management, with full flexibility and faster time to market and respond to changing market opportunities with speed and agility.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Stay right sized, all the time</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      '<strong>Lenovo TruScale</strong> is flexible, cost-efficient, and scalable model that aligns infrastructure with your organization’s evolving demands, eliminating over-provisioning to ensure that you only pay for what you use.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Accelerate performance, simplify management, optimize protection</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      '<strong>Lenovo TruScale</strong> Data management, HPC and Hybrid Cloud portfolios address unique challenges across customer workloads ranging from AI to analytics and data-intensive enterprise applications.',
                  },
                  {
                    title: '',
                    description:
                      'Scale, accelerate, and protect data with new simplified designs and affordable consumption models that reduce risk and cost.',
                  },
                ]"
              />
            </Highlight>
            <Highlight
              id="highlight--3-3"
              :x="31"
              :y="68"
              :width="20"
              :floor="3"
              icon="/images/destop_office-03-ani.gif"
              iconMobile="/images/mobile_office-03-ani.gif"
              label="Features"
            >
              <h2>Accelerate purposeful innovation everywhere</h2>
              <p>
                With the right technology, employees are more empowered in their roles and can focus on meaningful work. With the right technology partner, so can IT leaders. Lenovo’s flexible, scalable, easy-to-deploy digital workplace solutions help accomplish your business goals while freeing up time for IT to focus on innovation and strategic priorities.
              </p>
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Unlock up to 50% improvement in time to employee productivity</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      '<strong>Lenovo Digital Workplace Solutions</strong> transform your business with next generation technology, automation and tools that free up your IT Support teams and leverage external expertise to deliver business efficiency.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Keep employees connected no matter where they’re working</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Lenovo collaboration solutions like the <strong>ThinkSmart One + Controller</strong> feature the Intel vPro® platform for easy remote manageability.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Stay productive no matter where you work</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'ThinkPad devices like the <strong>X1 Carbon</strong> deliver powerful performance for any task, offer long battery life, and are MIL-SPEC test to ensure durability. With ThinkPad, your back office team can stay productive no matter where they work.',
                  },
                ]"
              />
            </Highlight>
            <Highlight
              id="highlight--3-4"
              :x="79"
              :y="50"
              :width="35"
              :floor="3"
              icon="/images/destop_office-04-ani.gif"
              iconMobile="/images/mobile_office-04-ani.gif"
              label="Prevent disruption"
            >
              <h2>The path to future-ready IT starts here</h2>
              <p>
                Future proof your business with Lenovo consultancy and scalable hardware solutions that enable your business to grow while preventing downtime from getting between you and your customers.
              </p>
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Future proof your IT</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Leverage Lenovo’s IT experts with <strong>Lenovo Professional Services</strong>: free your team from the hassle of operating inefficient infrastructure and evolve to future-proof IT.',
                  },
                  {
                    title: '',
                    description:
                      'From breaking down complex business processes to implementation, Lenovo’s experts ensure your systems are ready to meet your business goals and needs.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Scale your performance capabilities to meet any demand</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'From single node enterprise deployments to the largest supercomputers in the world, the <strong>Lenovo ThinkSystem SR675 V3</strong> provides uncompromised versatility for any GPU accelerated workload.',
                  },
                ]"
              />
              <h3 style="font-weight:800; margin-top: -0.1rem; margin-bottom:-0.1rem">Run hot, stay cool, and save energy</h3>
              <TickList
                :items="[
                  {
                    title: '',
                    description:
                      'Designed to run the highest core-count and frequency, <strong>Lenovo Neptune™</strong> direct liquid cooling technology delivers 95% heat removal efficiency and up to 40% lower power consumption in a compact footprint that allows for higher density in the data center.',
                  },
                ]"
              />
            </Highlight>
            <Highlight
              id="highlight--3-5"
              :x="50"
              :y="60"
              :width="50"
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
