import React from 'react';
import PropTypes from 'prop-types';

const AddListForm = (props) => (
//  submitForm = (e) => (
//    e.preventDefault()
//    const newList = { title: e.target.value };
//
//    this.context.store.dispatch(
//      actions.createList(newList, () => {
//        this.setState({
//          title: ''
//        });
//
//        this.props.onSave();
//      })
//    );
//
//  );

  <div>
    <form onSubmit={props.onSubmit}>
      <input
        type='text'
        name='listname'
        placeholder='Enter a list name...'
        value={props.title}
        onChange={props.onTextChange}
      />
      <input type='submit' value='Save' />
    </form>
  </div>
);

AddListForm.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddListForm;
