import React from 'react';
import ContainerMissions from '../ContainerMissions'

const Missions = ({ slice, heros }) => {

  const title = slice?.primary?.title || 'Missões em Andamento'

  const inProgress = (heros.length && heros.filter(obj => obj.status === 'open')) || []
  const isFinished = (heros.length && heros.filter(obj => obj.status === 'finish')) || []

  return (
    <>
      <ContainerMissions items={inProgress} title={title} />
      <ContainerMissions items={isFinished} title='Missões finalizadas' />
    </>
  )
}

export default Missions