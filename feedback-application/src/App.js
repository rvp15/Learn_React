import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Header from "./components/Header";
import feedbackData from "./data/feedbackData";
import { v4 as uuidv4 } from "uuid";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Link } from "react-router-dom";
import AboutIcon from "./components/AboutIcon";
function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete?")) {
      const newFeedbackList = feedback.filter((item) => item.id !== id);
      console.log(newFeedbackList);
      setFeedback(newFeedbackList);
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIcon/>
      </div>
    </Router>
  );
}

export default App;
