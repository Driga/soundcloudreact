import { combineReducers } from 'redux'
import tracklist from './tracklistReducer'
import player from './playerReducers'
import { routerReducer } from 'react-router-redux'


export default combineReducers({
  routerReducer,
  tracklist,
  player
})