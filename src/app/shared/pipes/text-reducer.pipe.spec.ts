import {TextReducerPipe} from './text-reducer.pipe';

const inputValue = 'Lorem ipsum dolor sit amet';
const outputValue = 'Lorem ipsum dolor ...';
const size = 18;

describe('TextReducerPipe', () => {
  it('create an instance', () => {
    const pipe = new TextReducerPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform', () => {
    const pipe = new TextReducerPipe();
    expect(pipe.transform(inputValue, size)).toBe(outputValue);
  });
});
