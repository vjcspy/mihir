import {ModuleManager} from "../../src/mihir";
import {CountStarModule} from "./count-star/module";

export function bootSample() {
  ModuleManager.registers([CountStarModule]);
}
