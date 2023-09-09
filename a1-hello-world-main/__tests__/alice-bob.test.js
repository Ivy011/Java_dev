import {jest} from '@jest/globals';
import { respond } from './../1-alice-bob/alice-bob';

test('should return return the name of the person', () => {
  expect(respond('Eric',0)).toContain('Eric');
});

test('should indicate if you are younger', () => {
  expect(respond('Eric',19)).toContain('younger');
  expect(respond('Eric',-1)).toContain('younger');
});

test('should indicate if you are older', () => {
  expect(respond('Eric',22)).toContain('older');
});

test('should indicate if you are older if you are the same age', () => {
  expect(respond('Eric',20)).toContain('older');
});

  