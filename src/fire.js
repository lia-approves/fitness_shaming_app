import firebase from 'firebase'
var config = {
	apiKey: "AIzaSyBMAjlrJCjjge1tl0YCxsvqbd_OA3zn4-M",
	authDomain: "fitness-shaming.firebaseapp.com",
	databaseURL: "https://fitness-shaming.firebaseio.com",
	storageBucket: "fitness-shaming.appspot.com",
	messagingSenderId: "428077258061"
};
var fire = firebase.initializeApp(config);
export default fire;
