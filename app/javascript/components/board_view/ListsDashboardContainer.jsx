import React from 'react';
import PropTypes from 'prop-types';

import ListsDashboard from './ListsDashboard';

import * as actions from '../../actions/ListActions';

class ListsDashboardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch(actions.fetchLists());
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
        <ListsDashboard lists={this.allLists()} />
      </div>
    )
  }
}

export default ListsDashboardContainer;
