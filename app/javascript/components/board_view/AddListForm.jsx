import React from 'react';
import PropTypes from 'prop-types';

class AddListForm extends React.Component {
  submitForm = (e) => (
    e.preventDefault()
    const newList = { title: e.target.value };

    this.context.store.dispatch(
      actions.createList(newList, () => {
        this.setState({
          title: ''
        });

        this.props.onSave();
      })
    );

  );


  render () {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type='text' name='listname' placeholder='Enter a list name...' />
          <input type='submit' value='Save' />
        </form>

      </div>
    );
  }
}

export default AddListForm;
