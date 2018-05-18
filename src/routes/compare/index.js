/**
 * @author  Guillermo David Paredes Torrez, https://github.com/GuillermoParedes
 * @email  gdavid.ptorrez@gmail.com
 * @link    url goes here
 */

import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import _ from 'lodash';

import JSONCARS from './../../api/cars.json';
import { item as Item } from './../../components'
import { Alert } from 'reactstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
class Compare extends Component {


  componentDidMount() {
    console.log("componentDidMount", this.props);
    console.log("componentDidMount", this.props);
    let { id_car } = this.props.match.params;
    let carA = _.find(JSONCARS, car => {
      return car.id === id_car
    })
    this.refs.CompareA.setState({ ...carA })
  }
  handleChange = (selectedOption) => {
    console.log(selectedOption);
    // this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
    console.log(this.refs);
    let carB = _.find(JSONCARS, car => {
      return car.id === selectedOption.value
    })
    this.refs.CompareB.setState({...carB})
  }
  filterCars () {
    let { id_car } = this.props.match.params;
    let dataCars = [];
    for(let i in JSONCARS) {
      let car = JSONCARS[i];
      if (id_car !== car.id) {
        let newObj = {
          value: car.id,
          label: car.model
        }
        dataCars.push(newObj); 
      }
    }
    console.log("FilterCars", dataCars);
    return dataCars;
  }
  render() {
    return (
      <div className="containerHome">
        <Alert color="primary" className='text-center'>
          <h2>Comparando 2 tipos de Autos</h2>
        </Alert>
        <div className="container-fluid"><br />
          <Select
            ref='SelectedCar'
            name="form-field-name"
            value={'selectedOption'}
            onChange={this.handleChange}
            options={this.filterCars()}
          /><br />
          <div className="row">
            <div className="col-6">
              <Item ref='CompareA' />
            </div>
            <div className="col-6">
              <Item ref='CompareB' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Compare.propTypes = {

}

Compare.defaultProps = {

};

export default Compare;
