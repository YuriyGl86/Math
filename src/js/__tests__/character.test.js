import { magician } from '../magician';

/* eslint no-underscore-dangle: 0 */

beforeEach(() => {
  magician._attack = 10;
  magician._distance = 1;
  magician._stoned = false;
});

test('set distance', () => {
  magician.distance = 2;
  expect(magician._distance).toBe(2);
});

test('test atack without stoned', () => {
  magician.distance = 2;
  expect(magician.attack).toBe(9);
});

test('set attack', () => {
  magician.attack = 100;
  expect(magician._attack).toBe(100);
});

test('set stoned', () => {
  magician.stoned = true;
  expect(magician._stoned).toBe(true);
});

test('test atack with stoned', () => {
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBe(8.5);
});
