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
let currentUser = 0

const authenticationDiv = document.getElementById("firebaseui-auth-container");
var ui = new firebaseui.auth.AuthUI(firebase.auth());
const firebaseUiOptions = {signInOptions: [
	{	//options for phone
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
]};

const signInWithFirebase = function() {

	const firebaseUiDiv = document.getElementById("firebaseui-auth-container");
	// The start method will wait until the DOM is loaded.
	ui.start('#firebaseui-auth-container', firebaseUiOptions); 
		
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user != null) {
		// User is signed in.
		insertUserToDB(user);
		currentUser=user;
		firebaseUiDiv.style.display = "none";
	  } else {
		// User is signed out.
		document.getElementById('sign-in').textContent = 'Sign in';
		firebaseUiDiv.style.display = "block";
	  }
	}, function(error) {
	  console.log(error);
	});
};
