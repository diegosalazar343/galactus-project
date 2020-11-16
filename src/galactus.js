
export class GalactusCalculator {
  constructor(earthAge, earthExpectancy, earthDifference){
    this.earthAge = earthAge;
    this.earthExpectancy = earthExpectancy;
    this.earthDifference = earthExpectancy - earthAge;
    this.mercuryAge = Math.floor(earthAge / .24);
    this.mercuryExpectancy = Math.floor(earthExpectancy / .24);
    this.mercuryDifference = this.mercuryExpectancy - this.mercuryAge;
    this.venusAge = Math.floor(earthAge / .62);
    this.venusExpectancy = Math.floor(earthExpectancy / .62);
    this.marsAge = Math.floor(earthAge / 1.88);
  }
}
