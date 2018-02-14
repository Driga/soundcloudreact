const FILTER = 'FILTER'
const LOAD_TRACKS_SUCCESS = 'LOAD_TRACKS_SUCCESS'
const LOAD_TRACKS_FAILURE = 'LOAD_TRACKS_FAILURE'

export default function tracklist(state = {}, action) {
  switch (action.type) {
    case FILTER:
      return {
        ...state,
        tracks: state.tracks.filter(track => track[action.payload])
      }

      case LOAD_TRACKS_SUCCESS:
      return {
        ...state,
        tracks: action.data
      }

    case LOAD_TRACKS_FAILURE:
      return {
        ...state,
        tracks: [],
        tracksError: true
      }

    default:
      return {
        ...state
      }
  }
}

