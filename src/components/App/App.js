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
      searchResults: [{name}, {artist}, {album}],  //needs this? restricted use of 'name'?
      playlistName: 'New Playlist',
      playlistTracks: [{name}, {artist}, {album}]
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let notInPlaylist = this.state.playlist.every(playlistTrack =>
      playlistTrack.id !== track.id;                 // step 41
      if (notInPlaylist) {
        playlistTracks.push({track});
      this.setState({playlistTracks: playlistTracks});
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />                             //14 16 and 17
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
