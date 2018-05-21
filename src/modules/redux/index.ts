import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import {app} from "../../core/app";
import {combineEpics, createEpicMiddleware} from "redux-observable";
import * as _ from "lodash";
import {logger} from "./libs/_middleware/logger";

const composeEnhancers = (
  app().isDevelopMode() &&
  typeof (window) !== "undefined" &&
  (window as any)["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
) || compose;


export interface Action {
  type: string,
  payload: Object
}

export type ActionReducer<T> = (state: T, action: Action) => T;

/*
* ---------------- Reducer ----------------
*/

const tickReducer = (state = {tick: 1}, action: Action) => {
  switch (action.type) {
    case "TICK":
      state = Object.assign({}, {tick: state.tick + 1});
      break;
    case "TOCK":
      state = Object.assign({}, {tick: state.tick - 1});
      break;
  }
  return state;
}

const __APP_REDUCER__ = {
  tick: tickReducer
};

// for asynchronous reducer or module
function createReducer(asyncReducers = {}): any {
  return combineReducers(Object.assign(__APP_REDUCER__, asyncReducers));
}

const mergeSliceReducers = (initialState: any, ...sliceReducer: any[]) => {
  return (state = initialState, action: any) => {
    _.forEach(sliceReducer, (reducer: any) => {
      state = reducer(state, action);
    });

    return state;
  };
};

/*
* ---------------- Effects ----------------
 */
let __APP_EFFECTS__: any = [];

export function createAppEffects(asyncEffects = []) {
  __APP_EFFECTS__ = _.uniq(_.concat(__APP_EFFECTS__, ...asyncEffects));
  return combineEpics(...__APP_EFFECTS__);
}

const effectMiddleware: any = createEpicMiddleware(createAppEffects());

function replaceModuleEffects(asyncEffects: any) {
  effectMiddleware.replaceEpic(createAppEffects(asyncEffects));
}

/*
* ---------------- Middleware and redux-observable ----------------
*/

const enhancer = composeEnhancers(
  applyMiddleware(logger),
  applyMiddleware(effectMiddleware)
);

/*
* ---------------- Store ----------------
 */
const store: any = createStore(
  createReducer(),
  enhancer
);

const __REDUCER_REPLACED__: any = {};

function replaceModuleReducer(key: string, reducer: Object) {
  if (__REDUCER_REPLACED__[key] !== true) {
    store.replaceReducer(createReducer(reducer));
    __REDUCER_REPLACED__[key] = true;
  }
}

export class Redux {
  static store: Store         = store;
  static mergeSliceReducers   = mergeSliceReducers;
  static replaceModuleEffects = replaceModuleEffects;
  static replaceModuleReducer = replaceModuleReducer;
}
