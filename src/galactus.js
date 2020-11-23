
export class GalactusCalculator {
  constructor(earthExpectancy, earthUnder, userAge, userSex){
    this.userAge = userAge;
    this.userSex = userSex;
    this.earthExpectancy = earthExpectancy;
    this.earthUnder = earthExpectancy - userAge;
    this.mercuryAge = Math.floor(userAge / .24);
    this.mercuryExpectancy = Math.floor(earthExpectancy / .24);
    this.mercuryUnder = this.mercuryExpectancy - this.mercuryAge;
    this.venusAge = Math.floor(userAge / .62);
    this.venusExpectancy = Math.floor(earthExpectancy / .62);
    this.venusUnder = this.venusExpectancy - this.venusAge;
    this.marsAge = Math.floor(userAge / 1.88);
    this.marsExpectancy = Math.floor(earthExpectancy / 1.88);
    this.marsUnder = this.marsExpectancy - this.marsAge;
    this.jupitarAge = Math.floor(userAge / 11.86);
    this.jupitarExpectancy = Math.floor(earthExpectancy / 11.86);
    this.jupitarUnder = this.jupitarExpectancy - this.jupitarAge;
  }

  yearsLeft() {
    if (this.workout === "male") {
      this.mercuryAge -=30;
      this.venusAge -=25;
      this.marsAge -=20;
      return this.jupitar -= 15;
  } else if (this.workout == "female") {
    this.mercuryAge -=20;
    this.venusAge -= 15;
    this.marsAge -= 10;
    return this.jupitar -= 5;
  } else {
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    return this.jupitar;
  }


  yearsOnMerc(){
    return `You are ${(Math.floor(userAge / .24))} years old on mercury and have ${(Math.floor(earthExpectancy / .24))} years left to live on mercury`;
  }

  yearsOnVen(){
    return `You are ${(Math.floor(userAge / .62))} years old on venus and have ${(Math.floor(earthExpectancy / .62))} years left to live on venus`;
  }

  yearsOnMars(){
    return `You are ${(Math.floor(userAge / 1.88))} years old on mars and have ${(Math.floor(earthExpectancy / 1.88))} years left to live on mars`;
  }

  yearsOnJup(){
    return `You are ${(Math.floor(userAge / 11.86))} years old on Jupitar and have ${(Math.floor(earthExpectancy / 11.86))} years left to live on Jupitar`;
  }
}
