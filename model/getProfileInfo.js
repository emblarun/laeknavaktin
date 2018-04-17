const getProfileInfo = ()=>{
    var docRef = db.collection("userProfile").doc("YUZDePbN9Xbzgr80z1IQ");
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
    t().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    

}