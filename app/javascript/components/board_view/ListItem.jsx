import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardsListContainer from './CardsListContainer.jsx';
import * as actions from '../../actions/ListActions';

class ListItem extends React.Component {
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
    showTitle: true,
    newTitle: '',
  };

  handleTitleClick = (e) => {
    this.setState({
      showTitle: false
    });
  };

  handleTitleSubmit = (e) => {
    const store = this.context.store;
    if (e.type === 'blur' || e.key === 'Enter') {
      e.preventDefault();
      console.log("in ListItem");
      console.log(this.state.newTitle);
      console.log(this.props.list_id);
      console.log(this.props.position);
      store.dispatch(actions.updateList(this.state.newTitle, this.props.list_id, this.props.position));
      this.setState({
        showTitle: true,
        newTitle: '',
      });
    }
  };

  handleTextInput = (e) => {
    this.setState({
     newTitle: e.target.value
    });
    console.log(this.state);
  }

  getListTitleOutput = () => {
    if (this.state.showTitle) {
      return (
        <p onClick={this.handleTitleClick} className="list-title">
          {`${this.props.title}`}
        </p>
      )
    } else {
      return (
        <input onBlur={this.handleTitleSubmit} onKeyUp={this.handleTitleSubmit} onChange={this.handleTextInput} type="text" placeholder={`${this.props.title}`} />
      )
    }
  }

  render() {
    return (
      <div className="list-wrapper">
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>{this.getListTitleOutput()}</div>

            <CardsListContainer cards={this.props.cards} />
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
