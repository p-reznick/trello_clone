import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CardView from './CardView.jsx'
import positionCalculator from '../../lib/PositionCalculator.js';
import Dragula from 'react-dragula';

class CardsListContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    // var attribute_selector = "[data-id='list-" + this.props.list_id + "-cards']";

    // var container = ReactDOM.findDOMNode(document.querySelector(attribute_selector));
    // // const dragula = Dragula([container]);
    // // dragula.on('drop', this.dragulaHelper);

    // var containers = Array.prototype.slice.call(document.querySelectorAll("[data-id^='list-']"));
    // console.log("Dragula connected");
    // const dragula = Dragula(containers);
    // dragula.on('drop', this.dragulaHelperMain);

  }

  dragulaHelperMain = (el, target, source, sibling) => {
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

  getCards = () => {
    const store = this.context.store;
    const storeCards = store.getState().cards;
    return storeCards.filter(card => (
      (card.list_id === +this.props.list_id) && (card.board_id === +this.props.board_id)
    ));
  }

  render() {
    const cards = this.getCards();
    const dataIdValue = "list-" + `${this.props.list_id}` + "-cards";
    return (
      <div id="cards-container" data-id={dataIdValue}>
        {cards.map((card, idx) => (
          <CardView key={idx} position={card.position} title={card.title} id={card.id} />
        ))}
      </div>

    );
  }
}

export default CardsListContainer;
