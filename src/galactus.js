
export class GalactusCalculator {
  constructor(userAge, userSex, earthExpectancy){
    this.userAge = userAge;
    this.userSex = userSex;
    this.earthExpectancy = earthExpectancy;
    this.mercuryAge = Math.floor(userAge / .24);
    this.mercuryExpectancy = Math.floor(earthExpectancy / .24);
    this.venusAge = Math.floor(userAge / .62);
    this.venusExpectancy = Math.floor(earthExpectancy / .62);
    this.marsAge = Math.floor(userAge / 1.88);
    this.marsExpectancy = Math.floor(earthExpectancy / 1.88);
    this.jupitarAge = Math.floor(userAge / 11.86);
    this.jupitarExpectancy = Math.floor(earthExpectancy / 11.86);
  }
