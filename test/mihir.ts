import Mihir from "../src/mihir";

describe("Dummy test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("DummyClass is instantiable", () => {
    expect(new Mihir()).toBeInstanceOf(Mihir)
  })
})
