import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDAcjKLYN4YtDoYJz_mryZogKrQWw9MdXA",
    authDomain: "t-shirt-shop-8d10f.firebaseapp.com",
    projectId: "t-shirt-shop-8d10f",
    storageBucket: "t-shirt-shop-8d10f.appspot.com",
    messagingSenderId: "412499472135",
    appId: "1:412499472135:web:c8ab3b91b27acc00f69fa2"
  };

const fire = firebase.initializeApp(firebaseConfig)

export default fire