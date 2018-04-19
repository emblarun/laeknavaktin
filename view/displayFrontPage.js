//forsíðan (þar sem maður loggar sig inn)
const container = document.getElementById("container")
const getFirstPage = () => {
    container.innerHTML+= `
    <div>
        <img src="img/logo.png">
        <h2> Velkomin/n á<br>
		<span>Læknavaktina</span></h2>
        <p> Hringdu í <strong>112</strong> ef um alvarleg veikindi eru að ræða </p>
    </div>
	<div id="firebaseui-auth-container"></div>
    <button id="nextPage" onclick="displayUserQuestion()">áfram</button>
`
  signInWithFirebase();
}

