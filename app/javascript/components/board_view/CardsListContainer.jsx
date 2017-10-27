import React from 'react';
import PropTypes from 'prop-types';
import CardView from './CardView.jsx'

class CardsListContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  componentWillReceiveProps = (nextProps) => {
    console.log("cardsListContainer receiving props");
    console.log(nextProps);
  }

  getCards = () => {
    const store = this.context.store;
    const storeCards = store.getState().cards;
    console.log("IN CardsListContainer:");
    console.log(storeCards);
    return storeCards.filter(card => (
      (card.list_id === +this.props.list_id) && (card.board_id === +this.props.board_id)
    ));
  }

  render() {
    const cards = this.getCards();
    return (
      <div id="cards-container">
        {cards.map((card, idx) => (
          <CardView key={idx} title={card.title} />
        ))}
      </div>

    );
  }
}

export default CardsListContainer;
