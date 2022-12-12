import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TitleSession from '../TitleSession/TitleSession';
import QuotationImage from '../../public/quotation_marks.svg'

const TestimonialCarousel = ({ title, items }) => {

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
      <div style={{ width: '90%', marginLeft: '5%' }}>
        <Slider {...settings}>
          {items.map(({ post_content, post_title, children }, index) => (
            <div className='p-4' key={index}>
              <div className='bg-white border rounded-lg shadow p-8' style={{ height: '20rem' }}>
                <img src={QuotationImage.src} width='20' />
                <p className='mt-4 text-md'>{post_content}</p>
                <span className='text-sm'>{post_title}</span>
                <p className='text-sm mt-2'>X anos</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </>
  )
}

export default TestimonialCarousel