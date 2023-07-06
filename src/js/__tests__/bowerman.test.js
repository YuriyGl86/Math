import Bowerman from '../bowerman';

test('shoud create object', () => {
  expect(new Bowerman('testName', 'bowerman')).toBeInstanceOf(Bowerman);
});

test('shoud create object', () => {
  expect(new Bowerman('testName')).toBeInstanceOf(Bowerman);
});

test('shoud throw error', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Bowerman('testName', 'wrongType');
  }).toThrow();
});
