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
    <div> 
    <p> Sláðu inn símanúmer til að skrá þig inn </p>
    <input type="tel" id="input">
    <button>skrá inn</button>
    </div>
`
}

const getAudkenniPage = () => {
    container.innerHTML+= `
    <div> 
    <p> Sláðu inn sms kóðann </p>
    <input type="number" id="input">
    <button id="sendAgain">Senda aftur</button>
    <button id="afram">Áfram</button>
    </div>
`
}
