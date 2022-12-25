import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading,setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit,setFeedbackEdit] = useState({
    item:{},
    edit: false
  })

useEffect(()=>{
  fetchFeedback()
},[])
//Fetch from json server:
const fetchFeedback = async()=>{
  const response = await fetch(`/feedback?_sort=id&_order=desc`)// created proxy in package.json: "proxy": "http://localhost:5000",so u dont need to include everytime
  const data = await response.json()
  setFeedback(data)
  setIsLoading(false)
}
  const deleteFeedback =async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/feedback/${id}`,{
        method: 'DELETE'
      })
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback',{
      method: 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
     body:JSON.stringify(newFeedback)
    })

    setFeedback([newFeedback, ...feedback]);
  };
//set item to be updated
  const editFeedback = (item)=>{
    setFeedbackEdit({item,edit:true})
  }
  //Update feedback item
  const updateFeedback= async(id,updatedItem)=>{
    const response = await fetch(`/feedback/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedItem)
    })
setFeedback(feedback.map((item)=>item.id === id? {...item,...updatedItem}:item))
  }

  return (
    <FeedbackContext.Provider value={{ feedback,feedbackEdit,isLoading,deleteFeedback,addFeedback,editFeedback,updateFeedback}}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
