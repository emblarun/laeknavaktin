/**
 * Þetta model bætir upplýsingum við users (currentUser) á database
 * addToUser = object
*/
// insert userName and phoneNumber
const insertUserToDB = (addToUser)=>{
	user = currentUser;
	db.collection("users").doc(user.phoneNumber).set({ 
		addToUser
	}).then(()=>{
	
	}).catch((error)=>{
	  console.log("error writing user profile: ", error);
	});	
}
