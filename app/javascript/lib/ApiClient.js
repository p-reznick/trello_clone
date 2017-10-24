import axios from 'axios';
import * as routes from '../constants/ApiRoutes';

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

const apiClient = {
  getBoards: function(callback) {
    return axios.get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getListsForBoard: function(callback, id) {
    return axios.get(routes.BOARD_VIEW_URL + id)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function(board, callback) {
    return axios.post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createList: function(new_list, callback) {
    return axios.post(routes.CREATE_LIST_URL, new_list)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateList: function(payload, list_id, callback) {
    console.log("payload next line");
    console.log(payload);
    return axios.put(routes.UPDATE_LIST_URL + list_id, payload)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  }
};

export default apiClient;
