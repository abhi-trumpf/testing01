let word = "pretty";
let result = {};
for (let i = 0; i < word.length; i++) {
  let current = word[i];
  if (result[current]) {
    result[current] += 1;
  } else {
    result[current] = 1;
  }
}
console.log(result);
