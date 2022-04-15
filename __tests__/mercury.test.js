import { TestScheduler } from "jest";
import { GalacticAge } from "../src/js/mercury";

describe("Galactic Age", () => {
  test("it should create an object with an empty planet property for earth", () => {
    let galacticAge = new GalacticAge();
    expect(galacticAge.earth).toEqual("");
  });

  test("it should add a users age to the earth property", () => {
    let galacticAge = new GalacticAge();
    galacticAge.currentAge(29);
    expect(galacticAge.earth).toEqual(29);
  });
});