import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import AddListContainer from './AddListContainer';
import Dragula from 'react-dragula';
import positionCalculator from '../../lib/PositionCalculator.js';
import * as actions from '../../actions/ListActions';
import jquery from 'jquery';

class ListsDashboard extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    var container = ReactDOM.findDOMNode(document.querySelector(".existing-lists"));
    const dragula = Dragula([container], {
      moves: this.listMoves,
    });

    dragula.on('drop', this.dragulaHelper);

    var containers = Array.prototype.slice.call(document.querySelectorAll("[data-id^='list-']"));
    console.log("Containers");
    console.log(containers);
    const cardDragula = Dragula({
      isContainer: function(el) {
        return el.id === 'cards-container';
      },
      // moves: this.cardMoves,
    });
    cardDragula.on('drop', this.cardsDragulaHelper);
  }

  listMoves = (el, container, handle) => {
    if (handle.querySelector('.card-background')) {
      return true;
    } else {
      return false;
    }
  };

  cardMoves = (el, container, handle) => {
   console.log("In cardMoves, el, handle, container");
   console.log(el);
   console.log(handle);
   console.log(container);
   console.log(handle.querySelector('.card-background'));
   if (handle.classList.contains('card-background')) {
      return true;
   } else {
     return false;
   }
  };

  cardsDragulaHelper = (el, target, source, sibling) => {
    console.log(target);
    console.log(source);
    if (target === source) {
      console.log("if");
      this.dragulaHelperWithinList(el, target, source, sibling);
    } else {
      console.log("else");
      this.dragulaHelperAcrossLists(el, target, source, sibling);
    }
  }

  dragulaHelperWithinList = (el, target, source, sibling) => {
    const store = this.context.store;
    const origCards = this.getCards();

    let originalIdx;
    origCards.forEach((card, idx) => {
      if (card.id === parseInt(el.dataset.id)) {
        originalIdx = idx;
      }
    });

    let targetIdx;
    if (sibling) {
      origCards.forEach((card, idx) => {
        if (card.id === parseInt(sibling.dataset.id)) {
          targetIdx = idx;
        }
      });
      if (targetIdx > 0 && originalIdx < targetIdx) {
        targetIdx -= 1;
      }
    } else {
      targetIdx = origCards.length - 1;
    }

    let newPosition = positionCalculator(origCards, targetIdx, originalIdx);
    console.log(el.dataset.title, el.dataset.id, el.dataset.position);
    // store.dispatch(actions.updateCard(el.dataset.title, el.dataset.id, newPosition));
  };

  dragulaHelperAcrossLists = (el, target, source, sibling) => {
    console.log("Element:")
    console.log("Target");
    console.log("Source");
    console.log("Sibling");
    console.log(el);
    console.log(target);
    console.log(source);
    console.log(sibling);

    if (target.contains(sibling)) {
      const targetListId = +target.dataset.id.split(/-/)[1];
      const cardsForTarget = this.getCardsForTargetList(targetListId);
      let targetIdx;

      if (sibling) {
        cardsForTarget.forEach((card, idx) => {
          if (card.id === parseInt(sibling.dataset.id)) {
            targetIdx = idx;
          }
        });
        // if (targetIdx >= 0 && originalIdx < targetIdx) {
          // targetIdx -= 1;
        // }
      } else {
        targetIdx = cardsForTarget.length - 1;
      }


      const pos = positionCalculator(cardsForTarget, targetIdx, -1);

      console.log(pos);
      console.log("At the end!");

    }

  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCardsForTargetList = (target_list_id) => {
    const store = this.context.store;
    const storeCards = store.getState().cards;
    return storeCards.filter(card => (
      (card.list_id === target_list_id) && (card.board_id === +this.props.board_id)
    ));
  }

  dragulaHelper = (el, target, source, sibling) => {
    const store = this.context.store;
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
