import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calcEmi } from './emi.ts';

test('known reducing-balance figure', () => {
  const { emi, months, totalInterest } = calcEmi({ principal: 5_000_000, ratePct: 8.5, years: 20 });
  assert.equal(months, 240);
  assert.ok(Math.abs(emi - 43391) < 5, `expected ~43391, got ${emi}`);
  assert.ok(totalInterest > 0);
});

test('zero interest divides evenly instead of dividing by zero', () => {
  const { emi, totalInterest } = calcEmi({ principal: 1_200_000, ratePct: 0, years: 10 });
  assert.equal(emi, 10_000);
  assert.equal(totalInterest, 0);
});

test('tenure under a month still yields one month', () => {
  assert.equal(calcEmi({ principal: 100_000, ratePct: 9, years: 0 }).months, 1);
});
