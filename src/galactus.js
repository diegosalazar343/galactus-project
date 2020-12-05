export class GalactusCalculator {
  constructor(age) {
    this.avgLife = 50;
    this.age = age;
  };

  earthAge() {
    let earthAge = this.age;
    return earthAge;
  }
  earthLeft() {
    let earthAge = this.age
    return Math.floor(this.avgLife - earthAge);
  }
  earthPassed() {
    let earthOver = this.age;
    let earthYearsPassed = Math.floor(earthOver);
    if (earthYearsPassed > this.avgLife) {
      return Math.floor(earthYearsPassed - this.avgLife);
    } else {
      return earthYearsPassed;
    }

    mercuryAge(); {
      let mercuryAge = Math.floor(this.age / .24);
      return mercuryAge;
    }
    mercuryLeft(); {
      let mercuryAge = Math.floor(this.age / .24);
      return Math.floor(this.avgLife - mercuryAge);
    }
    mercuryPassed(); {
      let mercuryPassed = Math.floor(this.age / .24);
      let mercuryYearsPassed = Math.floor(mercuryPassed);
      if (mercuryYearsPassed > this.avgLife) {
        return Math.floor(mercuryYearsPassed - this.avgLife);
      } else {
        return mercuryYearsPassed;
      }
      venusAge(); {
        let venusAge = Math.floor(this.age / .62);
        return venusAge;
      }
      venusLeft(); {
        let venusAge = Math.floor(this.age / .62);
        return Math.floor(this.avgLife - venusAge);
      }
      venusPassed(); {
        let venusPassed = Math.floor(this.age / .62);
        let venusYearsPassed = Math.floor(venusPassed);
        if (venusYearsPassed > this.avgLife) {
          return Math.floor(venusYearsPassed - this.avgLife);
        } else {
          return venusYearsPassed;
        };
        marsAge(); {
          let marsAge = Math.floor(this.age / 1.88);
          return marsAge;
        }
        marsLeft(); {
          let marsAge = Math.floor(this.age / 1.88);
          return Math.floor(this.avgLife - marsAge);
        }
        marsPassed(); {
          let marsPassed = Math.floor(this.age / 1.88);
          let marsYearsPassed = Math.floor(marsPassed);
          if (marsYearsPassed > this.avgLife) {
            return Math.floor(marsYearsPassed - this.avgLife);
          } else {
            return marsYearsPassed;
          };
          jupitarAge(); {
            let jupitarAge = Math.floor(this.age / 11.86);
            return jupitarAge;
          }
          jupitarLeft(); {
            let jupitarAge = Math.floor(this.age / 11.86);
            return Math.floor(this.avgLife - jupitarAge);
          }
          jupitarPassed(); {
            let jupitarPassed = Math.floor(this.age / 11.86);
            let jupitarYearsPassed = Math.floor(jupitarPassed);
            if (jupitarYearsPassed > this.avgLife) {
              return Math.floor(jupitarYearsPassed - this.avgLife);
            } else {
              return jupitarYearsPassed;
            }
          }
        }
      }
    }
  }
}
