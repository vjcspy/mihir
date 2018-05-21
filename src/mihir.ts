// core
import {Redux} from "./modules/redux";

export {app, Injectable, ModuleManager} from "./core/app";
export {GeneralError} from "./core/error";


// redux
export {Action, ActionReducer, Redux} from "./modules/redux";


setInterval(() => {
  Redux.store.dispatch({type: "TICK"});
}, 5000);
