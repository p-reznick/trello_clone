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

  render() {
    return (
      <div id="cards-container">
        {this.props.cards.map((card, idx) => (
          <CardView key={idx} title={card.title} />
        ))}
      </div>

    );
  }
}

export default CardsListContainer;
