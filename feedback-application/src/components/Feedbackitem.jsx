import React, { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes,FaEdit} from "react-icons/fa";
import { useContext } from "react"; // include useContext
import FeedbackContext from "../context/FeedbackContext"; // import feedback context

function Feedbackitem({ item}) {

  const {deleteFeedback,editFeedback} = useContext(FeedbackContext) // use the imported feedbackcontext here

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>editFeedback(item)} className="edit"><FaEdit color="purple"/></button>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default Feedbackitem;
