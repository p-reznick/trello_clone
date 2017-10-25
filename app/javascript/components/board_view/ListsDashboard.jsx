import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import AddListContainer from './AddListContainer';
import Dragula from 'react-dragula';
import positionCalculator from '../../lib/PositionCalculator.js';

class ListsDashboard extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  componentDidMount() {
    var container = ReactDOM.findDOMNode(document.querySelector(".existing-lists"));
    const dragula = Dragula([container]);
    dragula.on('drop', (el, target, source, sibling) => {
      console.log("Inside of drop handler");
      console.log(el); // this is dragged element
      console.log(target); // target container
      console.log(source); // source container
      console.log(sibling); // the previous element
      let newPosition = positionCalculator(this.props.lists, parseInt(sibling.dataset.position), parseInt(el.dataset.position, 10));
      console.log(newPosition);
    });
  }

  render() {
    return (
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
              {this.props.lists.map((list_item, idx) => {
                return (
                  <ListItem key={idx} position={list_item.position} title={list_item.title} list_id={list_item.id} cards={list_item.cards} position={list_item.position} />
                );
              })}
        </div>
        <AddListContainer />
      </div>
    );
  }
}

export default ListsDashboard;
