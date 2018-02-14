import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {trackActions} from "../track/TrackActions";
import * as moment from 'moment';


class Track extends Component {
  render() {
    const {track} = this.props

    return <tr className="track">
      <td><img src={track.artwork_url} alt=""/></td>
      <td>
        <div className="wave-img"><img src={track.waveform_url} alt={track.title}/></div>
        <div className="track-title">{track.title}</div>
        <div className="track-socials">
          <div>Duration: {getTrackTime(track.duration)}</div>
        </div>
      </td>
      <td className="text-center">
        <span onClick={()=>this.props.play(track.id)} className="play glyphicon glyphicon-play-circle">&nbsp;</span>
      </td>
      <td className="text-center">
        <button className="btn btn-default">Comment</button>
      </td>
    </tr>
  }
}


function getTrackTime(duration) {
  let trackDuration = moment.duration(duration)
  let trackMinutes = trackDuration.minutes()
  let trackSeconds = trackDuration.seconds()

  if (trackSeconds.toString().length < 2) {
    trackSeconds = '0' + trackDuration.seconds()
  } else {
    trackSeconds = trackDuration.seconds()
  }

  return trackMinutes + ':' + trackSeconds
}

function mapStateToProps(state) {
  return {
    tracklist: state.tracklist
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  play: (trackId) => {
    return trackActions(trackId)
  }
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Track)