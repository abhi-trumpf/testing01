// 1. Parent Object
const genericLaptop = {
  brand: "Generic",
  powerOn: () => console.log("Booting up..."),
};

// 2. Child Object
const myGamingLaptop = {
  graphicsCard: "RTX 4060",
  playGame: () => console.log("Playing game..."),
};

// 3. Link them together (Child links to Parent)
Object.setPrototypeOf(myGamingLaptop, genericLaptop);

// 4. Test the Access
myGamingLaptop.playGame(); // Works! (Own method)
myGamingLaptop.powerOn(); // Works! (Borrowed fallback)
console.log(myGamingLaptop.brand); // "Generic" (Borrowed parameter)
