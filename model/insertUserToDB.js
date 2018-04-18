// insert userName and phoneNumber
const insertUserToDB = (user)=>{
		
	db.collection("users").doc(user.phoneNumber).set({ //Creates a user document with UID
		'phone': user.phoneNumber,
	}).then(()=>{
	  console.log("// currentUser updated!");
	  currentUser = user;
	}).catch(()=>{
	  console.log("error writing user profile: ", error);
	});	
}