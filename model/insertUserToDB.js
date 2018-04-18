// insert userName and phoneNumber
const insertUserToDB = (user)=>{
    const phoneNumber = user.phoneNumber;
    return db.collection("users").doc(phoneNumber).set({ //Creates a user document with UID 
        'phone': user.phoneNumber,
    }).then(()=>{
        return "succsess";
      console.log("// currentUser updated!");
    }).catch(()=>{
      console.log("error writing user profile: ", error);
    });	
}