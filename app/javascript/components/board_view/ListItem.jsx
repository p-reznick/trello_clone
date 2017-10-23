import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardsListContainer from './CardsListContainer.jsx';

class ListItem extends React.Component {
  render() {
    return (
      <div>
        <li className="activity-list">{`${this.props.title}`}</li>
        <CardsListContainer cards={this.props.cards} />
      </div>
    );
  }
}

export default ListItem;
