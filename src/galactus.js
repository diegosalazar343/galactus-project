export default class GalactusCalculator {
  constructor(age) {
    this.avgLife = 50;
    this.age = age;
  }
    earthAge(){
      let earthAge = this.age;
      return earthAge;
    }
    earthLeft(){
      let earthAge = this.age
      return Math.floor(this.avgLife - earthAge);
    }
    earthPassed(){
      let earthPassed = this.age;
      let earthYearsPassed = Math.floor(earthPassed);
      if(earthYearsPassed > this.avgLife) {
        return Math.floor(this.earthYearsPassed - this.avgLife);
      } else {
        return earthYearsPassed;
      }


    }

    mercuryAge = Math.floor(age / .24);
    mercuryExpectancy = Math.floor(earthExpectancy / .24);

    venusAge = Math.floor(userAge / .62);
    venusExpectancy = Math.floor(earthExpectancy / .62);

    marsAge = Math.floor(userAge / 1.88);
    marsExpectancy = Math.floor(earthExpectancy / 1.88);

    jupitarAge = Math.floor(userAge / 11.86);
    jupitarExpectancy = Math.floor(earthExpectancy / 11.86);
