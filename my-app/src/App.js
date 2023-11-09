import './App.css';
import { useState } from "react";
// import { UserProvider, useUser } from "./UserContext";

/* const LoggedInUser = () => {
  const {user} = useUser();
  return (
    <p>Hello {user.name}</p>
  );
}

const Header = () => {
  return (
    <LoggedInUser />
  );
}

const Footer = () => {  
  const {user} = useUser();
  return (
    <p>Footer {user.name}</p>
  );
} */



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
      {/* <Header /> */}
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
      {/* <Footer />    */}
    </div>    
  );
}

function Root () {
  return (
    //<UserProvider>
      <App/>
    //</UserProvider>
  );
}



export default Root;