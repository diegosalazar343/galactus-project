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

  test('Test 3: Should calculate mercuryAge value using the earthAge value', () =>{
    let user = new GalactusCalculator(24);
    expect(user.mercuryAge).toEqual(100);
  });

  test('Test 4: Should calculate mercuryExpectancy value using the earthExpectancy value', () =>{
    let user = new GalactusCalculator(0,50);
    expect(user.mercuryExpectancy).toEqual(208);
  });

  test('Test 5: Should calculate mercuryDifference value using the mercuryAge and mercuryExpectancy values', () =>{
    let user = new GalactusCalculator(24,50);
    expect(user.mercuryDifference).toEqual(108);
  });

  test('Test 6: Should calculate venusAge value using the earthAge value', () =>{
    let user = new GalactusCalculator(24);
    expect(user.venusAge).toEqual(38);
  });

  test('Test 7: Should calculate venusExpectancy value using the earthExpectancy value', ()=>{
    let user = new GalactusCalculator(0,50);
    expect(user.venusExpectancy).toEqual(80);
  });

  test('Test 8: Should calculate venusDifference values using the venusAge and venusExpectancy values', () =>{
    let user = new GalactusCalculator(24,50);
    expect(user.venusDifference).toEqual(42);
  });

  test('Test 9: Should calculate marsAge value using the earthAge value', () =>{
    let user = new GalactusCalculator(24);
    expect(user.marsAge).toEqual(12);
  });

  test('Test 10: Should calculate marsExpectancy value using earthExpectancy value', () =>{
    let user = new GalactusCalculator(0,50);
    expect(user.marsExpectancy).toEqual(26);
  })

  test('Test 11: Should calculate marsDifference values using the marsAge and MarsExpectancy values', ()=>{
    let user = new GalactusCalculator(24,50);
    expect(user.marsDifference).toEqual(14);
  });
});
