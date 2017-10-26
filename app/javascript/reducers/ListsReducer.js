export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_LISTS_SUCCESS') {
    return action.lists;
  } else if (action.type === 'CREATE_LIST_SUCCESS') {
    const newList = action.list;
    newList.id = Number(newList.id);
    newList.cards = [];

    return state.concat(newList);
  } else if (action.type === 'UPDATE_LIST_SUCCESS') {

    return state.map((list) => {
      if (list.id === action.list.id) {
        const newList = {...list};
        newList.title = action.list.title;
        return newList;
      } else {
        return list;
      }
    }).sort((a, b) => a.position - b.position);
  } else {
    return state;
  }
}
