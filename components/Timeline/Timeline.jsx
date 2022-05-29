import React from 'react'
import TextBlock from '../TextBlock/TextBlock'
import TitleSession from '../TitleSession/TitleSession'
import VerticalTimeline from './VerticalTimeLine'

const Timeline = () => (
  <div className="bg-white pb-12 px-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center">
      <TextBlock title={'Linha do tempo'} description={'A STH foi fundada em Julho de 2016, quando dois estudantes se viram insatisfeitos com o cenário que encontraram em suas comunidades: '} />
    </div>

    <VerticalTimeline />
  </div>
)

export default Timeline