
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
    this.venusDifference = this.venusExpectancy - this.venusAge;
    this.marsAge = Math.floor(earthAge / 1.88);
    this.marsExpectancy = Math.floor(earthExpectancy / 1.88);
    this.marsDifference = this.marsExpectancy - this.marsAge;
    this.jupitarAge = Math.floor(earthAge / 11.86);
    this.jupitarExpectancy = Math.floor(earthExpectancy / 11.86);
  }
}
