// Fibonacci sequence implementation

// iterative implementation
function fibs(n) {
  let result = Array(n).fill(0);
  if (n <= 0) {
    return result;
  }

  for (let i = 0; i < n; i++) {
    if (i == 1 || i == 2) {
      result[i] = 1;
    } else if (i == 0) {
      result[i] = 0;
    } else {
      result[i] = result[i - 1] + result[i - 2];
    }
  }
  return result;
}

// recursive implementation
function fibsRec(n) {
  console.log("This was printed recursively");
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fibArray = fibsRec(n - 1);
  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  return fibArray;
}

console.log(fibsRec(8));
console.log(fibs(8));
