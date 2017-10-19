import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

class BoardView extends React.Component {
  render() {
    return (
      <div>
        <h3>{`${this.props.match.params.id}`}</h3>
      </div>
    )
  }
}

export default BoardView;
