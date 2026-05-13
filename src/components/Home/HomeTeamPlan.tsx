export default function HomeTeamPlan() {
  return (
    <section className="team-section pt-40 pb-90">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 mx-auto wow fadeInUp">
            <div className="sec-title text-center">
              <div className="h6 sub-title">our team</div>
              <div className="h2 title tx-title tz-itm-title tz-itm-anim mb-30">
                <span>The People</span> Who make our real estate work
              </div>
              <a href="page-team.html" className="btn-style-one">
                View All Member
                <span className="arrow-right">
                  <img src="/theme/images/icons/btn-icon-1.png" alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Member 1 */}
          <div className="col-lg-3 col-sm-6">
            <div className="team-block">
              <div className="inner-block wow fadeInUp" data-wow-delay="200ms">
                <div className="image-box">
                  <div className="image">
                    <img src="/theme/images/resource/team-1.jpg" alt="Daniel Carter" />
                    <img src="/theme/images/resource/team-1.jpg" alt="Daniel Carter" />
                  </div>
                </div>
                <div className="content-box">
                  <div className="h4 title">
                    <a href="page-team-details.html">Daniel Carter</a>
                  </div>
                  <div className="text">Managing Director</div>
                </div>
              </div>
            </div>
          </div>

          {/* Member 2 */}
          <div className="col-lg-3 col-sm-6">
            <div className="team-block">
              <div className="inner-block wow fadeInUp" data-wow-delay="300ms">
                <div className="image-box">
                  <div className="image">
                    <img src="/theme/images/resource/team-2.jpg" alt="Daniel Carter" />
                    <img src="/theme/images/resource/team-2.jpg" alt="Daniel Carter" />
                  </div>
                </div>
                <div className="content-box">
                  <div className="h4 title">
                    <a href="page-team-details.html">Daniel Carter</a>
                  </div>
                  <div className="text">Managing Director</div>
                </div>
              </div>
            </div>
          </div>

          {/* Member 3 */}
          <div className="col-lg-3 col-sm-6">
            <div className="team-block">
              <div className="inner-block wow fadeInUp" data-wow-delay="400ms">
                <div className="image-box">
                  <div className="image">
                    <img src="/theme/images/resource/team-3.jpg" alt="Daniel Carter" />
                    <img src="/theme/images/resource/team-3.jpg" alt="Daniel Carter" />
                  </div>
                </div>
                <div className="content-box">
                  <div className="h4 title">
                    <a href="page-team-details.html">Daniel Carter</a>
                  </div>
                  <div className="text">Managing Director</div>
                </div>
              </div>
            </div>
          </div>

          {/* Member 4 */}
          <div className="col-lg-3 col-sm-6">
            <div className="team-block">
              <div className="inner-block wow fadeInUp" data-wow-delay="500ms">
                <div className="image-box">
                  <div className="image">
                    <img src="/theme/images/resource/team-4.jpg" alt="Daniel Carter" />
                    <img src="/theme/images/resource/team-4.jpg" alt="Daniel Carter" />
                  </div>
                </div>
                <div className="content-box">
                  <div className="h4 title">
                    <a href="page-team-details.html">Daniel Carter</a>
                  </div>
                  <div className="text">Managing Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
