// JavaScript Quiz by Wali

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let answer1 = document.getElementById("q1").value.toLowerCase();
  let answer2 = document.getElementById("q2").value.toLowerCase();
  let answer3 = document.getElementById("q3").value.toLowerCase();
  let answer4 = document.getElementById("q4").value.toLowerCase();

  let result1 = 0;
  let result2 = 0;
  let result3 = 0;
  let result4 = 0;

  // Quiz Answers
  console.log(answer1);
  if (answer1 == "enzo ferrari") {
    document.getElementById("q1").style.backgroundColor = "lightgreen";
    document.getElementById("out1").innerHTML = `Correct!`;
    result1 = 1;
  } else {
    document.getElementById("q1").style.backgroundColor = "red";
    document.getElementById(
      "out1"
    ).innerHTML = `Incorrect! The correct answer is Enzo Ferrari`;
    result1 = 0;
  }

  if (answer2 == "italy") {
    document.getElementById("q2").style.backgroundColor = "lightgreen";
    document.getElementById("out2").innerHTML = `Correct!`;
    result2 = 1;
  } else {
    document.getElementById("q2").style.backgroundColor = "red";
    document.getElementById(
      "out2"
    ).innerHTML = `Incorrect! The correct answer is Italy`;
    result2 = 0;
  }

  if (answer3 == "first and second" || answer3 == "1st and 2nd") {
    document.getElementById("q3").style.backgroundColor = "lightgreen";
    document.getElementById("out3").innerHTML = `Correct!`;
    result3 = 1;
  } else {
    document.getElementById("q3").style.backgroundColor = "red";
    document.getElementById(
      "out3"
    ).innerHTML = `Incorrect! The correct answer is First and Second`;
    result3 = 0;
  }

  if (answer4 == "819") {
    document.getElementById("q4").style.backgroundColor = "lightgreen";
    document.getElementById("out4").innerHTML = `Correct!`;
    result4 = 1;
  } else {
    document.getElementById("q4").style.backgroundColor = "red";
    document.getElementById(
      "out4"
    ).innerHTML = `Incorrect! The correct answer is 819`;
    result4 = 0;
  }

  let score = ((result1 + result2 + result3 + result4) / 4) * 100;
  let sum = result1 + result2 + result3 + result4;

  if (sum == 0 || sum == 1) {
    document.getElementById("output").innerHTML = `Please try Again`;
  } else if (sum == 2) {
    document.getElementById("output").innerHTML = `Almost there`;
  } else if (sum == 3) {
    document.getElementById("output").innerHTML = `So Close!`;
  } else {
    document.getElementById("output").innerHTML = `You got 100%!!`;
  }
  document.getElementById("scores").innerHTML =
    `You got ` + sum + `/4! (` + score + `%)`;
}
