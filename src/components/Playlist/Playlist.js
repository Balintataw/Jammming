import React from 'react';
import './Playlist.css';
import TrackList from '../Tracklist/Tracklist';                    //from where?

class PlayList extends React.Component {
  constructor(props) {
    super(props)

    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange(event) {
    this.props.handleNameChange(event.target.value)
  }

  render(event) {
    return (
      <div className="Playlist">
        <input defaultValue={this.props.playlistName}
               onChange={this.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks}
                   isRemoval={true}
                   onRemove={this.props.onRemove}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;
