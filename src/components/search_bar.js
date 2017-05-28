import React, { Component } from 'react';



//creates input bar in HTML

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

	//we always need a render method to return a JSX
	render() {

		return(
			<div className= "search-bar">
		 		<input 
		 		value={this.state.term}
		 		onChange={event => this.onInputChange(event.target.value)} />
		 	</div>
		);
	}

	onInputChange(term) {

		this.setState({term});
		this.props.onSearchTermChange(term);

	}


}

export default SearchBar;