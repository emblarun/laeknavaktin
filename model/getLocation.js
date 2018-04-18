//Get geolocation coordinates

const getHeilsugaeslur = (heilsugaeslaId) => {
    var docRef = db.collection("heilsugaeslur");
    return new Promise((resolve) => {
        docRef.get().then((querySnapshot) => {
            querySnapshot.forEach(function(doc){
                if (doc.exists) {
                    resolve(doc.data());
                } else {
                    resolve(null);
                }
            })
            
        }).catch((err) => {
            console.error(err);
            resolve(null);
        });
    });
}
