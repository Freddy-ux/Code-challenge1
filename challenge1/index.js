// my code
// Input student marks 
// Inut should be between 0 & 100
// A > 79, 
// B > 60 to 79, 
// C > 59 to 49, 
// D > 40 to to 49,
// E > less 40.

let marks = prompt("Enter student marks (between 0 and 100): ");

if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 60 && marks <= 79) {
  console.log("Grade: B");
} else if (marks >= 50 && marks <= 59) {
  console.log("Grade: C");
} else if (marks >= 40 && marks <= 49) {
  console.log("Grade: D");
} else {
  console.log("Grade: E");
}