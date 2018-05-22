import {makeTypedFactory, TypedRecord} from "typed-immutable-record";

export interface CountStarState {
  star: number;
}

interface CountStarStateRecord extends CountStarState, TypedRecord<any> {
}

export const countStarRecordFactory: any = makeTypedFactory<CountStarState, CountStarStateRecord>(
  {
    star: 0
  }
);

