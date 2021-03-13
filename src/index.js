
// You should implement your task here.
function towelSort (matrix) {
  for (i=1; i < matrix.length; i++) {
      matrix[i] = matrix[i].reverse();
  }
  return matrix.flat();
};
alert (towelSort([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
]));
