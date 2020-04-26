export const TOGGLE_LOADING = 'TOOGLE_LOADING';



export const getLoadingStatus = (status) => {
  return {
    type: TOGGLE_LOADING,
    status
  }
}