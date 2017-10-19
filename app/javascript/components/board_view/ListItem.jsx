import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class ListItem extends React.Component {
  render() {
    return (
      <div>
        <li>{`${this.props.title}`}</li>
        <ul>
          <Link to='/api/cards/99999'>{`${this.props.cards[0].title}`}</Link>
        </ul>
      </div>
    );
  }
}

export default ListItem;
