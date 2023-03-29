// speed of car
// Average speed less than the provided number = ok
// Or else for every 5km/s above speed limit(70) give driver 1 demerit point
// print total number of demerit points 


let speed = prompt("Enter car speed: ");

// Check if speed is over the limit
if (speed <= 70) {
  console.log("Ok");
} else {
  // Calculate number of demerit points
  let demeritPoints = Math.floor((speed - 70) / 5);
  
  // Output the result
  console.log("Points: " + demeritPoints);
  
  // Check if license should be suspended
  if (demeritPoints >= 12) {
    console.log("License suspended");
  }
}