const signinClick = ()=> {
  const phoneNumber = document.getElementById("phoneInput").value
  signInWithFirebase(phoneNumber)
}
