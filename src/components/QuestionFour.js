import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSpinResult, getSpinResult } from "../actions/slot";

class QuestionFour extends Component {
  startSpin = () => {
    this.props.dispatch(fetchSpinResult());
  };

  reset = () => {
    this.props.dispatch(
      getSpinResult({ initialCoin: 20, spin: null, coins: null })
    );
  };

  render() {
    const { initialCoin, spin, coins } = this.props.slot;
    const { loading } = this.props;
    return (
      <div className="spin-container">
        <h3>No of Coins : {initialCoin} </h3>
        <div className="btn-group">
          <button
            onClick={this.startSpin}
            disabled={initialCoin <= 0 || loading.status}
            className="btn btn-spin"
          >
            SPIN
          </button>

          <button onClick={this.reset} className="btn btn-spin">
            RESET
          </button>
        </div>

        {loading.status ? (
          <h4>Loading...</h4>
        ) : (
          <div>
            <h2>Result: {spin} </h2>
            <h3 style={{ marginTop: "40px" }}>No of coins won: {coins}</h3>
          </div>
        )}
      </div>
    );
  }
}
const mapPropsToState = ({ slot, loading }) => ({
  slot,
  loading,
});

export default connect(mapPropsToState)(QuestionFour);
