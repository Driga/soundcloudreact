import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {filter} from './FiltersActions'


class Filters extends Component {
  render() {
    const props = this.props
    return  <div className="filter-bar">
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={props.showAll}>All</button>
                <button type="button" className="btn btn-secondary" onClick={props.filterFav}>Favorites</button>
              </div>
            </div>
  }
}

const mapStateToProps = state => {
  return {
    tracklist: state.tracklist
  }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
  filterFav: () => {
    return filter('favorite')
  },
  showAll: () => {
    return filter()
  },
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Filters)