import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import uuid from 'uuid';
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      model: this.props.model,
      price: this.props.price,
      color: this.props.color
    }
  }
  componentWillReceiveProps(nextrops){
    if (nextrops.id !== undefined && nextrops.id !== null) {
      this.setState({ id : nextrops.id})
    }
    if (nextrops.model !== undefined && nextrops.model !== null) {
      this.setState({ model : nextrops.model})
    }
    if (nextrops.price !== undefined && nextrops.price !== null) {
      this.setState({ price : nextrops.price})
    }
    if (nextrops.color !== undefined && nextrops.color !== null) {
      this.setState({ color : nextrops.color})
    }
  }
  Comparar() {
    if(this.props.Comparar !== undefined && this.props.Comparar !== null) {
      this.props.Comparar(this.state)
    }
  }
  render() {
    let { model, price, color } = this.state;
    return <Card body>
      <CardTitle>{model}</CardTitle>
      <CardText>Price: {price}</CardText>
      <CardText>Color: {color}</CardText>
      <Button onClick={() => this.Comparar()}>Comparar</Button>
    </Card>

  }
}

Item.proptypes = {
  id: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.number,
  color: PropTypes.string,
  Comparar: PropTypes.func
}

Item.defaultProps = {
  id: uuid.v4(),
  model: 'Ferrari ',
  price: 2500,
  color: 'red'
}

export default Item;