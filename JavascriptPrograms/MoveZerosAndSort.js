let x = [1, 2, 0, 22, 0, 100, 101, 0, 0, 5, 5, 6, 2, 4];

let y = x.sort((a, b) => {
  return a - b;
});

let nonZeros = y.filter((num) => num != 0);
//console.log(nonZeros);

let zerocount = x.length - nonZeros.length;

let ZeroArray = new Array(zerocount).fill(0);

let result = [...nonZeros, ...ZeroArray];
console.log(result);
