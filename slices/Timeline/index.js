import React from 'react'
import { Timeline, Event } from "react-timeline-scribble";
import Moment from 'moment';

import TitleSession from '../../components/TitleSession/TitleSession';
import QuotationImage from '../../public/quotation_marks.svg'

const renderItems = (items) => {
  return items.map(({ description, author, subtitle, date }) => (
    <Event interval={Moment(date).format("DD/MM/YYYY")} title={author} subtitle={subtitle}>
      <div className='flex'>
        <img src={QuotationImage.src} width='20' style={{ marginRight: '1rem' }} />
        {description}
      </div>
    </Event>
  ))
}

const TimelineComp = ({ slice }) => {
  if (!slice) return null

  const title = slice?.primary?.title || ''
  const items = slice?.items || []

  return (
    <div className='mt-8 mb-8'>
      <TitleSession title={title} />
      <Timeline>
        {renderItems(items)}
      </Timeline>
    </div>
  )

}

export default TimelineComp