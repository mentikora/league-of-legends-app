import React, { Component } from 'react';
import $ from 'jquery'; 

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
    let URL = "https://eun1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summonerName + "?api_key=" + key;


    $.getJSON(URL, function(data){
      this.setState({ summonerData: data });
    });

  }

  render(){
    const summonerData = this.state.summonerData;
    return(
      <div className="profile-search">
        <input className="search-field" type="text" placeholder="Enter summoner name.." value="Mentikora" />
        <span className="button button-search" onClick={this.onSearchButtonClick}>Search</span>
        <div>{JSON.stringify(summonerData)}</div>
      </div>
    );
  }
}

export default ProfileSearch;