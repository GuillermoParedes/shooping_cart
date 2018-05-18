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
    // this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  filterCars () {
    let { id_car } = this.props.match.params;

    let dataCars = _.filter(JSONCARS, car => {
      if (car.id !== id_car) {
        console.log("carFilter model", car);
        return ({
          value: car.id,
          label: car.model
        })
      }
    })
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
