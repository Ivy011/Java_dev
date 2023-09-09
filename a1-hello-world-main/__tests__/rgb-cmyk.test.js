import {jest} from '@jest/globals';
import { convert } from './../2-rgb-cmyk/rgb-cmyk';

test('converts black properly', () => {
  expect(convert(0,0,0)).toEqual([0,0,0,1]);
});

test('converts white properly', () => {
  expect(convert(255,255,255)).toEqual([0,0,0,0]);
});

test('converts colors properly', () => {
  expect(convert(75,0,130)).toEqual([0.423076923076923,1.0,0.0,0.4901960784313726]);
  expect(convert(255,143,0)).toEqual([0.0,0.4392156862745098,1.0,0.0]);
});