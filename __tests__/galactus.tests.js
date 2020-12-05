//import { TestScheduler } from 'jest';
import GalactusCalculator from './../src/galactus.js';


describe('GalactusCalculator', () => {

test('Should create a GalactusCalculator object, and include user input', () => {
  const answer = new GalactusCalculator(24);
  expect(answer.age).toEqual(24);
  });
});
