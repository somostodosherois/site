import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { isMobile } from 'react-device-detect';

import 'react-vertical-timeline-component/style.min.css';

const VerticalTimelineComponent = ({ data }) => (
  <div className='max-w-7xl mx-auto w-100'>
    <VerticalTimeline lineColor={'red'} animate={isMobile ? false : true} >
      {data.map(({ title, content, year, icon }, index) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={year}
          contentStyle={{ borderBottom: '3px solid #DC2626' }}
          contentArrowStyle={{ borderRight: '13px solid #DC2626' }}
          iconStyle={{ background: '#DC2626', color: '#fff' }}
          // icon={icon}
          key={index}
        >
          <h3 className="vertical-timeline-element-title font-bold text-2xl">{title}</h3>
          <p>{content}</p>
        </VerticalTimelineElement>
      ))}

      {/* <VerticalTimelineElement
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      icon={''}
    /> */}
    </VerticalTimeline>
  </div>
)

export default VerticalTimelineComponent