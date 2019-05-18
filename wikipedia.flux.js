const SEARCH_WIKIPEDIA_ACTION = Symbol('Search Wikipedia');

function searchWikiAction(payload) {
  return {
    'type': SEARCH_WIKIPEDIA_ACTION,
    payload
  }
}

function searchWikiSideEffect(state, action) {
  return fetch(`http://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${action.payload}`)
    .then(response => response.json())
    .then(setWikiAction);
}

const UPDATE_SEARCH_RESULTS_ACTION = Symbol('Update Wikipedia results');

function setWikiAction(payload) {
  return {
    'type': UPDATE_SEARCH_RESULTS_ACTION,
    payload
  };
}

function setWikiReducer(state, action) {
  return {
    ...state,
    'wiki': action.payload
  };
}
