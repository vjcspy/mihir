import {ModuleManager} from "../core/app";
import {__FRAMEWORK_REDUX__} from "./redux/module";

export function bootFramework() {
  ModuleManager.registers([__FRAMEWORK_REDUX__]);
}
