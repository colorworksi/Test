import Script from 'next/script'
export const metadata = {
  title: { default: 'My Site', template: '%s | My Site', charset: 'utf-8' },
}

export default function BootstrapLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/theme/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/theme/css/style.css" />
        <link rel="shortcut icon" href="/theme/images/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/theme/images/favicon.png" type="image/x-icon" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <main>{children}</main>
        {/* Core Libraries */}
        <Script src="/theme/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/theme/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/theme/js/bootstrap.min.js" strategy="afterInteractive" />

        {/* Plugins */}
        <Script src="/theme/js/jquery.fancybox.js" strategy="lazyOnload" />
        <Script src="/theme/js/jquery-ui.js" strategy="lazyOnload" />
        <Script src="/theme/js/wow.js" strategy="lazyOnload" />
        <Script src="/theme/js/select2.min.js" strategy="lazyOnload" />
        <Script src="/theme/js/appear.js" strategy="lazyOnload" />
        <Script src="/theme/js/bxslider.js" strategy="lazyOnload" />
        <Script src="/theme/js/knob.js" strategy="lazyOnload" />
        <Script src="/theme/js/swiper.min.js" strategy="lazyOnload" />
        <Script src="/theme/js/aos.js" strategy="lazyOnload" />

        {/* GSAP */}
        <Script src="/theme/js/gsap.min.js" strategy="lazyOnload" />
        <Script src="/theme/js/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/theme/js/splitType.js" strategy="lazyOnload" />
        <Script src="/theme/js/gsap-scroll-smoother.js" strategy="lazyOnload" />
        <Script src="/theme/js/gsap-scroll-to-plugin.js" strategy="lazyOnload" />
        <Script src="/theme/js/SplitText.min.js" strategy="lazyOnload" />
        <Script src="/theme/js/custom-gsap.js" strategy="lazyOnload" />

        {/* Main Script */}
        <Script src="/theme/js/script.js" strategy="lazyOnload" />

        {/* Contact Form */}
        <Script src="/theme/js/jquery.validate.min.js" strategy="lazyOnload" />
        <Script src="/theme/js/jquery.form.min.js" strategy="lazyOnload" />
        <Script src="/theme/js/custom-contact.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
