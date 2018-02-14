import React, {Component} from 'react'
import {connect} from 'react-redux'


class Player extends Component {
  componentWillMount() {

  }

  componentWillReceiveProps() {
    this.refs.player.src = 'https://api.soundcloud.com/tracks/' + this.props.player.currentTrack + '/stream?client_id=1512fb9cbe8228095fe92c6503e3a071'

    this.refs.player.load();
    setTimeout(()=>{
      this.props.player.isPlaying && this.refs.player.play();
      console.log(this.refs.player.paused);

    }, 100)

  }

  render() {

    const props = this.props.player;
    return <div className="player">
      <audio
        ref="player"
        src={"https://api.soundcloud.com/tracks/" + props.currentTrack + "/stream?client_id=1512fb9cbe8228095fe92c6503e3a071"}
        controls>
        Your browser does not support the audio tag.
      </audio>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    player: state.player
  }
}

export default connect(mapStateToProps)(Player)
