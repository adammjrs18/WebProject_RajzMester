import { LowercaseCustomPipe } from './lowercase-custom.pipe';

describe('LowercaseCustomPipe', () => {
  it('create an instance', () => {
    const pipe = new LowercaseCustomPipe();
    expect(pipe).toBeTruthy();
  });
});
