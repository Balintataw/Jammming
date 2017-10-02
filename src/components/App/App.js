import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Playlist/Playlist';
import './components/SearchBar/SearchBar';
import './components/SearchResults/SearchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults = [{name}, {artist}, {album}];
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />                             //14 16 and 17
          <div className="App-playlist">
            <SearchResults={this.state.searchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
