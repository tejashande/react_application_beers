import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class FavouriteItem extends Component {

	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between'
		}
	}

	render() {
	  	const { id, name } = this.props.favourite;
	    return (
	    	<div style={this.getStyle()}>
    			<Link to={`/beers/${id}`} style={linkStyle}>{name}</Link>
    			<div onClick={this.props.delFavourite.bind(this, id)} style={favBtnStyle}></div>
	    	</div>
	    )
	}
}

// PropTypes
FavouriteItem.propTypes = {
	favourite: PropTypes.object.isRequired,
	delFavourite: PropTypes.func.isRequired
}

const linkStyle = {
	textDecoration: 'none'
}

const favBtnStyle = {
	background: "url('./fav.svg') no-repeat 50% 50%",
	width: '20px'
}

export default FavouriteItem;