function identity(x) {
  return x;
}

function createStore(initialState, reducer = identity, enhancer = identity) {
  let state = {
    ...initialState
  };

  let observers = [];

  return {
    async dispatch(action) {
      state = await enhancer(next)(action);
    },
    subscribe(observer) {
      observers.push(observer);
      return unsubscribe.bind(null, observer);
    }
  };

  function next(action) {
    return publish(reducer(state, action));
  }

  function publish(state) {
    observers.forEach(observer => observer({ ...state }));
    return state;
  }

  function unsubscribe(observer) {
    observers = observers.filter(sub => sub !== observer);
    return observer;
  }
}

function reduceReducer(reducerMap) {
  return (state, action) => reducerMap[action.type](state, action);
}

function applyMiddleware(...middlewares) {
  return middlewares.reduce((f, g) => (...args) => f(g(...args)));
}
