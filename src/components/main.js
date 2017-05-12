import React, { Component } from 'react';

class Search extends React.Component {
	render(){
		return(
			<div>
				test 2
			</div>
		);
	}
}

class Main extends React.Component {
	render(){
		return (
			<main>
				{ this.props.children }
				<Search />
			</main>
		);
	}
}

export default Main;