'use client'

import { useState } from 'react'
import Link from 'next/link'

const floorPlans = [
  {
    id: 'tab1',
    title: 'Paradise',
    image: '/theme/images/resource/floor-1.jpg',
    planImage: '/theme/images/resource/flooe-1.png',
  },
  {
    id: 'tab2',
    title: 'Deluxe',
    image: '/theme/images/resource/floor-1.jpg',
    planImage: '/theme/images/resource/flooe-1.png',
  },
  {
    id: 'tab3',
    title: 'Sunset',
    image: '/theme/images/resource/floor-1.jpg',
    planImage: '/theme/images/resource/flooe-1.png',
  },
  {
    id: 'tab4',
    title: 'Penthouse',
    image: '/theme/images/resource/floor-1.jpg',
    planImage: '/theme/images/resource/flooe-1.png',
  },
]

export default function HomeFloorPlan() {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <section className="flore-plan-section pb-120">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 mx-auto wow fadeInUp">
            <div className="sec-title text-center">
              <div className="h6 sub-title">floor plans</div>

              <div className="h2 title tx-title tz-itm-title tz-itm-anim">
                <span>Modern</span> Infrastructure & thoughtful living spaces
              </div>
            </div>
          </div>
        </div>

        <div className="floor-custom-tabs">
          {/* Tabs */}
          <ul className="floor-tab-buttons">
            {floorPlans.map((plan) => (
              <li
                key={plan.id}
                className={`floor-tab-btn ${activeTab === plan.id ? 'active' : ''}`}
                onClick={() => setActiveTab(plan.id)}
                style={{ cursor: 'pointer' }}
              >
                {plan.title}
              </li>
            ))}
          </ul>

          {/* Content */}
          <div className="floor-tab-contents">
            {floorPlans.map(
              (plan) =>
                activeTab === plan.id && (
                  <div key={plan.id} className="floor-tab-content active">
                    <div className="floor-plan-block">
                      <div className="inner-block overflow-hidden">
                        {/* Main Image */}
                        <img className="image" src={plan.image} alt={plan.title} />

                        <div className="content-box">
                          {/* Plan Image */}
                          <div className="image-box">
                            <img src={plan.planImage} alt={plan.title} />
                          </div>

                          <div className="inner-box">
                            <div className="h3 title tx-title tz-itm-title tz-itm-anim">
                              {plan.title}
                            </div>

                            <div className="text">
                              A spacious and well-balanced layout offering comfort, natural light,
                              and efficient room planning—ideal for families.
                            </div>

                            <div className="h5 feature-title">Property Specifications</div>

                            <ul className="flor-feature-list">
                              <li>12 × 12 Sq. Ft. Rooms</li>
                              <li>2 Built-in Wall Shelves</li>
                              <li>4 Large Windows</li>
                              <li>Modern Kitchen Layout</li>
                            </ul>

                            <Link href="/page-about" className="btn-style-one">
                              View 3d video
                              <span className="arrow-right">
                                <img src="/theme/images/icons/btn-icon-1.png" alt="arrow" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
