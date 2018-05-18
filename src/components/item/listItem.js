import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Item from './Item';
import uuid from 'uuid';
class listItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    }
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.list !== undefined && nextprops.list !== null) {
      this.setState({ list: nextprops.list })
    }
  }
  Comparar(DataItem) {
    console.log("DataItem", DataItem);
    if(this.props.Comparar !== undefined && this.props.Comparar !== null) {
      this.props.Comparar(DataItem)
    }
  }
  renderListItems() {
    let { list } = this.state;
    let _items = _.map(list, (l) => {
      console.log("l", l);
      return <div className="col-12 col-md-3" key={uuid.v4()}>
        <Item {...l} Comparar={(DataItem) => this.Comparar(DataItem)}/>
      </div>
    })
    return _items;
  }
  render() {
    return <div>
      <div className="row">
        {this.renderListItems()}
      </div>
    </div>
  }
}

listItem.proptypes = {
  list: PropTypes.array,
  Comparar: PropTypes.func
}

listItem.defaultProps = {
  list: []
}

export default listItem;