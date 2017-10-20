import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import AddListForm from './AddListForm';

import * as actions from '../../actions/ListActions';

class AddListFormContainer extends React.Component {
  state = {
    title: ''
  };

  static contextTypes = {
    store: PropTypes.object,
    board_id: PropTypes.number
  };

  static propTypes = {
    onCloseClick: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
  };

  handleTextChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this);
    const newList = {
      board_id: this.props.match.params.id,
      list: {
        title: this.state.title
      }
    };

    this.context.store.dispatch(
      actions.createList(newList, () => {
        this.setState({
          title: ''
        });

        this.props.onSave();
      })
    );
  };

  render() {
    return (
      <AddListForm
        onCloseClick={this.props.onCloseClick}
        onTextChange={this.handleTextChange}
        onSubmit={this.handleSubmit}
        title={this.state.title}
      />
    );
  };
}

export default withRouter(AddListFormContainer);
