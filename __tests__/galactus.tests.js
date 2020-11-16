import { GalactusCalculator } from './../src/galactus.js';
import { TestScheduler } from 'jest';

describe('GalactusCalculator', () => {
  /*let user;
  beforeEach(() => {
    let user = new GalactusCalculator(24)
  });*/

test('Test 1: Should create a GalactusCalculator object, and include user input', () => {
  let user = new GalactusCalculator(24);
  expect(user.earthAge).toEqual(24);
  });

  test('Test 2: Should calculate earthDifference value using the earthAge and earthExpectancy values', () =>{
    let user = new GalactusCalculator(24,50);
    expect(user.earthDifference).toEqual(26);
  });

  test('Test 3: Should calculate mercuryAge value using the earthAge value', ()=>{
    let user = new GalactusCalculator(24);
    expect(user.mercuryAge).toEqual(100);
  });
});
