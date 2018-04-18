const continueButton = document.getElementById("nextPage")

// Ef hann er loggaður inn
if (currentUser != null) {
  continueButton.style.display = "show";
} else {
  continueButton.style.display = "hidden";
}

const continueClick = ()=>{
  displayUserQuestion()
}
