import {countStarRecordFactory} from "./state";
import {Action} from "../../../../src/modules/redux/index";
import {CountStarActions} from "./actions";

function countStarReducer(state = countStarRecordFactory(), action: Action) {
  switch (action.type) {
    case CountStarActions.ACTION_REBORN:
      return state.set('star', state.star + 1);
    case CountStarActions.ACTION_DESTROY:
      return state.set('star', state.star - 1);
    default:
      return state;
  }
}

export const countStarModuleReducer: any = {
  "count-star": countStarReducer
};
