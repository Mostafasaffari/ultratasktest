import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import reducers from "./reducers";

const middlewares: any[] = [];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const rootReducers = combineReducers({
  ...reducers,
});
const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export { store };
export type AppState = ReturnType<typeof rootReducers>;
