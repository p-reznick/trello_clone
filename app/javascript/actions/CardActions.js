import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card: card };
}

export function createCard(title, list_id, callback) {
  return function(dispatch) {
    dispatch(createCardRequest());
    apiClient.createCard({
      list_id,
      card: {
        title
      }
    }, newCard => {
      dispatch(createCardSuccess(newCard))

      if (callback) { callback(newCard); }
    });
  }
}
