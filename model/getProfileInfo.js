const getProfileInfo = (userId) => {
    var docRef = db.collection("userProfile").doc(userId);
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
