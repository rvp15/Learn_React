import React from 'react'
import PropTypes from "prop-types";

function FeedbackStats({feedback}) {

    //array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

let average = feedback.reduce((total,currentval)=>{
 return total + currentval.rating
},0)/feedback.length

average=average.toFixed(1).replace(/[.,]0$/, '') // setting average value with atleast one decimal
//replace : if 0 next to decimal replace with nothing
console.log(average)
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average)?0:average}</h4>
    </div>
  )
}
FeedbackStats.propTypes={
    feedback: PropTypes.array.isRequired
}
export default FeedbackStats
