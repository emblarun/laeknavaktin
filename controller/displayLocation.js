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

var minDist = 1000;
var minDistIndex = 0;

getHeilsugaeslur().then((heilsugaeslur)=>{
    // því lægri tala sem distance er það birtist eftst hjá notandanum því notandninn er næst þeirri heilsugæslu
    heilsugaeslur.forEach((heilsugaesla, i)=>{
        const distance = getDistance(heilsugaesla.latitude, heilsugaesla.longitude)
        if (distance < minDist){
            minDist = distance;
            minDistIndex = i;
        }
    })
    document.getElementById("showHeilsugaeslur").innerHTML= `
            ${heilsugaesla[minDistIndex].nafn}
            ${heilsugaesla[minDistIndex].opnunartimi}
            ${heilsugaesla[minDistIndex].imgURL}
            `
})

const getDistance= (hlat, hlong ) => {
    // bera saman hnit notandans og hnit heilsugæslanna 
    var la = position.coord.latitude - hlat;
    var lo = position.coord.longitude - hlong;

    //niðurstöður um distance 
    return Math.sqrt(Math.pow(la, 2) + Math.pow(lo, 2));
}



