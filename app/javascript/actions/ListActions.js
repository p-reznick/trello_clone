import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function fetchListsSuccess(lists) {
  return { type: types.FETCH_LISTS_SUCCESS, lists };
}

export function fetchLists(id) {
  return function(dispatch) {
    // dispatch({
    //   type: types.FETCH_LISTS_SUCCESS,
    //   id: id
    // });
    apiClient.getListsForBoard(board => dispatch(fetchListsSuccess(board.lists)), id);
  };

}
