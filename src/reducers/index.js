import { country } from './countries';
import { error } from './error'
import { loading } from './loading'

import { combineReducers } from 'redux'



export default combineReducers({
  country,
  error,
  loading
})