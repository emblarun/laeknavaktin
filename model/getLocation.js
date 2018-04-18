//Get geolocation coordinates

const getHeilsugaeslur = (heilsugaeslaId) => {
    var docRef = db.collection("heilsugaeslur").doc(heilsugaeslur);
    return new Promise((resolve) => {
        docRef.get().then((doc) => {
            if (doc.exists) {
                resolve(doc.data());
            } else {
                resolve(null);
            }
        }).catch((err) => {
            console.error(err);
            resolve(null);
        });
    });
}
