//Get geolocation coordinates

const getHeilsugaeslur = () => {
    var docRef = db.collection("heilsugaeslur")
    return new Promise((resolve) => {
        docRef.get().then((querySnapshot) => {
            const heilsugaeslur = []
            querySnapshot.forEach(function(doc){
                if (doc.exists) {
                    heilsugaeslur.push(doc.data());
                } else {
                    
                }
            })
            resolve(heilsugaeslur)
        }).catch((err) => {
            console.error(err);
            resolve(null);
        });
    });
}
