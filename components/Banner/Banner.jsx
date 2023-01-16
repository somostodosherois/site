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
      {banner.map(({ image, link }) => {
        const url = isMobile ? image.mobile.url : image.url
        const altura = isMobile ? image.mobile.dimensions.height : image.dimensions.height

        return <a href={link?.url} className='cursor-pointer'><img src={url} height={altura} /></a>
      })}
    </Carousel>
  )
}

export default Banner