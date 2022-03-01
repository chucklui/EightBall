import { useState } from "react";
import './EightBall.css';

/** Show message on eightball background.
 *
 * Props: Array of objects
 * 
 * example of one object: { msg: "It is certain.", color: "green" }
 * 
 *
 * State:
 * - Initial state: {msg: "think of a question", color: "black"}
 *
 * App -> EightBall
 */

function EightBall ({ answers }) {
  const [answer, setAnswer] = useState({msg: "think of a question", 
                                        color: "black"});

  /**  Takes in array of answer objects to return random index number inside 
   * length of array. */
  function getRandomIndex(array){
    let randIndex = Math.floor(Math.random() * array.length);
    return randIndex;
  }

  /** Takes in array of answer objects to set new answer object randomly picked 
   * from array */
  function getRandomAnswer(answers){
    let randIndex = getRandomIndex(answers);
    let newAnswer = answers[randIndex];
    setAnswer(newAnswer);
  }

  return (
    <div className="EightBall" 
          onClick={() => getRandomAnswer(answers)} 
          style={{backgroundColor: answer.color}}>
      <p className="EightBall-msg">{answer.msg}</p>
    </div>
  );
}

export default EightBall;