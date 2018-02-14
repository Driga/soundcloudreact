import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TrackList  from '../tracklist/TrackList';
import Filters  from '../filters/Filters';


const Tracks = props => (
  <div>
    <Filters />
    <TrackList />
    <p><button className="btn btn-default" onClick={() => props.changePage()}>Abou Us</button></p>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)


export default connect(
  undefined,
  mapDispatchToProps
)(Tracks)
