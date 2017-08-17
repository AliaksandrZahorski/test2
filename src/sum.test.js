import sum from './sum';

afterEach(() => {
  Object.defineProperty(window.navigator, 'language', {value: 'en', configurable: true});
});

test('window.navigator.language', () => {
  Object.defineProperty(window.navigator, 'language', {value: 'ru-RU', configurable: true});
  expect(sum(1, 2)).toBe(3);
});

test('1+2=3', () => {
  const sum = jest.fn((a, b) => {return a + b;});
  expect(sum(1, 2)).toBe(3);
});
