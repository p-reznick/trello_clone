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
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    var container = ReactDOM.findDOMNode(document.querySelector(".existing-lists"));
    const dragula = Dragula([container]);

    dragula.on('drop', (el, target, source, sibling) => {

      const origLists = this.props.lists;

      let originalIdx;
      origLists.forEach((list, idx) => {
        if (list.id === parseInt(el.dataset.id)) {
          originalIdx = idx;
        }
      });


      let targetIdx;
      if (sibling) {
        origLists.forEach((list, idx) => {
          if (list.id === parseInt(sibling.dataset.id)) {
            targetIdx = idx;
          }
        });
        if (targetIdx > 0 && originalIdx < targetIdx) {
          targetIdx -= 1;
        }
      } else {
        targetIdx = origLists.length - 1;
      }

      let newPosition = positionCalculator(this.props.lists, targetIdx, originalIdx);
      store.dispatch(actions.updateList(el.dataset.title, el.dataset.id, newPosition));
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const sortedList = this.props.lists.sort((a, b) => a.position - b.position);
    return (
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
              {sortedList.map((list_item, idx) => {
                return (
                  <ListItem key={idx} board_id={this.props.board_id} position={list_item.position} title={list_item.title} list_id={list_item.id} position={list_item.position} />
                );
              })}
        </div>
        <AddListContainer />
      </div>
    );
  }
}

export default ListsDashboard;
