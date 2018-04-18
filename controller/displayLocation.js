const displayHeilsugaeslur = getElementById("showHeilsugaeslur") => {
    getHeilsugaeslur();
}

// sækja staðsetningu notanda svo hægt sé að birta heilsugæslurnar sem er næst honum. 

// staðsetning notandans
const yourLocation () => {
    if (navigator.geoloacation) {
        navigator.geolaocation.getCurrentPosition(showPosition);
    } else {
        displayHeilsugaeslur.innerHTML = "Geoloaction is not supported by this browser";
    }
}

// birta hnit notandans
const showPosition(position){
    displayHeilsugaeslur.innerHTML = position.coords.latitude + position.coords.longitude;
}

getHeilsugaeslur().then((heilsugaesla)=>{
    heilsugaesla.latitude + heilsugaesla.longitude;
})

const getDistance= () => {
    // bera saman hnit notandans og hnit heilsugæslanna 
    var la = position.coord.latitude - heilsugaesla.latitude;
    var lo = position.coord.longitude - heilsugaesla.longitude;

    //niðurstöður um distance 
    return Math.sqrt(Math.pow(la, 2) + Math.pow(lo, 2));
}

var minDist = 1000;
var minDistIndex = 0;

// því lægri tala sem distance er það birtist eftst hjá notandanum því notandninn er næst þeirri heilsugæslu

for (i = 0; i < heilsugaeslur.length; i++ ){
    // það sem gefur okkur minnsta distance birtist efst. 
    if (getDistance =  ){
        document.getElementById("showHeilsugaeslur").innerHTML= `
        
        `
    }
}