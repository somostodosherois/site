import React, { useState } from 'react';
import AccordionLayout from './AccordionLayout';

const Accordion = ({ slice }) => {
  if (!slice) return null

  const [activeIndex, setActiveIndex] = useState(0);
  const title = slice?.primary?.title || ''
  const items = slice?.items || []

  return (
    <div className="pt-12 pb-16 bg-white" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-900 text-3xl my-8 font-semibold tracking-wide uppercase">{title}</h2>

          <div className='flex flex-col justify-center items-center'>
            {items.map(({ title, description }, index) => (
              <AccordionLayout
                title={title}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                key={index}
              >
                {description}
              </AccordionLayout>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;