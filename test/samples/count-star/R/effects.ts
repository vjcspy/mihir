import {app, Injectable} from "../../../../src/core/app";
import {Actions} from "../../../../src/modules/redux/libs/redux-observable/actions";
import {Effect} from "../../../../src/modules/redux/libs/redux-observable/effects";
import {CountStarActions} from "./actions";
import {map, withLatestFrom} from "rxjs/internal/operators";
import {Store} from "../../../../src/modules/redux/libs/redux-observable/store";
import {CountStarState} from "./state";

@Injectable()
export class CountStarEffects {
  @Effect() afterCount: any = this.action$
                                  .ofType(
                                    CountStarActions.ACTION_REBORN,
                                    CountStarActions.ACTION_DESTROY,
                                  ).pipe(
      withLatestFrom(this.store$.select("count-star")),
      map((z: any) => {
        const countStarState: CountStarState = z[1];

        return countStarState.star % 2 === 0 ? {
          type: "TICK"
        } : {
          type: "TOCK"
        };
      })
    );

  constructor(protected action$: Actions, protected store$: Store<any>) {
  }
}
