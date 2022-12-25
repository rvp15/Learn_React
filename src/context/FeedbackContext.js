import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is from Context.Feedback item 1",
      rating: 7,
    },
    {
        id: 2,
        text: "This is from Context.Feedback item 2",
        rating: 10,
      },
      {
        id: 3,
        text: "This is from Context.Feedback item 3",
        rating: 9,
      },
      {
        id: 4,
        text: "This is from Context.Feedback item 4",
        rating: 8,
      },
  ]);

  const [feedbackEdit,setFeedbackEdit] = useState({
    item:{},
    edit: false
  })



  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newFeedbackList = feedback.filter((item) => item.id !== id);
      setFeedback(newFeedbackList);
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
//set item to be updated
  const editFeedback = (item)=>{
    setFeedbackEdit({item,edit:true})
  }
  //Update feedback item
  const updateFeedback=(id,updatedItem)=>{
setFeedback(feedback.map((item)=>(item.id === id? {...item,updatedItem}:item)))
  }

  return (
    <FeedbackContext.Provider value={{ feedback,feedbackEdit,deleteFeedback,addFeedback,editFeedback,updateFeedback}}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;