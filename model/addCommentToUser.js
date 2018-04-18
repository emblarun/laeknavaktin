//update the user collection with a Comment for the current user.
//can be done with a subcollection or just adding an array of objects
 const insertCommentToUser = (phoneNumber, comment)=>{
   db.collection("users").where("phoneNumber", "==", phoneNumber).get().then((querySnapshot)=>{
     querySnapshot.forEach((doc)=>{
       db.collection("users").doc(doc.id).update({comment:comment})
     })
   })
 }
//
// console.log(getProfileInfo(userName));
// in controller you have a click function {
// insertCommentToUser(phoneNumber, document.getElementById("reasonForVisit").value);
//
//}
