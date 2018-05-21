import {app} from "../../../../core/app";

export const logger = (store: any) => (next: any) => (action: any) => {
  if (app().isDevelopMode()) {
    console.log('dispatching', action)
  }
  let _result = next(action);
  if (app().isDevelopMode()) {
    console.log('next state', store.getState())
  }

  return _result;
};
