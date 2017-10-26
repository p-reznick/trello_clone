import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardsListContainer from './CardsListContainer.jsx';
import * as actions from '../../actions/CardActions';

class ToggleableAddCard extends React.Component {
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

  state = {
    newTitle: '',
    buttonVisible: true,
  };

  handleClick = (e) => {
    this.setState({
      buttonVisible: false,
    });
  };

  handleTitleSubmit = (e) => {
    const store = this.context.store;
    if (e.type === 'blur' || e.key === 'Enter') {
      e.preventDefault();

      store.dispatch(actions.createCard(this.state.newTitle, this.props.list_id));
      this.setState({
        buttonVisible: true,
        newTitle: '',
      });
    }
  };

  handleTextInput = (e) => {
    const newTitle = e.target.value;
    this.setState({
      newTitle
    });
  }

  render() {
    if (this.state.buttonVisible) {
      return (
        <div onClick={this.handleClick} className="add-card-toggle" data-position="bottom">Add a card...</div>
      );
    } else {
      return (
        <input onBlur={this.handleTitleSubmit} onKeyUp={this.handleTitleSubmit} onChange={this.handleTextInput} type="text" placeholder="Card Title" />
      );
    }
  }
}

export default ToggleableAddCard;
