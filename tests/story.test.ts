import assert from 'node:assert/strict';
import test from 'node:test';
import { selectActiveStep } from '../src/lib/story';

test('a long first step stays active until the next step crosses the reading line', () => {
  assert.equal(selectActiveStep([{ index: 0, top: -900, bottom: 1100 }, { index: 1, top: 1100, bottom: 2200 }], 300), 0);
  assert.equal(selectActiveStep([{ index: 0, top: -1800, bottom: 200 }, { index: 1, top: 200, bottom: 1300 }], 300), 1);
});

test('the same geometry restores an earlier state when scrolling upwards', () => {
  assert.equal(selectActiveStep([{ index: 0, top: -500, bottom: 400 }, { index: 1, top: 400, bottom: 1600 }], 300), 0);
});

test('direct positioning deep into a chapter selects the last crossed step', () => {
  assert.equal(selectActiveStep([{ index: 0, top: -2000, bottom: -1000 }, { index: 1, top: -1000, bottom: -100 }, { index: 2, top: -100, bottom: 1300 }], 300), 2);
});

test('before and after a chapter, and without steps, activation remains safe', () => {
  assert.equal(selectActiveStep([{ index: 0, top: 700, bottom: 1200 }], 300), 0);
  assert.equal(selectActiveStep([{ index: 0, top: -1200, bottom: -700 }, { index: 1, top: -700, bottom: -200 }], 300), 1);
  assert.equal(selectActiveStep([], 300), 0);
});
