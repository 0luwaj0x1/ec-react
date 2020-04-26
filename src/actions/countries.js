import api from "../apis/api";
import { getError } from "./error";
import { getLoadingStatus } from "./loading";

export const GET_COUNTRY = "GET_COUNTRY";

export const GET_COUNTRIES = "GET_COUNTRIES";

export const getCountry = (country) => {
  return {
    type: GET_COUNTRY,
    country,
  };
};

export const getCountries = (countries) => {
  return {
    type: GET_COUNTRIES,
    countries,
  };
};

export const fetchCountry = (name) => {
  return (dispatch) => {
    dispatch(getLoadingStatus(true))
    api
      .get(`/api/${name}`)
      .then((country) => {
        dispatch(getLoadingStatus(false))
        dispatch(getCountry(country.data));
      })
      .catch((error) => {
        dispatch(getLoadingStatus(false))
        dispatch(getError(error.response.data))
      });
  };
};
