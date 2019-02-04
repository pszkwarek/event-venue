import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Highlights from './components/Highlights';
import VenueNfo from './components/venueNfo/';
import Pricing from './components/pricing';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <Highlights />
        <VenueNfo />
        <Pricing />
      </div>
    );
  }
}

export default App;
