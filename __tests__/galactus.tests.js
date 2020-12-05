import { TestScheduler } from 'jest';
import {GalactusCalculator} from './../src/galactus.js';


describe('GalactusCalculator', () => {

test('Should create a GalactusCalculator object, using user input', () => {
  const answer = new GalactusCalculator(20);
  expect(answer.age).toEqual(24);
  });
});
