import { SEARCH_TERM } from '../actions/countries'



export const search = (state={term: ''}, action) => {

  switch(action.type){
    case SEARCH_TERM :
      return {...state, term: action.term}
    default:
      return state  
  }
}