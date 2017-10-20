import React from 'react';
import PropTypes from 'prop-types';

import AddListForm from './AddListForm';

import * as actions from '../../actions/ListActions';

class AddListFormContainer extends React.Component {
  state = {
    title: ''
  };

  static contextTypes = {
    store: PropTypes.object
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

    const newList = { title: this.state.title };

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

export default AddListFormContainer;
