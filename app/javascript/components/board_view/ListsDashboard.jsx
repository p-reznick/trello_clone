import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const ListsDashboard = props => (
    <div>
      <ul>
        {props.lists.map(list_item => {
          <li><ListItem title={list_item.title}/></li>
        })}
      </ul>
    </div>
);

ListsDashboard.contextTypes = {
  store: PropTypes.object
};

export default ListsDashboard;
