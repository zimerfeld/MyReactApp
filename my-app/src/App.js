import './App.css';
import { useState } from "react";

function App() {
  const[name, setName] = useState("");
  const[score, setScore] = useState("10");
  const[comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(Number(score) < 10 || comment.length < 10)
    {
      alert("Invalid input form data");
      return;
    }

    setName("");
    setScore("10");
    setComment("");
    console.log("form submitted");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Name" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <br/>
            <label>Score: {score}</label>
            <input type="range" min="0" max="10" value={score} onChange={(e) => setScore(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
