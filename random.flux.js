const FOO_ACTION = Symbol('SET_FOO');

function setFooAction(payload) {
  return {
    'type': FOO_ACTION,
    payload
  };
}

function setFooReducer(state, action) {
  return {
    ...state,
    'foo': action.payload
  };
}

const BAR_ACTION = Symbol('SET_BAR');

function setBarAction(payload) {
  return {
    'type': BAR_ACTION,
    payload
  };
}

function setBarReducer(state, action) {
  return {
    ...state,
    'bar': action.payload
  }
}
