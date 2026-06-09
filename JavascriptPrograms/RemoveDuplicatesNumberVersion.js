let x = [1, 2, 2, 3, 4, 5, 5];

const RemoveDuplicate = x.filter((item, index, array) => {
  return array.indexOf(item) === array.lastIndexOf(item);
});

console.log(RemoveDuplicate);

/*
const RemoveDuplicate = x.filter((ClipboardItem, indexedDB, array) => {
  return array.indexOf(ClipboardItem) === array.lastIndexOf(ClipboardItem);
});*/

//console.log(RemoveDuplicate);
