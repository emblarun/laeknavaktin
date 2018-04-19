// insert userName and phoneNumber
const insertUserToDB = (user)=>{
	db.collection("users").doc(user.phoneNumber).set({ 
		'phone': user.phoneNumber, 
		'uid': user.uid,
	}).then(()=>{
	  currentUser = user;
	  console.log("// currentUser updated!");
	}).catch(()=>{
	  console.log("error writing user profile: ", error);
	});	
}