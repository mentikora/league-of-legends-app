import React, { Component } from 'react';

class ProfileSearch extends React.Component{

	constructor() {
    super();
    this.state = {
      summonerData: null
    };
  }

	onSearchButtonClick(){
		let key = "RGAPI-a1b83495-f7ac-4586-939d-31961ff89aa0";
		let summonerName = document.querySelector('.search-field').value;
		let URL = "https://eune.api.riotgames.com/api/lol/EUNE/v1.4/summoner/by-name/" + summonerName + "?api_key=" + key;
		fetch(URL).then(res => res.json()).then(json => {
      this.setState({ summonerData: json });
    });
	}

	render(){
		return(
			<div className="profile-search">
				<input className="search-field" type="text" placeholder="Enter summoner name.." />
				<span className="button button-search" onClick={this.onSearchButtonClick}>Search</span>
			</div>
		);
	}
}

export default ProfileSearch;