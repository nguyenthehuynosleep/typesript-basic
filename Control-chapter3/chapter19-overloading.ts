const add = (a: number | string, b: number | string) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
};

function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any) {
  return a + b;
}

console.log(">>>> check add new", addNew(1, 2), addNew('Thehuy', 'Nguyen'));
