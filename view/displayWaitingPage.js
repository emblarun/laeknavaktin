//Here comes the waiting list page (page 4) done by Eeva :)
getQueue().then((queue)=>{
  waitingNumber = queue.length;
})
const displayWaitingPage = (waitingTime, waitingNumber) => {
    document.getElementById("container").innerHTML= `
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Þú átt tíma eftir:</h1>
          <div><h1>${timeConvert(waitingTime)}</h1></div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p>Það eru ${waitingNumber} á undan þér.</p>
        </div>
      </div>
      <div class=row>
        <div class="col-12">
          <p>Flýttu fyrir:</p>
          <input id="reasonForVisit" type="text" placeholder="Hvað bjátar á..."></input>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12-mt-5">
        <!--Button to send comments to Firebase-->
          <button id="sendComments">Senda</button>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-12-mt-5">
        <!--Button to take patient out of the queue-->
          <button id="cancelVisit" type="button" class="btn btn-primary">Fara úr röðinni
          </button>
        </div>
      </div>
      </div><!--closes row-->
    </div><!--closes container-->
    `
    //Eventlistener for the send button!
    document.getElementById("sendComments").addEventListener('click', insertCommentOnClick);
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
