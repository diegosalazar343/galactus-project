import { TestScheduler } from 'jest';
import { GalactusCalculator } from './../src/galactus.js';


describe('GalactusCalculator', () => {

test('Test 1: Should create a GalactusCalculator object, and include user input', () => {
  let user = new GalactusCalculator(24);
  expect(user.userAge).toEqual(24);
  })


  })
});
