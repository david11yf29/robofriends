import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { searchRobots, requestRobots } from "./reducers";
import "tachyons";

const logger = createLogger();

const rootReducers = combineReducers({
  searchRobots: searchRobots,
  requestRobots: requestRobots,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunkMiddleware, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
