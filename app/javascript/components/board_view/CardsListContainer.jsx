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
    var attribute_selector = "[data-id='list-" + this.props.list_id + "-cards']";
    var container = ReactDOM.findDOMNode(document.querySelector(attribute_selector));
    const dragula = Dragula([container]);
    dragula.on('drop', this.dragulaHelper);
  }

  dragulaHelper = (el, target, source, sibling) => {
    console.log("Inside of CardListContainer dragula handler")
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

  componentWillUnmount() {
    this.unsubscribe();
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
