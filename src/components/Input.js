import React, { Component } from "react";
import { connect } from 'react-redux'
import {search} from '../actions/countries'

class Input extends Component {
  state = {
    search: ""
  };

  
  handleChange = (evt) => {
    this.setState({
      search: evt.target.value,
    });

   if(this.props.filter) {
      this.props.dispatch(search(this.state.search))
    }

  };

  submitInput = () => {
    this.props.handleSubmit(this.state.search)
  }


  render() {
    return (
      <div className="form-group">
        <input
          className="y-input"
          value={this.state.search}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
        />
        <button
          onClick={this.submitInput}
          disabled={!this.state.search}
          className="btn"
        >
          Search
        </button>
      </div>
    );
  }
}

export default connect()(Input);