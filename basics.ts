function add(n1: number, n2: number, showResult: boolean, resultPhrase: string){
  const result = n1+n2;
  if (showResult){
      console.log(resultPhrase+result);
  } else {
      return result;
  }
}

const number0 = 2;  // Good practice
let number1:number = 5; // Bad practice, typescript can infer type from initialisation
let number2:number; // Good practice, we are not initialising value of number 2 initially so need to specify type
number2 = 2.8
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase)