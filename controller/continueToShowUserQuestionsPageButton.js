const continueButton = document.getElementById("nextPage")

// Ef hann er loggaður inn
if (currentUser != null ) {
  console.log("Virkar")
  continueButton.style.display = "block";
} else {
  console.log("Sést ekki")
  continueButton.style.display = "hidden";
}

const continueClick = ()=>{
  displayUserQuestion()
}
