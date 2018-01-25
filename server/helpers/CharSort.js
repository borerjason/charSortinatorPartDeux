const charSort = word => (
  word
    .split('')
    .sort((a,b) => (
      b < a ? 1 : -1 
    ))
    .join('')
);

module.exports = charSort;
