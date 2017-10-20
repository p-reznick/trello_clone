export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_LISTS_SUCCESS') {
    return action.lists;
  } else if (action.type === 'CREATE_LIST_SUCCESS') {
    const newList = action.list;
    newList.id = Number(newList.id);

    return state.concat(newList);
  } else {
    return state;
  }
}
