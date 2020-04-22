import { GET_FILTERED_COUNTRIES } from '../actions/countries';



export const filteredCountries = (state=[], action) => {

  switch(action.type) {
      case GET_FILTERED_COUNTRIES:
        return [...action.countries]
      default:
        return state;  
  }

}