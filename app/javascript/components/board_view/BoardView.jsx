import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ApiClient from '../../lib/ApiClient.js';
import ListsDashboard from './ListsDashboard';
import * as actions from '../../actions/ListActions';

class BoardView extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch(actions.fetchLists(this.props.match.params.id));
    this.context.board_id = this.props.match.params.id;
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  allLists = () => {
    const store = this.context.store;
    return store.getState().lists;
  }

  render() {
    return (
      <div>
        <ListsDashboard lists={this.allLists()}/>
      </div>
    )
  }
}

export default BoardView;
