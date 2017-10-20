import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import AddListContainer from './AddListContainer';

const ListsDashboard = props => (
    <div>
      <ul>
        {props.lists.map((list_item, idx) => (
          <ListItem key={idx} title={list_item.title} cards={[]} />
        ))}
      </ul>
      <AddListContainer />
    </div>
);

ListsDashboard.contextTypes = {
  store: PropTypes.object
};

export default ListsDashboard;
