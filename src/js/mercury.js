export class GalacticAge {
  constructor(){
    this.earth ="";
  }

  currentAge(age){
    this.earth = age;
    this.mercury = parseFloat((age/.24).toFixed(4).slice(0,-2));
    this.venus = parseFloat((age/.62).toFixed(4).slice(0,-2));
    this.mars = parseFloat((age/1.88).toFixed(4).slice(0,-2));
    this.jupiter = parseFloat((age/11.86).toFixed(4).slice(0,-2));
    this.saturn = parseFloat((age/29.457).toFixed(4).slice(0,-2));
    this.uranus = parseFloat((age/84.011).toFixed(4).slice(0,-2));
    this.neptune = parseFloat((age/164.78).toFixed(4).slice(0,-2));
  }

  lifeLeft(expectancy) {
    this.earthLeft = parseFloat((expectancy - this.earth).toFixed(4).slice(0,-2));
    this.mercuryLeft = parseFloat((this.earthLeft/.24).toFixed(4).slice(0,-2));
    this.venusLeft = parseFloat((this.earthLeft/.62).toFixed(4).slice(0,-2));
    this.marsLeft = parseFloat((this.earthLeft/1.88).toFixed(4).slice(0,-2));
    this.jupiterLeft = parseFloat((this.earthLeft/11.86).toFixed(4).slice(0,-2));
    this.saturnLeft = parseFloat((this.earthLeft/29.457).toFixed(4).slice(0,-2));
    this.uranusLeft = parseFloat((this.earthLeft/84.011).toFixed(4).slice(0,-2));
    this.neptuneLeft = parseFloat((this.earthLeft/164.78).toFixed(4).slice(0,-2));
  }
}