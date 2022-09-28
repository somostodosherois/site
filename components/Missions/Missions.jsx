import React from 'react';
import ContainerMissions from '../ContainerMissions'

const Missions = ({ slice, heros }) => {

  const variation = slice?.primary?.variation
  const title = slice?.primary?.title || 'Missões em Andamento'

  const inProgress = (heros.length && heros.filter(obj => obj.status === 'open')) || []
  const isFinished = (heros.length && heros.filter(obj => obj.status === 'finish')) || []

  return (
    <>
      <ContainerMissions items={inProgress} title={title} />
      {variation !== 'Home' && <ContainerMissions items={isFinished} title='Missões finalizadas' />}
    </>
  )
}

export default Missions