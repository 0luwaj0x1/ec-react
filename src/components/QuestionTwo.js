import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Input from "./Input";
import { filterCountries } from "../actions/countries";
import Country from "./Country";

class QuestionTwo extends Component {
  submitFilters = (filters) => {
    const filteredArr = filters.split(" ").join(",");
    this.props.dispatch(filterCountries(filteredArr));
  };

  render() {
    const { countries, loading } = this.props;

    if (loading.status) {
      return <h3>Loading...</h3>;
    }

    return (
      <Fragment>
        <Input
          handleSubmit={this.submitFilters}
          placeholder="Enter words to separeted by space to filter"
        />
        <div className="countries">
          {countries.map((country) => (
            <Country key={country.name} country={country} />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ filteredCountries, loading }) => ({
  countries: filteredCountries,
  loading,
});

export default connect(mapStateToProps)(QuestionTwo);
