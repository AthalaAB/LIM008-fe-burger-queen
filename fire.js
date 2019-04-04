import firebase from "firebase"

var config = {
    apiKey: "AIzaSyDh88svmBSUzHQQ0TSCBubZa2aF6KtP8mM",
    authDomain: "burger-queen-db617.firebaseapp.com",
    databaseURL: "https://burger-queen-db617.firebaseio.com",
    projectId: "burger-queen-db617",
    storageBucket: "burger-queen-db617.appspot.com",
    messagingSenderId: "581805213091"
  };
  const fire =   firebase.initializeApp(config);

  export default fire;