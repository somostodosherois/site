import React from 'react';

import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index) && console.log(index);
  const isActive = activeIndex === index
  const isOpen = isActive ? 'text-red-600' : 'text-gray-800'

  return (
    <>
      <div onClick={() => handleSetIndex(index)} className={`flex ${isOpen} w-full justify-between p-2 mt-2 rounded bg-white border border-transparent border-b-gray-300 hover:text-red-600`}>
        <div className='flex'>
          <div className='text-xl font-bold'>{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {
            isActive
              ? <BsChevronDown className='w-6 h-6'/>
              : <BsChevronUp className='w-6 h-6'/>
          }
        </div>
      </div>

      {isActive && (
        <div className="shadow-3xl text-lg rounded-2xl shadow-cyan-500/50 p-4 mb-6">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;