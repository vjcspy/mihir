import {app} from "../general/app";
import "rxjs";
import {Action, Redux} from "../../index";
import {Injectable} from "../../../../core/app";
import {Observable} from "rxjs/index";
import {distinctUntilChanged, map, share} from "rxjs/internal/operators";

@Injectable()
export class Store<T> {
  static storeStream: Observable<any>;

  select = (key: string) => {
    if (!Store.storeStream) {
      Store.storeStream = new Observable(observer => {
        // emit the current state as first value:
        observer.next(Redux.store.getState());

        const unsubscribe = Redux.store.subscribe(() => {
          // emit on every new state changes
          observer.next(Redux.store.getState());
        });

        // let's return the function that will be called
        // when the Observable is unsubscribed
        return unsubscribe;
      }).pipe(
        share()
      );
    }

    return Store.storeStream.pipe(
      map((state) => state[key]),
      distinctUntilChanged()
    );
  };

  dispatch = (action: Action) => Redux.store.dispatch(action);
}
