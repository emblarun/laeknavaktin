const config = {
  apiKey: "AIzaSyAKOakrWdwycjkaPQIFJZeQ6FZ7BnS_eTw",
  authDomain: "laeknavakt.firebaseapp.com",
  databaseURL: "https://laeknavakt.firebaseio.com",
  projectId: "laeknavakt",
  storageBucket: "laeknavakt.appspot.com",
  messagingSenderId: "996623521853"
};
firebase.initializeApp(config);

const db = firebase.firestore(); // The database
