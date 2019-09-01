import React, { Component } from 'react';

class Profile extends Component{

	
	render(){
		let userdata1=this.props.userData;
		let followers=`${userdata1.homeURL}/followers`;
		let following=`${userdata1.homeURL}/following`;
		let repos=`${userdata1.homeURL}/repositories`;
	
	if (userdata1.notFound === 'user not Found'){
		return(
			<div className="notFound">
				<h2>Heyyyy</h2>
				<p>Are you sure, for whom you are looking for ???</p>
			</div>
		);
	}else{
				return(
			<section className="github-profile">
				<div className="github-profile-info">
            <a href={userdata1.homeUrl} target="_blank" title={userdata1.name || userdata1.username}><img src={userdata1.avatar} /></a>
            <h2><a href={userdata1.homeUrl} title={userdata1.username} target="_blank">{userdata1.name || userdata1.username}</a></h2>
            <h3>{userdata1.location}</h3>
          </div>
          <div className="github-profile-state">
            <ul>
               <li>
                  <a href={followers} target="_blank" title="Number Of Followers"><i>{userdata1.followers}</i><span>Followers</span></a>
               </li>
               <li>
                  <a href={repos} target="_blank" title="Number Of Repositoriy"><i>{userdata1.repos}</i><span>Repositoriy</span></a>
               </li>
               <li>
                  <a href={following} target="_blank" title="Number Of Following"><i>{userdata1.following}</i><span>Following</span></a>
               </li>
            </ul>
          </div>
			</section>
		);
	}
		 
	}
}
export default Profile;