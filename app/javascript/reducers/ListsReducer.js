export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_LISTS_SUCCESS') {
    return action.lists;
  } else {
    return state;
  }
}
