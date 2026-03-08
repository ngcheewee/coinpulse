import { formatCurrency } from './lib/utils';

const testCases = [
  0.05,
  0.001,
  0.0999,
  0.1,
  1.23,
  10.5
];

testCases.forEach(amount => {
  console.log(`Amount: ${amount} => Formatted: ${formatCurrency(amount)}`);
});
