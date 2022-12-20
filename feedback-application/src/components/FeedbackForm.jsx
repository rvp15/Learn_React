import Card from "./shared/Card";
import { useState } from "react";

function Feedbackform() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>Add Rating</h2>
      </form>
      <div className="input-group">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Write your review"
          value={text}
        />
        <button type="submit">Submit</button>
      </div>
    </Card>
  );
}

export default Feedbackform;
