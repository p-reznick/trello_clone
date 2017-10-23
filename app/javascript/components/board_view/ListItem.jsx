import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardsListContainer from './CardsListContainer.jsx';

class ListItem extends React.Component {
  render() {
    return (
      <div className="list-wrapper">
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div><p className="list-title">{`${this.props.title}`}</p></div>

            <CardsListContainer cards={this.props.cards} />
          </div>

        </div>
      </div>
    );
  }
}

export default ListItem;
