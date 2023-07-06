import Magician, { magician } from '../magician';

test('shoud create object', () => {
  expect(new Magician('testName', 'magician')).toBeInstanceOf(Magician);
});

test('shoud create object', () => {
  expect(new Magician('testName')).toBeInstanceOf(Magician);
});

test('shoud throw error', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Magician('testName', 'wrongType');
  }).toThrow();
});

test('test atack with stoned', () => {
  expect(magician.getAttack(2)).toBe(9);
});

test('test atack with stoned', () => {
  magician.setStoned();
  expect(magician.getAttack(2)).toBe(8);
});
