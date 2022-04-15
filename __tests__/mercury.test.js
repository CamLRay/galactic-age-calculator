import { GalacticAge } from "../src/js/mercury";

describe("Galactic Age", () => {
  let galacticAge;
  beforeEach(() => {
    galacticAge = new GalacticAge();
  });
  afterEach(() => {
    galacticAge = {};
  });
  test("It should create an object with an empty planet property for earth", () => {
    expect(galacticAge.earth).toEqual("");
  });

  test("It should add a users age to the earth property", () => {
    galacticAge.currentAge(29);
    expect(galacticAge.earth).toEqual(29);
  });

  // test("It should calculate the users current age in Mercury years", () => {
  //   galacticAge.currentAge(29);
  //   expect(galacticAge.mercury).toEqual(120.83);
  // });
});