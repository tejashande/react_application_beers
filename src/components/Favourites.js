import React, { Component } from 'react';
import FavouriteItem from './FavouriteItem';
import PropTypes from 'prop-types';

class Favourites extends Component {

	render() {
		if(this.props.favourites.length > 0) {
			return this.props.favourites.map((favourite) => (
				<FavouriteItem key={favourite.id} 
					favourite={favourite} 
					delFavourite={this.props.delFavourite} 
				/>
			));
		} else {
			return (<div style={divBorder}>No favourites found</div>)
		}
	}
}

// PropTypes
Favourites.propTypes = {
	delFavourite: PropTypes.func.isRequired
}

const divBorder = {
	background: '#f4f4f4',
	padding: '10px',
	borderBottom: '1px #ccc dotted'
}


export default Favourites;