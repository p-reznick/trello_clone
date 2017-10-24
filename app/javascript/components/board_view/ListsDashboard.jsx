import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import AddListContainer from './AddListContainer';
import dragula from 'react-dragula';

class ListsDashboard extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  componentDidMount() {
    var container = ReactDOM.findDOMNode(document.querySelector(".existing-lists"));
    dragula([container]);
  }

  render() {
    return (
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
              {this.props.lists.map((list_item, idx) => {
                return (
                  <ListItem key={idx} title={list_item.title} list_id={list_item.id} cards={list_item.cards} position={list_item.position} />
                );
              })}
        </div>
        <AddListContainer />
      </div>
    );
  }
}

export default ListsDashboard;
