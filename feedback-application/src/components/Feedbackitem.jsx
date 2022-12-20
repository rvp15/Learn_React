import React, { useState } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa';
function Feedbackitem({item}) {

  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <button className='close'><FaTimes color='purple'/></button>
        <div className="text-display">{item.text}</div>
       
    </Card>
  )
}

Feedbackitem.propTypes ={
    item: PropTypes.object.isRequired
}
export default Feedbackitem