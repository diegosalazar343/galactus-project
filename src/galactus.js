
export class GalactusCalculator {
  constructor(earthAge, earthExpectancy, earthUnder, earthOver){
    this.earthAge = earthAge;
    this.earthExpectancy = earthExpectancy;
    this.earthUnder = earthExpectancy - earthAge;
    this.earthOver = earthAge - earthExpectancy;
    this.mercuryAge = Math.floor(earthAge / .24);
    this.mercuryExpectancy = Math.floor(earthExpectancy / .24);
    this.mercuryUnder = this.mercuryExpectancy - this.mercuryAge;
    this.mercuryOver = this.mercuryAge - this.mercuryExpectancy;
    this.venusAge = Math.floor(earthAge / .62);
    this.venusExpectancy = Math.floor(earthExpectancy / .62);
    this.venusUnder = this.venusExpectancy - this.venusAge;
    this.venusOver = this.venusAge - this.venusExpectancy;
    this.marsAge = Math.floor(earthAge / 1.88);
    this.marsExpectancy = Math.floor(earthExpectancy / 1.88);
    this.marsUnder = this.marsExpectancy - this.marsAge;
    this.marsOver = this.marsAge - this.marsExpectancy;
    this.jupitarAge = Math.floor(earthAge / 11.86);
    this.jupitarExpectancy = Math.floor(earthExpectancy / 11.86);
    this.jupitarUnder = this.jupitarExpectancy - this.jupitarAge;
    this.jupitarOver = this.jupitarAge - this.jupitarExpectancy;
  }
}
