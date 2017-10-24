import React from 'react';
import { Link } from 'react-router-dom';

class CardView extends React.Component {
  render() {
    return (
      <div className="card-background">
        <div className="card">
          <div className="card-info">
            <p>{this.props.title}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CardView;
