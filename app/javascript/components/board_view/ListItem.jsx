import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
  render() {
    return (
      <p>{`${this.props.title}`}</p>
    );
  }
}

export default ListItem;
