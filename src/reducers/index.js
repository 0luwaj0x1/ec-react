import { country } from './countries';
import { error } from './error'
import { loading } from './loading'
import {filteredCountries} from './filteredCountries'
import { search } from './search'
import { allCountries } from './allCountries'
import { slot } from './slot'

import { combineReducers } from 'redux'



export default combineReducers({
  country,
  error,
  loading,
  filteredCountries,
  search,
  allCountries,
  slot
})