//síðan sem læknarnir sjá í tölvunni hjá sér
const containerlaeknir = document.getElementById("container")
const getLaeknaPage = () => {
    containerlaeknir.innerHTML=`
    <h1> Læknavakt ${/*nafn á valinni heilsugæslu} */}</h1>
    <button>Næsti lausi læknir </button>
    <div>
        <img src="" id="doctorPic">
        <p>${/*nafn læknis} */}</p>
        <p>${/*biðtími læknis}*/}</p>
        <button>Velja</button>
    </div>
    <div>
        <img src="" id="doctorPic">
        <p>${/*nafn læknis} */}</p>
        <p>${/*biðtími læknis}*/}</p>
        <button>Velja</button>
    </div>
    <div>
        <img src="" id="doctorPic">
        <p>${/*nafn læknis} */}</p>
        <p>${/*biðtími læknis}*/}</p>
        <button>Velja</button>
    </div>
    <div>
        <img src="" id="doctorPic">
        <p>${/*nafn læknis} */}</p>
        <p>${/*biðtími læknis}*/}</p>
        <button>Velja</button>
    </div>
    `
};