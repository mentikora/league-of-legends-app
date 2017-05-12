import React, { Component } from 'react';

var ProfileSearch = React.createClass({

	onSearchButtonClick(){
		let i = document.querySelector('.summoner_name');
		console.log(i.value);
	},

	render(){
		return(
			<div className="profile-search">
				<input className="summoner-name" type="text" placeholder="Enter summoner name.." />
				<span className="button button-search" onClick={this.onSearchButtonClick}>Search</span>
			</div>
		);
	}
});

export default ProfileSearch;