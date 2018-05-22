import {Observable, Subject} from "rxjs/index";
import {Action} from "../../index";
import {GeneralError} from "../../../../core/error";
import {distinctUntilChanged, filter} from "rxjs/internal/operators";
import _ from "lodash";
import {app, Injectable} from "../../../../core/app";

/*
* Actions Observable for effect class
 */
@Injectable()
class ActionsObservable {
  ofType(...keys: string[]): Observable<Action> {
    return Actions.action$
                  .pipe(
                    filter((a: Action) => _.indexOf(keys, a.type) > -1),
                    distinctUntilChanged()
                  );
  }
}

export class Actions extends Observable<Action> {
  static get action$(): any {
    return this._action$;
  }

  static set action$(action$: any) {
    if (Actions._hasTransferActions === false) {
      action$.subscribe(this._action$);
    }
  }

  private static _action$            = new Subject();
  private static _hasTransferActions = false;

  ofType(...keys: string[]): any {
    throw new Error("must_not_go_here");
  };
}

app().bindTo(Actions, ActionsObservable);
