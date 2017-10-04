import React from 'react';
import './Tracklist.css';
import './Track';                 //from where?

class Tracklist extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {
        this.props.tracks.map(function(track => {
          return <Track key={track.id} track={track} onAdd={this.props.onAdd} />
          }))
        }
        // STEP 35
        //Render the track name, artist, and album.
        //Use the following property calls to access the track's name, artist, and album:
        //this.props.track.name
        //this.props.track.artist
        //this.props.track.album
      </div>
    )
  }
}

export default Tracklist;
