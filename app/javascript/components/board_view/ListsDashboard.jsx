import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import AddListContainer from './AddListContainer';

class ListsDashboard extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const store = this.context.store;
  }

  render() {

    return (
      <div>
        <ul>
          {this.props.lists.map((list_item, idx) => {
            return (
              <ListItem key={idx} title={list_item.title} cards={list_item.cards} />
            );
          })}
        </ul>
        <AddListContainer />
      </div>
    );
  }
}

export default ListsDashboard;
