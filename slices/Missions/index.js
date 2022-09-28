import axios from 'axios';
import React, { useState, useEffect } from 'react';

import ContainerMissions from '../../components/ContainerMissions'

const Missions = ({ slice }) => {
  const title = slice?.primary?.title
  const [heros, setHeros] = useState([]); 

  useEffect(() => {
    fetch("https://sth.org.br/missions.php?status=open")
      .then(res => res.json())
      .then(
        (data) => {
          setHeros(data);
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  if (!title || !heros) return null

  return (<ContainerMissions items={heros} title={title} />)
}

export default Missions