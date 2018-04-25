const getWaitingTime = ()=>{}
db.collection("queue").doc("blDlNeBFtAX0zYbiOQeR")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
    });

    // búa function sem tekur inn fjölda sjúklinga á undan og skilar útreiknuðum biðtíma
    const queue = [];

    function calculateWaitingTime(queue,y){
        return queue*y;
    }
    const wait = calculateWaitingTime(queue.length,900000); // Function is called, return value will end up in z

    //<button onclick="document.getElementById('calculateWaitingTime').innerHTML=wait;">"Calculate Waiting Time"</button>
    //<p id="calculateWaitingTime"></p>


    //<p id="demo"></p>

    // Set the date we're counting down to
    var countDownDate = new Date().getTime()+wait;

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;
      console.log(distance);

        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "Það er komið að þér";
        }
    }, 1000);
};

var opnunartimar = ["17:00 - 23:00", "09:00 - 23:30", "09:00-18:00 21:00-23:00"];
