//firebase phone signup and call insertUserToDB

//firebase phone signup and call insertUserToDB

/**
 * https://github.com/firebase/firebaseui-web#installation 
 *
 * bara insert <div id="firebaseui-auth-container"></div> þar sem auðkennirinn á að birtast
 *
 * Það er ekki hægt að breyta firebaseUI authentication div, en það væri tilvalið að 
 * búa til nýja síðu sem notandi er sendur á þegar þeim tekst að auðkenna sig, þar væri
 * hægt að fylla inn kennitölu og aðrar upplýsingar sem hægt væri að bæta inn á þeirra 
 * user profile 
 *
 */

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

initApp = function() {
		
	// The start method will wait until the DOM is loaded.
	ui.start('#firebaseui-auth-container', {
	  signInOptions: [
		{
			signInSuccessUrl: 'index.html', // landing page for succesful login
			provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
			recaptchaParameters: {
				type: 'image', // 'audio'
				size: 'normal', // 'invisible' or 'compact'
				badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
			},
			defaultCountry: 'IS', // Set default country to the United Kingdom (+44).
			// For prefilling the national number, set defaultNationNumber.
			// This will only be observed if only phone Auth provider is used since
			// for multiple providers, the NASCAR screen will always render first
			// with a 'sign in with phone number' button.
			
			tosUrl: '<your-tos-url>',//link to the TOS 
		}
	  ]
	}); 
		
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user != null) {
		// User is signed in.
		
		//gets the IdToken info when authenticated
		user.getIdToken().then(function(accessToken) {
			db.collection("users").doc(user.uid).set({ //Creates a user document with UID 
				'phone': user.phoneNumber,
				
			
			}).then(()=>{
			  console.log("// currentUser updated!");
			}).catch(()=>{
			  console.log("error writing user profile: ", error);
			});		  
		});
	  } else {
		// User is signed out.
		document.getElementById('sign-in').textContent = 'Sign in';
	  }
	}, function(error) {
	  console.log(error);
	});
};

window.addEventListener('load', function() {
initApp()
});
