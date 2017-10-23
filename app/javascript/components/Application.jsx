import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import TopNav from './shared/TopNav';
import BoardsDashboardContainer from './dashboard/BoardsDashboardContainer';
import BoardView from './board_view/BoardView';

import { fetchBoards } from '../actions/BoardActions';

class Application extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  }

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const state = this.context.store.getState();

    return (
      <div>
        <TopNav />
        <main>
          <Switch>
            <Route path='/' exact component={BoardsDashboardContainer} />
            <Route path='/boards/:id' component={BoardView} />
            <Route render = {() => (
              <h1>Invalid Route!</h1>
            )} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default Application;
