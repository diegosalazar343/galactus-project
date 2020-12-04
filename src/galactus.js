
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

  yearsLeft() {
    if (this.userSex === "male") {
      this.mercuryAge -=30;
      this.venusAge -=25;
      this.marsAge -=20;
      return this.jupitarAge -= 15;
  } else if (this.userSex == "female") {
    this.mercuryAge -=20;
    this.venusAge -= 15;
    this.marsAge -= 10;
    return this.jupitarAge -= 5;
  } else {
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    return this.jupitarAge;
  }


  yearsOnMerc() ;
    return `You are ${(Math.floor(userAge / .24))} years old on mercury and have ${this.mercuryAge -= 20} years left to live on mercury`;


  yearsOnVen() ;
    return `You are ${(Math.floor(userAge / .62))} years old on venus and have ${this.venusAge -= 15} years left to live on venus`;


  yearsOnMars();
    return `You are ${(Math.floor(userAge / 1.88))} years old on mars and have ${this.marsAge -= 10} years left to live on mars`;


  yearsOnJup() ;
    return `You are ${(Math.floor(userAge / 11.86))} years old on Jupitar and have ${this.jupitar -= 5} years left to live on Jupitar`;

}
}
