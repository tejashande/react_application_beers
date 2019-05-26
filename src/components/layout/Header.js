import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header style={headerStyle}>
			<h1>Brands of Beer</h1>
			<Link to="/" style={linkStyle}>Home</Link> | <Link 
			to="/favourites" style={linkStyle}>Favourites</Link>
		</header>
	)
}

const linkStyle = {
	color: '#fff'
}

const headerStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
}

export default Header;