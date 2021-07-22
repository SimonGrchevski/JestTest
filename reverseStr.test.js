const { TestWatcher } = require('jest');
const reverseStr = require('./reverseStr');

test( ('Reverse 1'), () => {
  expect(reverseStr('kalabalak')).toBe('kalabalak');
});

test( ('Reverse 2'), () => {
  expect(reverseStr('aer')).toBe('rea');
});