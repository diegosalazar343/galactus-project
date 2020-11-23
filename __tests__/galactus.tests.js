import { GalactusCalculator } from './../src/galactus.js';
import { TestScheduler } from 'jest';

describe('GalactusCalculator', () => {

test('Test 1: Should create a GalactusCalculator object, and include user input', () => {
  let user = new GalactusCalculator(24);
  expect(user.earthAge).toEqual(24);
  });

  test('Test 2: Should calculate earthUnder value using the earthAge and earthExpectancy values', () =>{
    let user = new GalactusCalculator(24,50);
    expect(user.earthUnder).toEqual(26);
  });

  test('Test 3: Should calculate mercuryAge value using the earthAge value', () =>{
    let user = new GalactusCalculator(24);
    expect(user.mercuryAge).toEqual(100);
  });

  test('Test 4: Should calculate mercuryExpectancy value using the earthExpectancy value', () =>{
    let user = new GalactusCalculator(0,50);
    expect(user.mercuryExpectancy).toEqual(208);
  });

  test('Test 5: Should calculate mercuryUnder value using the mercuryAge and mercuryExpectancy values', () =>{
    let user = new GalactusCalculator(24,50);
    expect(user.mercuryUnder).toEqual(108);
  });

  test('Test 6: Should calculate venusAge value using the earthAge value', () =>{
    let user = new GalactusCalculator(24);
    expect(user.venusAge).toEqual(38);
  });

  test('Test 7: Should calculate venusExpectancy value using the earthExpectancy value', ()=>{
    let user = new GalactusCalculator(0,50);
    expect(user.venusExpectancy).toEqual(80);
  });

  test('Test 8: Should calculate venusUnder values using the venusAge and venusExpectancy values', () =>{
    let user = new GalactusCalculator(24,50);
    expect(user.venusUnder).toEqual(42);
  });

  test('Test 9: Should calculate marsAge value using the earthAge value', () =>{
    let user = new GalactusCalculator(24);
    expect(user.marsAge).toEqual(12);
  });

  test('Test 10: Should calculate marsExpectancy value using earthExpectancy value', () =>{
    let user = new GalactusCalculator(0,50);
    expect(user.marsExpectancy).toEqual(26);
  });

  test('Test 11: Should calculate marsUnder values using the marsAge and marsExpectancy values', ()=>{
    let user = new GalactusCalculator(24,50);
    expect(user.marsUnder).toEqual(14);
  });

  test('Test 12: Should calculate jupitarAge value using the earthAge value', () =>{
    let user = new GalactusCalculator(24);
    expect(user.jupitarAge).toEqual(2);
  });

  test('Test 13: Should calculate jupitarExpectancy value using earthExpectancy value', () =>{
    let user = new GalactusCalculator(0,50);
    expect(user.jupitarExpectancy).toEqual(4);
  });

  test('Test 14: Should calculate jupitarUnder value using the jupitarAge and JupitarExpectancy values', ()=>{
    let user = new GalactusCalculator(24,50);
    expect(user.jupitarUnder).toEqual(2);
  });
});
