import {Injectable} from "../../../../src/core/app";
import {Action} from "../../../../src/modules/redux/index";
import {Store} from "../../../../src/modules/redux/libs/redux-observable/store";

@Injectable()
export class CountStarActions {
  static ACTION_DESTROY = "ACTION_DESTROY";
  static ACTION_REBORN  = "ACTION_REBORN";

  constructor(protected store$: Store<any>) {
  }

  reborn(dispatch: boolean = true): Action {
    const action = {type: CountStarActions.ACTION_REBORN, payload: {}};

    if (dispatch === true) {
      this.store$.dispatch(action);
    }

    return action;
  }

  destroy(dispatch: boolean = true): Action {
    const action = {type: CountStarActions.ACTION_DESTROY, payload: {}};

    if (dispatch === true) {
      this.store$.dispatch(action);
    }

    return action;
  }
}
