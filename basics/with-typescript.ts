function add(a: number, b: number) {
  return a + b;
}

const result = add(2, 5);

console.log(result);


function insertStart<T>(array: T[], value: T) {
  return [value, ...array];
}


insertStart(['1','2','4'], '5')[0].split(' ')
