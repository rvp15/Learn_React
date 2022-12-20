import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from './components/FeedbackForm'
import Header from "./components/Header";
import feedbackData from "./data/feedbackData";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);
  const deleteFeedback = (id) => {
console.log(id)
    if(window.confirm('Are you sure you want to delete?')){
      const newFeedbackList = feedback.filter((item)=>item.id !== id)
      console.log(newFeedbackList)
        setFeedback(newFeedbackList)
    }

  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
