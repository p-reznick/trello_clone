import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardView extends React.Component {
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

  render() {
    return (
      <div className="card-background" data-title={this.props.title} data-position={this.props.position} data-id={this.props.id}>
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
