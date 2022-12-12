import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TitleSession from '../../components/TitleSession/TitleSession';
import QuotationImage from '../../public/quotation_marks.svg'

const TestimonialCarousel = ({ slice }) => {
  if (!slice) return null

  const { title } = slice?.primary
  const { items } = slice || {}

  if (!items) return null

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <>
      <TitleSession title={title} />
      <Slider {...settings}>
        {items.map(({ description, author, children }, index) => (
          <div className='p-4' key={index}>
            <div className='bg-white border rounded-lg shadow p-8' style={{ height: '20rem' }}>
              <img src={QuotationImage.src} width='20' />
              <p className='mt-4 text-md'>{description}</p>
              <span className='text-sm'>{author}</span>
              <p className='text-sm mt-2'>{children}</p>
            </div>
          </div>
        ))}
      </Slider>

    </>
  )
}

export default TestimonialCarousel