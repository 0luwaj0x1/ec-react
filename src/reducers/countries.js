import { GET_COUNTRY } from '../actions/countries';



export const country = (state={}, action) => {

  switch(action.type) {
    case GET_COUNTRY: 
     return {...state, ...action.country}
    default: 
    return state
  }

}