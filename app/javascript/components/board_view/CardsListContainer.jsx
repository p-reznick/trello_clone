import React from 'react';
import CardView from './CardView.jsx'

class CardsListContainer extends React.Component {
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
