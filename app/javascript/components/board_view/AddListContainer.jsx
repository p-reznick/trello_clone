import React from 'react';
import PropTypes from 'prop-types';
import AddListFormContainer from './AddListFormContainer';

class AddListContainer extends React.Component {
  state = {
    showForm: false
  };

  handleButtonClick = (e) => {
    e.preventDefault();

    this.setState({
      showForm: true
    });
  }

  handleFormCloseClick = (e) => {
    e.preventDefault();

    this.setState({
      showForm: false
    });
  }

  handleSave = () => {
    this.setState({
      showForm: false
    });
  };

  render() {
    if (this.state.showForm) {
      return (
        <AddListFormContainer
          onCloseClick={this.handleFormCloseClick}
          onSave={this.handleSave}
        />
      );
    } else {
      return (

        <div id="new-list" className="new-list" onClick={this.handleButtonClick} ><span>Add a list...</span>


        </div>
      );
    }

  }
}

export default AddListContainer;
