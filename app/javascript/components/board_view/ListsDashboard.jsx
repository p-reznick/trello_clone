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

  getListCards(list) {
    return this.context.store.getState().cards.filter((card) => (
      card.board_id === list.board_id && card.list_id === list.id
    ));
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.lists.map((list_item, idx) => {
            return (
              <ListItem key={idx} title={list_item.title} cards={this.getListCards(list_item)} />
            );
          })}
        </ul>
        <AddListContainer />
      </div>
    );
  }
}

export default ListsDashboard;
