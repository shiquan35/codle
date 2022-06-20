/* 

1. Get a random number ranging from 0 (inclusive) to 10 (exclusive).
2. Append each number into an array and object

*/


const numberArr = []; // store a 3-digit number
// const numberObj = {}; // count number of unique integers

/*
Function to generate numbers from 0 - 9
Returns an integer
*/
const createRandomNumber = () => {
  const integer = Math.floor(Math.random() * 10);
  return integer;
}


export const generateNumbersArr = () => {
  for (let i = 0; i<3; i++) {
    let number = createRandomNumber();
    numberArr.push(number);
  }
  return numberArr;
}

// export default generateNumbersArr;

/*
const generateNumbersObj = (array) => {
  // add number into numberObj
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
*/

// console.log(numberArr);
// console.log(numberObj);
// console.log(generateNumbersArr());
// console.log(generateNumbersObj(numberArr));