const SEARCH_WIKIPEDIA_ACTION = '[Search] Wikipedia';

function SearchWikiAction(payload) {
  return {
    'type': SEARCH_WIKIPEDIA_ACTION,
    payload
  }
}

function SearchWikiEffect(action) {
  return fetch(`//en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${ action.payload }`)
    .then(response => response.json())
    .then(UpdateSearchResultsAction);
}

const UPDATE_SEARCH_RESULTS_ACTION = '[Update] Search Results';

function UpdateSearchResultsAction(payload) {
  return {
    'type': UPDATE_SEARCH_RESULTS_ACTION,
    payload
  };
}

function SearchResultsReducer(state, action) {
  return {
    ...state,
    'wiki': action.payload
  };
}
