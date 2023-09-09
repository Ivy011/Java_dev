import {jest} from '@jest/globals';
import { helloWorld } from "../0-hello-world/hello-world";

test('should return "Hello, World!"', () => {
  console.log = jest.fn();
  helloWorld();
  expect(console.log).toHaveBeenCalledWith('Hello, World!');
});

test('should return "Hello, World!"', () => {
  expect(helloWorld()).toBe('Hello, World!');
});