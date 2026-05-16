import Image from 'next/image'

export default function HomeVideo() {
  return (
    <section className="video-section pt-0">
      <div className="video-image overflow-hidden">
        <Image
          data-speed="0.8"
          src="/theme/images/resource/video-1-1.jpg"
          alt="img"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />

        <div className="content">
          <a
            href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
            className="play-now"
            data-fancybox="gallery"
            data-caption=""
          >
            <i className="icon fa-solid fa-play"></i>
            <span className="ripple"></span>
          </a>

          <div className="h3 title tx-title tz-itm-title tz-itm-anim">
            Experience Our Professional Real Estate Approach
          </div>
        </div>
      </div>
    </section>
  )
}