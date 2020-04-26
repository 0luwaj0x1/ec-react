import { TOGGLE_LOADING } from '../actions/loading'


export const loading = (state={status:false}, action) => {
  switch(action.type) {
    case TOGGLE_LOADING:
      return {...state, status: action.status}
    default:
      return state;   
  }
}