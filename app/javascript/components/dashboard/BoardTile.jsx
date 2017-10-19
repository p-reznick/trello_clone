import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListsDashboardContainer from '../board_view/ListsDashboardContainer';
import ListsDashboard from '../board_view/ListsDashboard';
import { Link } from 'react-router-dom';

const BoardTile = (props) => (
  <li className="board-tile">
    <Link to={`/boards/${props.id}`}>
      <span className="board-title">{props.title}</span>
    </Link>
  </li>
);

BoardTile.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired
};

export default BoardTile;
