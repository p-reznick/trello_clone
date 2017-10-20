import React from 'react';
import PropTypes from 'prop-types';
import AddListForm from './AddListForm';

class AddListContainer extends React.Component {
  state = {
    showForm: false
  };
  
  componentDidMount() {
    this.setState({
      showForm: false
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  openForm = (e) => (
    this.setState({
      showForm: true
    })
  )
  render() {
    if (this.state.showForm) {
      return (
        <AddListForm />
      );
    } else {
      return (
        <button onClick={this.openForm}>Add a list</button>
      );
    }

  }
}

export default AddListContainer;
