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

  test("It should calculate the users current age in Mercury years", () => {
    galacticAge.currentAge(29);
    expect(galacticAge.mercury).toEqual(120.83);
  });

  test("It should calculate the users current age for all planets orbital years", () => {
    galacticAge.currentAge(29);
    expect(galacticAge.mercury).toEqual(120.83);
    expect(galacticAge.venus).toEqual(46.77);
    expect(galacticAge.earth).toEqual(29);
    expect(galacticAge.mars).toEqual(15.42);
    expect(galacticAge.jupiter).toEqual(2.44);
    expect(galacticAge.saturn).toEqual(.98);
    expect(galacticAge.uranus).toEqual(.34);
    expect(galacticAge.neptune).toEqual(.17);
  });

  test("It should calculate how many years left a person has to live on earth based on their life expectancy", () => {
    galacticAge.currentAge(29);
    galacticAge.lifeLeft(78.79);
    expect(galacticAge.earthLeft).toEqual(49.79);
  });
});