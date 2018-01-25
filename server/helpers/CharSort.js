const charSort = string => (
  string
    .split('')
    .sort((a, b) => (a < b))
    .join('')
);

module.exports = charSort;
