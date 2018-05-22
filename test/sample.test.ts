import {bootSample} from "./samples";
import {Redux, app} from "../src/mihir";
import {CountStarActions} from "./samples/count-star/R/actions";

bootSample();

describe("Count Star Sample Test", () => {
  it("check R", () => {
    expect(Redux.store.getState()['count-star']['star']).toEqual(0);

    app().resolve<CountStarActions>(CountStarActions).reborn();

    expect(Redux.store.getState()['count-star']['star']).toEqual(1);
    expect(Redux.store.getState()['tick']['tick']).toEqual(0);
  })
});

