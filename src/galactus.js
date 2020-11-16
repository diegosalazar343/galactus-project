//Returns their age in Mercury years. (A Mercury year is .24 Earth years.)

export class GalactusCalculator {
  constructor(earthAge, earthExpectancy, earthDifference){
    this.earthAge = earthAge;
    this.earthExpectancy = earthExpectancy;
    this.earthDifference = earthExpectancy - earthAge;
    this.mercuryAge = Math.floor(earthAge / .24);
    this.mercuryExpectancy = Math.floor(earthExpectancy / .24);
  }
}
