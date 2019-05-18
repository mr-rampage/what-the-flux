function reduceReducers(reducers) {
  return (state, action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
  }
}

function applyMiddleware(sideEffects) {
  return next => (state, action) => {
    const sideEffect = sideEffects[action.type];
    return Promise.resolve(sideEffect ? sideEffect(state, action) : action).then(next);
  }
}

function createStore(initialState, reducer, middleware = applyMiddleware([])) {
  let state = { ...initialState };
  const subscribers = [];

  return {
    async dispatch(action) {
      await middleware(next)(state, action);
    },
    subscribe(subscriber) {
      subscribers.push(subscriber)
    }
  };

  function next(action) {
    state = reducer(state, action);
    publish(state);
  }

  function publish(state) {
    subscribers.forEach(subscriber => subscriber(state));
  }
}
