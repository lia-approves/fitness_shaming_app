import React, { Component } from 'react';
import fire from './fire';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
}

class signInButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	signIn = event => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider);
	}

	signOut = event => {
		firebase.auth().signOut();
	}

	render() {
	      <div id="user-container">
			<div hidden id="user-pic"></div>
			<div hidden id="user-name"></div>
			<button hidden id="sign-out" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white" onPress={this.signOut}>
			          Sign-out
		        </button>
			        <button id="sign-in" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white" onPress={this.signIn}>
			          <i class="material-icons">account_circle</i>Sign-in with Google
		        </button>
		</div>
	}
}



export default App;
