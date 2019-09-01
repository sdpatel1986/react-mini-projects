import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class Header extends Component{

	onLogin(){
		this.props.onLogin();
	}
	onLogout(){
		this.props.onLogout();
	}
	render(){
		let page;
		if(this.props.accessToken){
			page=<NavItem onClick={this.onLogout.bind(this)} href="#">Logout</NavItem> 
		}else{
			page=<NavItem onClick={this.onLogin.bind(this)} href="#">Login</NavItem>
		}
		return(
			<Navbar>
				<Navbar.Brand>
					Github Search
				</Navbar.Brand>
				<Nav>
					{page}
				</Nav>
			</Navbar>
		);
	}
}
export default Header;