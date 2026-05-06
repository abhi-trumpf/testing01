const args = process.argv.slice(2);   // going to take inputs 1 by 1
console.log("Input received from terminal:", args); // ADD THIS LINE

const numArray = args.map(Number);
console.log("Converted to numbers:", numArray);