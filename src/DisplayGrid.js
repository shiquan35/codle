import React, { useState, useRef } from 'react'
import './DisplayGrid.css';
import {generateNumbersArr} from "./generateNumbers.js";

const numArr = generateNumbersArr();

const generateNumbersObj = (array) => {
  // add number into numberObj
  let numberObj = {};
  for (let j = 0; j < array.length; j++) {
    let currNum = array[j];
    if (currNum in numberObj) {
      numberObj[currNum] += 1; 
    }
    else {
      numberObj[currNum] = 1;
    }
  }
  return numberObj;
}

const numObj = generateNumbersObj(numArr);

const limit = 1; // no. of integers allowed in each box

export const DisplayGrid = () => {
  const [actualNumbersArr, setActualNumbersArr] = useState(numArr);
  const [actualNumbersObj, setActualNumbersObj] = useState(numObj);

  console.log(actualNumbersArr);
  console.log(actualNumbersObj);

  const [attemptNum, setAttemptNum] = useState(0);

  // each state holds each column's inputs and guesses
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const [guess1, setGuess1] = useState([]);
  const [guess2, setGuess2] = useState([]);
  const [guess3, setGuess3] = useState([]);

  const handleInput1 = (event) => {
    setInput1(event.target.value.slice(0, limit));
  }

  const handleInput2 = (event) => {
    setInput2(event.target.value.slice(0, limit));
  }

  const handleInput3 = (event) => {
    setInput3(event.target.value.slice(0, limit));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // check for empty boxes
    if (!input1 || !input2 || !input3) {
      return;
    }

    // update state for guess1 guess2 guess3
    setGuess1((prev) => {
      return [...prev, input1];
    })

    setGuess2((prev) => {
      return [...prev, input2];
    })

    setGuess3((prev) => {
      return [...prev, input3];
    })

    // increment attemptNum by 1, move on to next row
    setAttemptNum((prevAttemptNum) => prevAttemptNum + 1);

    // reset input
    setInput1("");
    setInput2("");
    setInput3("");
  }

  console.log("attemptNum: ", attemptNum);
  return (
    <>
    <div>
      {actualNumbersArr}
      <form onSubmit={handleSubmit}>
        <input type="number" min="0" max="9" 
        value={attemptNum===0 ? input1 : guess1[0]} 
        onChange={handleInput1} 
        disabled={attemptNum===0 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===0 ? input2 : guess2[0]} 
        onChange={handleInput2}
        disabled={attemptNum===0 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===0 ? input3 : guess3[0]} 
        onChange={handleInput3}
        disabled={attemptNum===0 ? false : true}/>
        
        <input type="Submit" className="submit-button"></input>
      </form>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" min="0" max="9" 
        value={attemptNum===1 ? input1 : guess1[1]} 
        onChange={handleInput1} 
        disabled={attemptNum===1 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===1 ? input2 : guess2[1]} 
        onChange={handleInput2}
        disabled={attemptNum===1 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===1 ? input3 : guess3[1]} 
        onChange={handleInput3}
        disabled={attemptNum===1 ? false : true}/>

        <input type="Submit" className="submit-button"></input>
      </form>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" min="0" max="9" 
        value={attemptNum===2 ? input1 : guess1[2]} 
        onChange={handleInput1} 
        disabled={attemptNum===2 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===2 ? input2 : guess2[2]} 
        onChange={handleInput2}
        disabled={attemptNum===2 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===2 ? input3 : guess3[2]} 
        onChange={handleInput3}
        disabled={attemptNum===2 ? false : true}/>

        <input type="Submit" className="submit-button"></input>
      </form>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" min="0" max="9" 
        value={attemptNum===3 ? input1 : guess1[3]} 
        onChange={handleInput1} 
        disabled={attemptNum===3 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===3 ? input2 : guess2[3]} 
        onChange={handleInput2}
        disabled={attemptNum===3 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===3 ? input3 : guess3[3]} 
        onChange={handleInput3}
        disabled={attemptNum===3 ? false : true}/>
        
        <input type="Submit" className="submit-button"></input>
      </form>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" min="0" max="9" 
        value={attemptNum===4 ? input1 : guess1[4]} 
        onChange={handleInput1} 
        disabled={attemptNum===4 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===4 ? input2 : guess2[4]} 
        onChange={handleInput2}
        disabled={attemptNum===4 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===4 ? input3 : guess3[4]} 
        onChange={handleInput3}
        disabled={attemptNum===4 ? false : true}/>
        
        <input type="Submit" className="submit-button"></input>
      </form>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" min="0" max="9" 
        value={attemptNum===5 ? input1 : guess1[5]} 
        onChange={handleInput1} 
        disabled={attemptNum===5 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===5 ? input2 : guess2[5]} 
        onChange={handleInput2}
        disabled={attemptNum===5 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===5 ? input3 : guess3[5]} 
        onChange={handleInput3}
        disabled={attemptNum===5 ? false : true}/>
        
        <input type="Submit" className="submit-button"></input>
      </form>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" min="0" max="9" 
        value={attemptNum===6 ? input1 : guess1[6]} 
        onChange={handleInput1} 
        disabled={attemptNum===6 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===6 ? input2 : guess2[6]} 
        onChange={handleInput2}
        disabled={attemptNum===6 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===6 ? input3 : guess3[6]} 
        onChange={handleInput3}
        disabled={attemptNum===6 ? false : true}/>
        
        <input type="Submit" className="submit-button"></input>
      </form>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" min="0" max="9" 
        value={attemptNum===7 ? input1 : guess1[7]} 
        onChange={handleInput1} 
        disabled={attemptNum===7 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===7 ? input2 : guess2[7]} 
        onChange={handleInput2}
        disabled={attemptNum===7 ? false : true}/>

        <input type="number" min="0" max="9" 
        value={attemptNum===7 ? input3 : guess3[7]} 
        onChange={handleInput3}
        disabled={attemptNum===7 ? false : true}/>
        
        <input type="Submit" className="submit-button"></input>
      </form>
    </div>
   
    </>
  )
}