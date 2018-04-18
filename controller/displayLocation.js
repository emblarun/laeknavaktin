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


// bera saman hnit notandans og hnit heilsugæslanna 

const displayHnit = db.collection("heilsugaeslur").doc(heilsugaeslur).field(hnit[0]);

var positionUser = showPosition.toRadians()
var positionHeilsugaesla = displayHnit.toRadians(), Δλ = (lon2-lon1).toRadians(), R = 6371e3; // gives d in metres
var distance = Math.acos( Math.sin(positionUser)*Math.sin(positionHeilsugaesla) + Math.cos(positionUser)*Math.cos(positionHeilsugaesla) * Math.cos(Δλ) ) * R;

// því lægri tala sem distance er það birtist eftst hjá notandanum því notandninn er næst þeirri heilsugæslu