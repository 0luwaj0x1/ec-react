import React, { Component } from "react";
import { fetchCountry } from "../actions/countries";
import { connect } from "react-redux";
import { getError } from "../actions/error";
import Input from "./Input";

class QuestionOne extends Component {
  
  submitCountryName = (search) => {
    this.props.dispatch(getError({ message: "" }));
    this.props.dispatch(fetchCountry(search));
  };

  render() {
    const { name, capital, flag, currencies } = this.props.country;
    const [currency] = currencies || [];
    const { error, loading } = this.props;

    if (loading.status) {
      return <h3>Loading...</h3>;
    }

    return (
      <div>
        <Input handleSubmit={this.submitCountryName} placeholder='Enter a country full name' />

        {error.message ? (
          <h4 style={{ color: "red" }}>{error.message}</h4>
        ) : (
          <div className="country">
            <div className="flag">
              <img src={flag} alt={name} />
            </div>
            <div className="country-details">
              <ul>
                <li>{name ? `Name: ${name}` : null}</li>
                <li>{capital ? `Capital: ${capital}` : null}</li>
                <li>{currency ? `Curreny Code: ${currency.code}` : null}</li>
                <li>
                  {currency ? `Curreny symbol: ${currency.symbol}` : null}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ country, error, loading }) => ({
  country,
  error,
  loading,
});

export default connect(mapStateToProps)(QuestionOne);
