import React from 'react'
import PropTypes from 'prop-types'

import Divider from '../../public/waves.svg'

const ShapeDivider = ({ graus }) => {
  if (!graus) return null
  const grausRotate = 'transform rotate-180'

  return (
    <img src={Divider.src} className={grausRotate} style={{ width: 'calc(241% + 1.3px)', height: '115px' }} />
  )
}

ShapeDivider.propTypes = {
  graus: PropTypes.number
}

export default ShapeDivider
