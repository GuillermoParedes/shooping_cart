/**
 * @author  Guillermo David Paredes Torrez, https://github.com/GuillermoParedes
 * @email  gdavid.ptorrez@gmail.com
 * @link    url goes here
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './home.scss';
import JSONCARS from './../../api/cars.json';
import { listItem as ListItem } from './../../components'
class Home extends Component {
  CompararParent(DataItem) {
    this.props.history.push('/_compare/' + DataItem.id)
  }
  render() {
    return (
      <div className="containerHome">
        <div className="container-fluid"> <br />
          <ListItem list={JSONCARS} Comparar={(DataItem) => this.CompararParent(DataItem)}/>  
        </div>
      </div>
    );
  }
}


Home.propTypes = {
  urlConnect: PropTypes.string,
  portConnect: PropTypes.number
}

Home.defaultProps = {
  urlConnect: 'http://localhost',
  portConnect: 8888
};

export default Home;
