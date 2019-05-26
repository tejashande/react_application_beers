import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Beers from './components/Beers';
import Favourites from './components/Favourites';
import Header from './components/layout/Header';
import Beer from './components/Beer';
import './App.css';

class App extends Component {

  state = {
    beers: [],
    favourites: []
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(res => this.setState({ 
        beers: res.data.map(beer => {
          beer.favourite = false;
          return beer;
        }) 
      }));
  }

  delBeer = (id) => {
    this.setState({ beers: [...this.state.beers.filter(beer => beer.id !== id)] })
  }

  delFavourite = (id) => {
    this.setState({ favourites: [...this.state.favourites.filter(favourite => favourite.id !== id)] })
    this.setState({beers: this.state.beers.map(beer => {
        if(beer.id === id) {
          beer.favourite = !beer.favourite;  
        }
        return beer;
      })
    })
  }

  addToFavourite = (beer) => {
    if(beer.favourite) {
      beer.favourite = !beer.favourite;
      this.setState({ favourites: [...this.state.favourites.filter(favourite => favourite.id !== beer.id)] })
    } else {
      beer.favourite = !beer.favourite;
      this.setState({ favourites: [...this.state.favourites, beer] })
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => ( 
              <React.Fragment>
                <Beers beers={this.state.beers} 
                  delBeer={this.delBeer}
                  addToFavourite={this.addToFavourite}
                />
              </React.Fragment>
            )} />
            <Route exact path="/favourites" render={props => ( 
              <React.Fragment>
                <Favourites favourites={this.state.favourites} 
                  delFavourite={this.delFavourite}
                  addToFavourite={this.addToFavourite}
                />
              </React.Fragment>
            )} />
            <Route exact path="/beers/:id" render={props => ( 
              <React.Fragment>
                <Beer beers={this.state.beers} {...props} />
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;