import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function fetchListsSuccess(lists) {
  return { type: types.FETCH_LISTS_SUCCESS, lists };
}

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function updateListRequest() {
  return { type: types.UPDATE_LIST_REQUEST };
}

export function updateListSuccess(list) {
  return { type: types.UPDATE_LIST_SUCCESS, list: list };
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

export function createList(list, callback) {
  return function(dispatch) {
    dispatch(createListRequest());
    apiClient.createList(list, newList => {
      dispatch(createListSuccess(newList))

      if (callback) { callback(newList); }
    })
  }
}
