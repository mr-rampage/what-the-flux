const UPDATE_FOO = '[Update] foo';

function UpdateFooAction(payload) {
  return {
    'type': UPDATE_FOO,
    payload
  }
}

function FooReducer(state, action) {
  return {
    ...state,
    'foo': action.payload
  };
}

const UPDATE_BAR = '[Update] bar';

function UpdateBarAction(payload) {
  return {
    'type': UPDATE_BAR,
    payload
  };
}

function BarReducer(state, action) {
  return {
    ...state,
    'bar': action.payload
  };
}
