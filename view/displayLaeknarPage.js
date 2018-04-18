//síðan sem læknirnir birtast á 
const containerlaeknir = document.getElementById("container")
const getLaeknaPage = (heilsugaesla, laeknir, bidtimi) => {
    containerlaeknir.innerHTML=`
    <h1> Læknavakt ${heilsugaesla}</h1>
    <button>Næsti lausi læknir </button>
    <div>
        <img src="" id="doctorPic">
        <p>${laeknir}</p>
        <p>${bidtimi}</p>
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