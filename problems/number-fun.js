function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n < 1 || n > 1000000) {
    throw new RangeError('only accepts values from 1 to 1,000,000 inclusive');
  }
  return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};
