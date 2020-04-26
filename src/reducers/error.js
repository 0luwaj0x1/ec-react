import { ERROR } from '../actions/error'



export const error = (state={message: ''}, action) => {

  switch(action.type){
    case ERROR:
      return {...state, ...action.error}
    default:
      return state  
  }
}