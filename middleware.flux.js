function ActionLogger(logger) {
  return next => action => {
    logger(action);
    return next(action);
  }
}

function Thunk(effectMap) {
  return next => action => {
    const sideEffect = effectMap[action.type];
    return Promise
      .resolve(sideEffect ? sideEffect(action) : action)
      .then(next);
  };
}
