import {bootFramework} from "./modules";

console.log("Mihir v0.0.1")
bootFramework();

// core
export {app, Injectable, ModuleManager} from "./core/app";
export {GeneralError} from "./core/error";


// redux
export {Action, ActionReducer, Redux} from "./modules/redux";
export {Store} from "./modules/redux/libs/redux-observable/store";



