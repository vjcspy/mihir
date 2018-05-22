import {ModuleConfig} from "../../../src/core/app";
import {Redux} from "../../../src/modules/redux/index";
import {countStarModuleReducer} from "./R/reducer";
import {CountStarEffects} from "./R/effects";
import {EffectsModule} from "../../../src/modules/redux/libs/redux-observable/effects";

const name = "sample_count_star";

function boot() {
  Redux.replaceModuleReducer(name, countStarModuleReducer);

  EffectsModule.run(CountStarEffects);
}

const services: any = [
  CountStarEffects
];

export const CountStarModule: ModuleConfig = {
  name,
  boot,
  services
};
