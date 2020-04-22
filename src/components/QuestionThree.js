import React, { Component } from 'react'
import {connect} from 'react-redux'
import Input from './Input'
import { getAllCountries } from '../actions/countries'
import Country from './Country'
import { loading } from '../reducers/loading'


class QuestionThree extends Component {

  componentDidMount () {
    this.props.dispatch(getAllCountries())
  }

  render() {
    const {countries, loading, search} = this.props
     
    if (loading.status) {
      return <h3>Loading...</h3>;
    }

    return(
      <div>
        <Input 
        handleSubmit={() => {}}
        placeholder="search countries"
        filter={true}
        />
        <div className="countries">
        {countries.filter((country) => country.name.toLowerCase().includes(search.term))
          .map((country) => (
          <Country key={country.name} country={country} />
        ))}
        </div>    
      </div>
    )
  }
}

const mapStateToProps = ({allCountries,loading, search}) => ({
  countries: allCountries,
  loading,
  search
})

export default connect(mapStateToProps)(QuestionThree);