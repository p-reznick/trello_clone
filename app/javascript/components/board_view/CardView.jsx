import React from 'react';
import { Link } from 'react-router-dom';

class CardView extends React.Component {
  render() {
    return (
      <li>
        -- <Link to="">{this.props.title}</Link>
      </li>
    )
  }
}

export default CardView;
