import api from '../apis/api'
import { getError } from "./error";
import { getLoadingStatus } from "./loading";

export const SPIN_DATA = 'SPIN_DATA'


export const getSpinResult = (result) => {
  return {
    type: SPIN_DATA,
    result
  }
}


export const fetchSpinResult = () => {
  return (dispatch, getState) => {
    dispatch(getLoadingStatus(true));
    api
      .get(`/api/spin`)
      .then((result) => {
        let {initialCoin} = getState().slot
        const {coins} = result.data
        initialCoin = (initialCoin - 1) + coins
        dispatch(getLoadingStatus(false));
        dispatch(getSpinResult({...result.data, initialCoin}));
      })
      .catch((error) => {
        dispatch(getLoadingStatus(false));
        dispatch(getError(error.response.data));
      });
  };
}