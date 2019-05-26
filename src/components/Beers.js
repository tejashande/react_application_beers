import React, { Component } from 'react';
import BeerItem from './BeerItem';
import PropTypes from 'prop-types';

class Beers extends Component {

	render() {
		return this.props.beers.map((beer) => (
			<BeerItem key={beer.id} 
				beer={beer} 
				delBeer={this.props.delBeer} 
				addToFavourite={this.props.addToFavourite}
			/>
		));
	}
}

// PropTypes
BeerItem.propTypes = {
	beer: PropTypes.object.isRequired,
	delBeer: PropTypes.func.isRequired
}

export default Beers;