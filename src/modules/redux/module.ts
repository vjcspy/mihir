import {ModuleConfig} from "../../core/app";
import {Store} from "./libs/redux-observable/store";
import {Actions} from "./libs/redux-observable/actions";

const name = "__FRAMEWORK_REDUX__";

function boot() {
  return undefined;
}

const services: any = [
  Store
];

export const __FRAMEWORK_REDUX__: ModuleConfig = {
  name,
  boot,
  services
};
