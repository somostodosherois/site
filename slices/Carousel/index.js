import React from 'react';
import Slider from "react-slick";
import Moment from 'moment';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TitleSession from '../../components/TitleSession/TitleSession';
import QuotationImage from '../../public/quotation_marks.svg'
import { isMobile } from 'react-device-detect';

const Carousel = ({ slice }) => {
  if (!slice) return null

  const { title } = slice?.primary
  const { items } = slice || {}

  if (!items) return null

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1
  };

  return (
    <div className='carousel-wrapper'>
      <TitleSession title={title} />
      <Slider {...settings}>
        {items.map(({ image, description, date }, index) => (
          <div className='p-4' key={index}>
            <div className='bg-white border rounded-lg shadow p-2' style={{ height: '30rem' }}>
              <img src={image.url}  />
              <p className='mt-4 text-base'>{description}</p>
              <span className='text-sm'>{Moment(date).format("DD/MM/YYYY")}</span>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  )
}

export default Carousel