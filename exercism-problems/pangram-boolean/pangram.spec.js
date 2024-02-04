import { isPangram } from './pangram';

describe('Pangram()', () => {
  test('empty sentence', () => {
    expect(isPangram('')).toBeFalsy();
  });

  test('perfect lower case', () => {
    expect(isPangram('abcdefghijklmnopqrstuvwxyz')).toBeTruthy();
  });

  test('only lower case', () => {
    expect(isPangram('the quick brown fox jumps over the lazy dog')).toBeTruthy();
  });

  test("missing the letter 'x'", () => {
    expect(
      isPangram('a quick movement of the enemy will jeopardize five gunboats'),
    ).toBeFalsy();
  });

  test("missing the letter 'h'", () => {
    expect(isPangram('five boxing wizards jump quickly at it')).toBeFalsy();
  });

  test('with underscores', () => {
    expect(isPangram('the_quick_brown_fox_jumps_over_the_lazy_dog')).toBeTruthy();
  });

  test('with numbers', () => {
    expect(isPangram('the 1 quick brown fox jumps over the 2 lazy dogs')).toBeTruthy(
      
    );
  });

  test('missing letters replaced by numbers', () => {
    expect(isPangram('7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog')).toBeFalsy(
      
    );
  });

  test('mixed case and punctuation', () => {
    expect(isPangram('"Five quacking Zephyrs jolt my wax bed."')).toBeTruthy();
  });

  test('case insensitive', () => {
    expect(isPangram('the quick brown fox jumps over with lazy FX')).toBeFalsy(
      
    );
  });
});
