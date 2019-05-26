import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Beer.css';

class Beer extends Component {

	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted'
		}
	}

	render() {
		const beer = this.props.beers.find( beer => beer.id === Number(this.props.match.params.id) )
		if(beer === undefined) {
			return <Redirect to='/' />
		} else {
			return (
				<div>
					<div style={this.getStyle()}>
						<label>Id: </label>
						<input type="text" id="id" name="id" defaultValue={beer.id} disable="true" />
					</div>
					<div style={this.getStyle()}>
						<label>Name: </label>
						<input type="text" id="name" name="name" defaultValue={beer.name} disable="true" />
					</div>
					<div style={this.getStyle()}>
						<label>Tagline: </label>
						<input type="text" id="tagline" name="tagline" defaultValue={beer.tagline} disable="true" />
					</div>
					<div style={this.getStyle()}>
						<label>First Brewed: </label>
						<input type="text" id="first_brewed" name="first_brewed" defaultValue={beer.first_brewed} disable="true" />
					</div>
					<div style={this.getStyle()}>
						<label>Description: </label>
						<textarea id="description" name="description" defaultValue={beer.description} disabled></textarea>
					</div>
					<div style={this.getStyle()}>
						<label>Image URL: </label>
						<input type="text" id="image_url" name="image_url" defaultValue={beer.image_url} disable="true" />
					</div>
					<div style={this.getStyle()}>
						<label>ABV: </label>
						<input type="number" id="abv" name="abv" defaultValue={beer.abv} disable="true" />
					</div>
					<div style={this.getStyle()}>
						<label>IBU: </label>
						<input type="number" id="ibu" name="ibu" defaultValue={beer.ibu} disable="true" />
					</div>
					<div style={this.getStyle()}>
						<label>Target FG: </label>
						<input type="number" id="target_fg" name="target_fg" defaultValue={beer.target_fg} disable="true" />
					</div>
					<div style={this.getStyle()}>
						<label>Target OG: </label>
						<input type="number" id="target_og" name="target_og" defaultValue={beer.target_og} disable="true" />
					</div>
					<div style={this.getStyle()}>
						<label>EBC: </label>
						<input type="number" id="ebc" name="ebc" defaultValue={beer.ebc} disable="true" />
					</div>
					<div style={this.getStyle()}>
						<label>SRM: </label>
						<input type="number" id="srm" name="srm" defaultValue={beer.srm} disable="true" />
					</div>
					<div style={this.getStyle()}>
						<label>PH: </label>
						<input type="number" id="ph" name="ph" defaultValue={beer.ph} disable="true" />
					</div>
					<div style={this.getStyle()}>
						<label>Attenuation Level: </label>
						<input type="number" id="attenuation_level" name="attenuation_level" defaultValue={beer.attenuation_level} disable="true" />
					</div>
					<div style={this.getStyle()}>
						<label>Volume: </label>
						<table>
							<thead>
								<tr>
									<th>Value</th>
									<th>Unit</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{beer.volume.value}</td>
									<td>{beer.volume.unit}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div style={this.getStyle()}>
						<label>Boil Volume: </label>
						<table>
							<thead>
								<tr>
									<th>Value</th>
									<th>Unit</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{beer.boil_volume.value}</td>
									<td>{beer.boil_volume.unit}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div style={this.getStyle()}>
						<label>Method: </label>
						<div style={this.getStyle()}>
							<label>Mash Temp: </label>
							<table>
								<thead>
									<tr>
										<th>Temp Value</th>
										<th>Temp Unit</th>
										<th>Duration</th>
									</tr>
								</thead>
								<tbody>
									{beer.method.mash_temp.map((temperature, index) => 
										<tr key={index}>
											<td>{temperature.temp.value}</td>
											<td>{temperature.temp.unit}</td>
											<td>{temperature.duration}</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
							<div style={this.getStyle()}>
							<label>Fermentation: </label>
							<table>
								<thead>
									<tr>
										<th>Temp Value</th>
										<th>Temp Unit</th>
										<th>Duration</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{beer.method.fermentation.temp.value}</td>
										<td>{beer.method.fermentation.temp.value}</td>
										<td>{beer.method.fermentation.duration}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div style={this.getStyle()}>
							{ beer.method.twist ? <label>Twist: </label> : null }
							{ beer.method.twist ? <textarea id="twist" name="twist" defaultValue={beer.method.twist} disabled></textarea> : null }
						</div>
					</div>
					<div style={this.getStyle()}>
						<label>Ingredients: </label>
						<div style={this.getStyle()}>
							<div><label>Malt: </label></div>
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Amount Value</th>
										<th>Amount Unit</th>
									</tr>
								</thead>
								<tbody>
									{beer.ingredients.malt.map((ingredient, index) => 
										<tr key={index}>
											<td>{ingredient.name}</td>
											<td>{ingredient.amount.value}</td>
											<td>{ingredient.amount.unit}</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
						<div style={this.getStyle()}>
							<label>Hops: </label>
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Amount Value</th>
										<th>Amount Unit</th>
										<th>Add</th>
										<th>Attribute</th>
									</tr>
								</thead>
								<tbody>
									{beer.ingredients.hops.map((ingredient, index) => 
										<tr key={index}>
											<td>{ingredient.name}</td>
											<td>{ingredient.amount.value}</td>
											<td>{ingredient.amount.unit}</td>
											<td>{ingredient.add}</td>
											<td>{ingredient.attribute}</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
						<div style={this.getStyle()}>
							{ beer.ingredients.yeast ? <label>Yeast: </label> : null }
							{ beer.ingredients.yeast ? <textarea id="yeast" name="yeast" defaultValue={beer.ingredients.yeast} disabled></textarea> : null }
						</div>
					</div>
					<div style={this.getStyle()}>
						<label>Food pairing: </label>
						<ul>
							{beer.food_pairing.map((pair, index) => 
								<li key={index}>{pair}</li>
							)}
						</ul>
					</div>
					<div style={this.getStyle()}>
						<label>Brewers Tips: </label>
						<textarea id="brewers_tips" name="brewers_tips" defaultValue={beer.brewers_tips} disabled></textarea>
					</div>
					<div style={this.getStyle()}>
						<label>Contributed By: </label>
						<p>{beer.contributed_by}</p>
					</div>
				</div>
			);
		}
	}
}

// PropTypes
Beer.propTypes = {
	beers: PropTypes.array.isRequired,
}

export default Beer;