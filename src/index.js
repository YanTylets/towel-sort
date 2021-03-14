
// You should implement your task here.
module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  for (i=1; i < matrix.length; i++) {
      matrix[i] = matrix[i].reverse();
      i++;
  }
  return matrix.flat();
};
