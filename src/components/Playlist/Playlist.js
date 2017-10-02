import React from 'react';
import './Playlist.css';
import './components/Tracklist'                    //from where?

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        //<Tracklist />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

export default Playlist;
