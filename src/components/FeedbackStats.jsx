import { useContext } from "react"; // include useContext
import FeedbackContext from "../context/FeedbackContext"; // import feedback context


function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext) // use the imported feedbackcontext here
    //array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

let average = feedback.reduce((total,currentval)=>{
 return total + currentval.rating
},0)/feedback.length

average=average.toFixed(1).replace(/[.,]0$/, '') // setting average value with atleast one decimal
//replace : if 0 next to decimal replace with nothing
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average)?0:average}</h4>
    </div>
  )
}

export default FeedbackStats
