import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class TodoItem extends Component {

	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration : this.props.todo.completed ? 'line-through' : 'none'
		}
	}

	render() {
	  	const { id, name } = this.props.todo;
	    return (
	    	<div style={this.getStyle()}>
	    		<p>
	    			<Link to={`/beers/${id}`} style={linkStyle}>{name}</Link>
	    			<button onClick={this.props.addToFavourite.bind(this, this.props.todo)} style={favBtnStyle}></button>
	    		</p>
	    	</div>
	    )
	}
}

// PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
}


const linkStyle = {
	textDecoration: 'none'
}

const favBtnStyle = {
	background: '#008000',
	color: '#fff',
	border: 'none',
	padding: '5px 8px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

export default TodoItem;