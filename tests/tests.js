const sortChars = require('../server/helpers/CharSort');

test('sorts string in descending order', () => {
  const expected = sortChars('banana');
  const actual = 'nnbaaa';

  expect(expected).toEqual(actual);
});
