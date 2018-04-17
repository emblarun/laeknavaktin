//Sækja nafn læknis og stofunúmer
const getDoctorProfile = ()=>{
    let docRef = db.collection("doctorProfile").doc("bYzL2vonNaKYb0QSTpiG");
    return docRef.get().then(function(doc) {
        if (doc.exists) {
            return doc.data();
            //console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            return "No such document!";
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });  
}

//Sækja næsta sjúkling í röðinni
const getNextInLine = ()=>{
    let docRef = db.collection("queue")
        .orderBy("enteredQueueAt")
        .limit(1);
    return docRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}
getNextInLine();