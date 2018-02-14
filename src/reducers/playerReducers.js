const PLAY = 'PLAY'

export default function player(state = {}, action) {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        currentTrack: action.trackId,
        isPlaying: true
      }

    default:
      return {
        ...state
      }
  }
}

