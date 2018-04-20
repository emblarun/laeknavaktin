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
 * til að sjá currentUser í console á skiljanlegan hátt, skrifið: JSON.stringify(currentUser,null,4)
 *
 */

// Initialize the FirebaseUI Widget using Firebase.
let currentUser = null;
const ui = new firebaseui.auth.AuthUI(firebase.auth());

const signInWithFirebase = function() {
	const authenticationDiv = document.getElementById("firebaseui-auth-container");
	const firebaseUiOptions = {
		signInSuccessUrl: 'index.html', // landing page for succesful login
		signInOptions: [
			{	
				provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
				recaptchaParameters: {
					type: 'image', // 'audio'
					size: 'invisible', // 'invisible', 'normal' or 'compact'
					badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
				},
				defaultCountry: 'IS', // Set default country to the United Kingdom (+44).
				// For prefilling the national number, set defaultNationNumber.
				// This will only be observed if only phone Auth provider is used since
				// for multiple providers, the NASCAR screen will always render first
				// with a 'sign in with phone number' button.
			}
		],
		tosUrl: '<your-tos-url>',//link to the TOS
	};
	
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
		// User is signed in.
		currentUser = user;
		insertUserToDB({
			'phone': user.phoneNumber, 
			'uid': user.uid,
		});
	  } else {
		
		// The start method will wait until the DOM is loaded.
		ui.start('#firebaseui-auth-container', firebaseUiOptions);
	  }
	}, function(error) {
	  console.log("error with authenticator: ", error);
	});
};
