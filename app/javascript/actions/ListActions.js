import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function fetchListsRequest() {
  return { type: types.FETCH_LISTS_REQUEST };
}

export function fetchListsSuccess(lists) {
  return { type: types.FETCH_LISTS_SUCCESS, lists };
}

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function updateListRequest(title) {
  return { type: types.UPDATE_LIST_REQUEST, title: title };
}

export function updateListSuccess(list) {
  return { type: types.UPDATE_LIST_SUCCESS, list: list };
}

//export function fetchLists(id) {
//  return function(dispatch) {
//    // dispatch({
//    //   type: types.FETCH_LISTS_SUCCESS,
//    //   id: id
//    // });
//    apiClient.getListsForBoard(board => dispatch(fetchListsSuccess(board.lists)), id);
//  };
//
//}

export function fetchLists(id, callback) {
  return function(dispatch) {
    dispatch(fetchListsRequest());
    apiClient.getListsForBoard(board => {
      dispatch(fetchListsSuccess(board.lists))

      if (callback) { callback(board.lists); }
    }, id);
  }
}

export function createList(list, callback) {
  return function(dispatch) {
    dispatch(createListsRequest());
    apiClient.createList(list, newList => {
      dispatch(createListSuccess(newList))

      if (callback) { callback(newList); }
    })
  }
}


export function updateList(title, list_id, position, callback) {
  return function(dispatch) {
    dispatch(updateListRequest());
    apiClient.updateList({title, position}, list_id, newList => {
      dispatch(updateListSuccess(newList))

      if (callback) { callback(newList); }
    });
  };
}
