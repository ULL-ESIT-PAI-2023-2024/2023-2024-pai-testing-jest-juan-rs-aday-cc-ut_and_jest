const formatString = require('./format-string');

describe('format-string', () => {
  test('should return a string with a prefix and a suffix', () => {
    expect(formatString('en_medio')).toMatch(/[0-9]-en_medio-[0-9]/);
  });
});