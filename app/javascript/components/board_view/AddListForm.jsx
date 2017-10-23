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

  <div id="new-list" className="new-list selected">
    <input value={props.title} onChange={props.onTextChange} type="text" placeholder="Enter a list name..." />
    <input type="submit" className="button" value="Save" onClick={props.onSubmit}/>
  </div>
);

AddListForm.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddListForm;
