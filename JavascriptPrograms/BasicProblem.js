const profileList = [
  { name: "John", role: "User" },
  { name: "Sarah", role: "Admin" },
  { name: "Mike", role: "Guest" },
];

function findUserByRole(arrayofobjects, whatattributetofind) {
  for (let i = 0; i < arrayofobjects.length; i++) {
    const current = arrayofobjects[i];
    if (current.role === whatattributetofind) {
      return current.name;
    }
  }
  return null;
}

let x = findUserByRole(profileList, "Admin");
console.log(x);
