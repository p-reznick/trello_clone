import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import AddListContainer from './AddListContainer';
import Dragula from 'react-dragula';
import positionCalculator from '../../lib/PositionCalculator.js';
import * as actions from '../../actions/ListActions';

class ListsDashboard extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const store = this.context.store;
    var container = ReactDOM.findDOMNode(document.querySelector(".existing-lists"));
    const dragula = Dragula([container]);
    dragula.on('drop', (el, target, source, sibling) => {
      console.log("Inside of drop handler");
      console.log(el); // this is dragged element
      console.log(target); // target container
      console.log(source); // source container
      console.log(sibling); // the previous element
      // console.log(parseInt(sibling.dataset.position));
      console.log(parseInt(el.dataset.position));
      const origLists = this.props.lists.sort((a, b) => a.position - b.position);
      let originalIdx;
      origLists.forEach((list, idx) => {
        if (list.id === parseInt(el.dataset.id)) {
          originalIdx = idx;
        }
      });

      let siblingIdx;
      if (sibling) {
        origLists.forEach((list, idx) => {
          if (list.id === parseInt(sibling.dataset.id)) {
            siblingIdx = idx;
          }
        });
      } else {
        siblingIdx = origLists.length;
      }

      // let newPosition = positionCalculator(this.props.lists, parseInt(sibling.dataset.position), parseInt(el.dataset.position, 10));
      console.log(originalIdx);
      console.log(siblingIdx);
      let newPosition = positionCalculator(this.props.lists, siblingIdx, originalIdx);
      store.dispatch(actions.updateList(el.dataset.title, el.dataset.id, newPosition));
    });
  }

  render() {
    const sortedList = this.props.lists.sort((a, b) => a.position - b.position);
    return (
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
              {sortedList.map((list_item, idx) => {
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
