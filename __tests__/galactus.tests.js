import { TestScheduler } from 'jest';
import {GalactusCalculator} from './../src/galactus.js';


describe('GalactusCalculator', () => {

test('Should create a GalactusCalculator object, using user input', () => {
  const answer = new GalactusCalculator(24);
  expect(answer.age).toEqual(24);
  });

  test('Should calculate earthLeft value using the average life and users age', () => {
    const answer = new GalactusCalculator(24, 50);
    expect(answer.earthLeft()).toEqual(26);
  });

  test('Should calculate earthPassed functionality ', () => {
    const answer = new GalactusCalculator(55, 50);
    expect(answer.earthPassed()).toEqual(5);
  });
});
