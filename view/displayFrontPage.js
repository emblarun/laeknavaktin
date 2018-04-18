//forsíðan (þar sem maður loggar sig inn)
const container = document.getElementById("container")
const getFirstPage = () => {
    container.innerHTML+= `
    <div>
        <img src="img/logo.png"> 
        <h2> Velkomin/n á </h2>
        <h1> Læknavaktina </h12>
        <h3> Hringdu á 112 ef um alvarleg veikindi eru að ræða </h3>
    </div>
    <div id="firebaseui-auth-container"> 
    </div>
`
}
