import { greet } from './greet';

describe('greet', () => {
  it('Should include the name of the message', () => {
    expect(greet('Fernando')).toContain('Fernando');
  });
});
