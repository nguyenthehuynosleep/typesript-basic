interface IPerson {
  firstName: string;
  lastName: string;
}

function getFullName(person: IPerson) {
  return `${person.firstName} ${person.lastName}`;
}

let person10 = {
  firstName: "thehuy",
  lastName: "coder",
};

console.log("person", getFullName(person10));
