export const ERROR = 'ERROR'


export const getError = (error) => {
  return {
    type: ERROR,
    error
  }
}