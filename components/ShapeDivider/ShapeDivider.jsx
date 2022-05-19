import React from 'react'
import Divider from '../../public/waves.svg'

const ShapeDivider = ({ graus }) => (
  <img src={Divider.src} className={`transform rotate-${graus}`} style={{ width: 'calc(241% + 1.3px)', height: '115px' }} />
)

export default ShapeDivider
