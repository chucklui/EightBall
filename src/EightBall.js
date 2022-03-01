import { useState } from "react";
import './EightBall.css';

function EightBall ({ answers }) {
  const [answer, setAnswer] = useState({msg: "think of a question", color: "black"});

  function random(answers){
    let randIndex = Math.floor(Math.random() * answers.length);
    return randIndex;
  }

  function giveAnswer(answers){
    let randIndex = random(answers);
    let newAnswer = answers[randIndex];
    setAnswer(newAnswer);
  }

  return (
    <div className="EightBall" onClick={() => giveAnswer(answers)} style={{backgroundColor: answer.color}}>
      <p className="EightBall-msg">{answer.msg}</p>
    </div>
  );
}

export default EightBall;