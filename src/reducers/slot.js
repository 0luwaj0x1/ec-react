import { SPIN_DATA } from '../actions/slot'



export const slot = (state={initialCoin: 20}, action) => {

  switch(action.type){
    case SPIN_DATA:
      return {...state, ...action.result}
    default:
      return state  
  }
}