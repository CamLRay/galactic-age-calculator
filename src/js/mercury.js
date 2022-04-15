export class GalacticAge {
  constructor(){
    this.earth ="";
  }

  currentAge(age){
    this.earth = age;
    this.mercury = parseFloat((age/.24).toFixed(2));
  }
}