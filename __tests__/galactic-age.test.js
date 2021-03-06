import { GalacticAge, User } from "../src/js/galactic-age";

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

  test("It should calculate how many years left a person has on each planet based on their life expectancy", () => {
    galacticAge.currentAge(29);
    galacticAge.lifeLeft(78.79);
    expect(galacticAge.mercuryLeft).toEqual(207.45);
    expect(galacticAge.venusLeft).toEqual(80.30);
    expect(galacticAge.earthLeft).toEqual(49.79);
    expect(galacticAge.marsLeft).toEqual(26.48);
    expect(galacticAge.jupiterLeft).toEqual(4.19);
    expect(galacticAge.saturnLeft).toEqual(1.69);
    expect(galacticAge.uranusLeft).toEqual(.59);
    expect(galacticAge.neptuneLeft).toEqual(.30);
  });

  test("If life expectancy is surpassed return positive number passed expectancy for earth", () => {
    galacticAge.currentAge(80);
    galacticAge.lifeLeft(78.79);
    expect(galacticAge.earthLeft).toEqual(1.21);
  });
  test("If life expectancy is surpassed return positive number passed expectancy for earth", () => {
    galacticAge.currentAge(80);
    galacticAge.lifeLeft(78.79);
    expect(galacticAge.mercuryLeft).toEqual(5.04);
    expect(galacticAge.venusLeft).toEqual(1.95);
    expect(galacticAge.earthLeft).toEqual(1.21);
    expect(galacticAge.marsLeft).toEqual(0.64);
    expect(galacticAge.jupiterLeft).toEqual(0.1);
    expect(galacticAge.saturnLeft).toEqual(0.04);
    expect(galacticAge.uranusLeft).toEqual(0.01);
    expect(galacticAge.neptuneLeft).toEqual(0.00);
  });

  test("It should add a boolean to the object if the life expectancy is exceeded", () => {
    galacticAge.currentAge(80);
    galacticAge.lifeLeft(78.79);
    expect(galacticAge.expectancyBeat).toEqual(true);
  });

  test("It should add a boolean to the object if the life expectancy is exceeded", () => {
    galacticAge.currentAge(29);
    galacticAge.lifeLeft(78.79);
    expect(galacticAge.expectancyBeat).toEqual(false);
  });
});

describe("User", ()=> {
  test("It should create an object with a empty user properties", () => {
    let user = new User("","","","")
    expect(user.name).toEqual("");
    expect(user.birthdate).toEqual("");
    expect(user.lifeExpectancy).toEqual(NaN);
    expect(user.todaysDate).toEqual("")
  });

  test("It should calculate the users age based on birthdate and todays date", () => {
    let user = new User("Cameron","1992-11-07","2022-3-15","78.79")
    user.findAge();
    expect(user.age).toEqual(29);
  });

  test("It should calculate the users age based on birthdate and todays date and return the age", () => {
    let user = new User("Cameron","1992-11-07","2022-3-15","78.79")
    expect(user.findAge()).toEqual(29);
  });
});