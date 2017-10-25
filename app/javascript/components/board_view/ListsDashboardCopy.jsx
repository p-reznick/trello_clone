import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import AddListContainer from './AddListContainer';
import Dragula from 'react-dragula';

class ListsDashboard extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  componentDidMount() {
    var container = ReactDOM.findDOMNode(document.querySelector(".existing-lists"));
    const dragula = Dragula([container]);
    dragula.on('drop', (el, target, source, sibling) => {
      console.log("Inside of drop handler");
  //    const newListPosition = parseInt(get(target, 'position'));
  //    const previousListPosition = parseInt(get(source, 'position'));
  //    const rightPosition = get(sibling, 'position');
  //    const itemPosition = get(el, 'position');
  //    console.log(newListPosition);
  //    console.log(previousListPosition);
    });
  }

  render() {
    return (
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
              {this.props.lists.map((list_item, idx) => {
                return (
                  <ListItem key={idx} title={list_item.title} listId={list_item.id} cards={list_item.cards} position={list_item.position} />
                );
              })}
        </div>
        <AddListContainer />
      </div>
    );
  }
}

export default ListsDashboard;
