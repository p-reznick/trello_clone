export default function cardsReducer(state = [], action) {
  if (action.type === 'CREATE_CARD_SUCCESS') {
    console.log("Inside card success branch");
    let newState = state.concat(action.card);
    console.log("OLD STATE");
    console.log(state);
    console.log("NEW STATE:");
    console.log(newState);
    return newState;
  } else {
    return state;
  }
}
