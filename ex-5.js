function calculateStudentGrade(score) {
  // Start coding here
  let result;
  score < 60
    ? (result = "F")
    : score < 70
    ? (result = "D")
    : score < 80
    ? (result = "C")
    : score < 90
    ? (result = "B")
    : (result = "A");
  return result;
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
