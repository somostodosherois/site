import React, { useState } from 'react';
import AccordionLayout from './AccordionLayout';

const faq = [
  {
    title: 'Como cadastrar uma missão?',
    description: 'Alguma resposta legal =)'
  },
  {
    title: 'Quais as formas de doação?',
    description: 'Alguma resposta legal =)'
  },
  {
    title: 'Como realizar uma doação?',
    description: 'Alguma resposta legal =)'
  },
]

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-20 bg-white" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-900 text-2xl my-8 font-semibold tracking-wide uppercase">Dúvidas Frequentes</h2>

          <div className='flex flex-col justify-center items-center'>
            {faq.map(({ title, description }, index) => (
              <AccordionLayout
                title={title}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
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