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
});
