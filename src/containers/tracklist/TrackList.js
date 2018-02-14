import React, {Component} from 'react'
import {connect} from 'react-redux'
import Track from './../track/Track'


class TrackList extends Component {
  render() {
    const {tracks} = this.props.tracklist
    let trackList = tracks.map((item) => <Track track={item} key={item.id}/>)
    return <div className="track-list">
      <h1>{this.props.tracklist.title}</h1>
      <table className="table-bordered track-list-table">
        <tbody>
          {trackList}
        </tbody>
      </table>
      <div>{this.props.tracklist.tracksError ? 'Error loading track list' : ''}</div>
    </div>
  }

  componentWillMount() {
    if (this.props.tracklist.tracks.length <= 0) {
      loadTracks(this.props.dispatch, this.props.userId);
    }
  }
}


function loadTracks(dispatch, userId) {
  return fetch(`https://api.soundcloud.com/tracks?client_id=1512fb9cbe8228095fe92c6503e3a071`)
    .then(res => res.json())
    .then(
      data => {
        console.log('Request tracklist')
        dispatch({type: 'LOAD_TRACKS_SUCCESS', data})
      },
      err => dispatch({type: 'LOAD_TRACKS_FAILURE', err})
    );
}


function mapStateToProps(state) {
  return {
    tracklist: state.tracklist,
  }
}

export default connect(mapStateToProps)(TrackList)