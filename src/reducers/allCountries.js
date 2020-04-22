import { GET_COUNTRIES } from "../actions/countries";

export const allCountries = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return [...action.countries];
    default:
      return state;
  }
};
