import React, { Component } from 'react';
var firebase=require('firebase');

   var config = {
    apiKey: "AIzaSyDzJCs92rpkqUaVewfP8PC1EcZavxXUj_4",
    authDomain: "fir-login-a48e6.firebaseapp.com",
    databaseURL: "https://fir-login-a48e6.firebaseio.com",
    projectId: "fir-login-a48e6",
    storageBucket: "fir-login-a48e6.appspot.com",
    messagingSenderId: "305743473705"
  };
  firebase.initializeApp(config);
  
class Authen extends Component{
	login(event){
		const email=this.refs.email.value;
		const password=this.refs.password.value;
		console.log(email,password); 
		
		const auth=firebase.auth();
		const promise=auth.signInWithEmailAndPassword(email,password);
		promise
		.then(user => { 
			var lout=document.getElementById('logout');
			
			lout.classList.remove('hide');
		})
		promise.catch(e => {
			var err=e.message;
			console.log(err);
			this.setState({err: err});
		});
	}
	signup(){
		const email=this.refs.email.value;
		const password=this.refs.password.value;
		console.log(email,password); 
		
		const auth=firebase.auth();
		const promise=auth.createUserWithEmailAndPassword(email,password);
		
		promise
		.then(user => {
			var err="Welcome "+email;
			console.log("HI");
			firebase.database().ref('Users/'+user.uid).set({
				email: email	
			});
			console.log(user);
			this.setState({err: err});
		});
		promise
		.catch(e=> {
			var err=e.message;
			console.log(err);
			this.setState({err: err});
		});
	}
	
	logout(){
		firebase.auth().signOut();
		var lout=document.getElementById('logout');
		lout.classList.add('hide');
	
	}
	
	google(){
		console.log("I am in google Methon");
		var provider=new firebase.auth.GoogleAuthProvider();
		var promise=firebase.auth().signInWithPopup(provider);
		
		promise.then(result => {
			var user=result.user;
			console.log(user);
			firebase.database().ref('Users/'+user.uid).set({
				email: user.email,
				name: user.displayName
			});
		});
		promise.catch(e => {
			var msg=e.message;
			console.log(msg); 	
		});
	}
	constructor(props){
		super(props);
		this.state={
			err: ''
		};
		this.login=this.login.bind(this);
		this.signup=this.signup.bind(this);
		this.logout=this.logout.bind(this);
		this.google=this.google.bind(this);
	}
	render(){
		return(
			<div>
				<input id="email" ref="email" type="email" placeholder="Enter your email" /> <br />
				<input id="password" ref="password" type="password" placeholder="Enter your password" /> <br />
				<p>{this.state.err}</p>
				<button onClick={this.login}>Login</button>
				<button onClick={this.signup}>Sign Up</button>
				<button onClick={this.logout} id="logout" className="hide">Logout</button>
				<button onClick={this.google} id="google" className="google">Signin with Google</button>
			</div>
		);
	}
}

export default Authen;