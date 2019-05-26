import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BeerItem extends Component {

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
		const { id, name, favourite } = this.props.beer;
		return (
			<div style={this.getStyle()}>
				<Link to={`/beers/${id}`} style={linkStyle}>{name}</Link>
				<div onClick={this.props.addToFavourite.bind(this, this.props.beer)} style={favourite ? favBtnStyle : nonFavBtnStyle} />
			</div>
		)
	}
}

// PropTypes
BeerItem.propTypes = {
	beer: PropTypes.object.isRequired
}

const linkStyle = {
	textDecoration: 'none'
}

const favBtnStyle = {
	background: "url('./fav.svg') no-repeat 50% 50%",
	width: '20px'
}

const nonFavBtnStyle = {
	background: "url('./nonfav.svg') no-repeat 50% 50%",
	width: '20px'
}

export default BeerItem;