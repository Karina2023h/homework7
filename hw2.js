function nameSum(x) {
  return function (y) {
    return x * y;
  };
}

const result = nameSum(5)(2);
console.log(result);
