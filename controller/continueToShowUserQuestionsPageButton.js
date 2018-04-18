const continueButton = document.getElementById("nextPage")

// Ef hann er loggaður inn
if (currentUser != 0) {
  console.log("Virkar")
  continueButton.style.display = "block";
} else {
  console.log("Sést ekki")
  continueButton.style.display = "hidden";
}

const continueClick = ()=>{
  displayUserQuestion()
}
