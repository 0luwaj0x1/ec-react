import api from "../apis/api";
import { getError } from "./error";
import { getLoadingStatus } from "./loading";

export const GET_COUNTRY = "GET_COUNTRY";

export const GET_COUNTRIES = "GET_COUNTRIES";

export const GET_FILTERED_COUNTRIES = "GET_FILTERED_COUNTRIES";

export const SEARCH_TERM = "SEARCH_TERM";

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

export const getFilteredCountries = (countries) => {
  return {
    type: GET_FILTERED_COUNTRIES,
    countries,
  };
};

export const search = (term) => {
  return {
    type: SEARCH_TERM,
    term,
  };
};

export const fetchCountry = (name) => {
  return (dispatch) => {
    dispatch(getLoadingStatus(true));
    api
      .get(`/api/${name}`)
      .then((country) => {
        dispatch(getLoadingStatus(false));
        dispatch(getCountry(country.data));
      })
      .catch((error) => {
        dispatch(getLoadingStatus(false));
        dispatch(getError(error.response.data));
      });
  };
};

export const filterCountries = (filters) => {
  return (dispatch) => {
    dispatch(getLoadingStatus(true));
    api
      .get(`/api/filter?words=${filters}`)
      .then((countries) => {
        dispatch(getLoadingStatus(false));
        dispatch(getFilteredCountries(countries.data));
      })
      .catch((error) => {
        dispatch(getLoadingStatus(false));
        dispatch(getError(error.response.data));
      });
  };
};

export const getAllCountries = () => {
  return dispatch => {
    dispatch(getLoadingStatus(true));
    api
      .get(`/api/all`)
      .then((countries) => {
        dispatch(getLoadingStatus(false));
        dispatch(getCountries(countries.data));
      })
      .catch((error) => {
        dispatch(getLoadingStatus(false));
        dispatch(getError(error.response.data));
      });
  }
}