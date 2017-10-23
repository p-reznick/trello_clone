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
    <input value={props.title} onChange={props.onTextChange} type="text" placeholder="Enter a list name..." />

    <div>
        <input type="submit" className="button" value="Save" onClick={props.onSubmit}/><i onCloseClick={this.handleButtonClick} className="x-icon icon"></i>
    </div>

  </div>
);

AddListForm.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddListForm;
