import { TestScheduler } from "jest";
import { GalacticAge } from "../src/js/mercury";

describe("Galactic Age", () => {
  test("it should create an object with an empty planet property for earth", () => {
    let galacticAge = new GalacticAge();
    expect(galacticAge.earth).toEqual("")
  });

});