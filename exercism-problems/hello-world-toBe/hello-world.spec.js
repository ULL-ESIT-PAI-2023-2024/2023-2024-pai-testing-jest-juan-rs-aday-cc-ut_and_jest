import { hello } from './hello-world';

describe('Hello World', () => {
  test('Say Hi!', () => {
    expect(hello()).toBe('Hello, World!');
  });
});
