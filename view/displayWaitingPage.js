//Here comes the waiting list page (page 4) done by Eeva :)
const displayWaitingPage = (waitingTime, waitingNumber) => {
    document.getElementById("container").innerHTML= `
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Þú átt tíma eftir:</h1>
          <div><h1>${timeConvert(waitingTime)}</h1></div>
        </div>
        <div class="col-12">
          <p>Það eru ${waitingNumber} á undan þér.</p>
        </div>
        <div class="col-12">
          <p>Fýlltu fyrir:</p>
          <input id="reasonForVisit" type="text" placeholder="Hvað bjátar á..."></input>
        </div>
        <div class="col-12-mt-5">
          <button id="cancelVisit" type="button" class="btn btn-primary">Fara úr röðinni
          </button>
        </div>
      </div><!--closes row-->
    </div><!--closes container-->
    `
}


//Function to show time in hours and minutes. SO COOL!
function timeConvert(n) {
var num = n;
var hours = (num / 60);
var rhours = Math.floor(hours);
var minutes = (hours - rhours) * 60;
var rminutes = Math.round(minutes);
return rhours + " kl og " + rminutes + " min";
}

console.log(timeConvert(200));