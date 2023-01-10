import React from 'react';
import { isMobile } from 'react-device-detect';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = ({ banner }) => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
    >
      {banner.map(({ image }) => (
        isMobile ? <img src={image.mobile.url} /> : <img src={image.url} />
      ))}
    </Carousel>
  )
}

export default Banner