// Getter in class

class Person3 {
  private _age: number;
  public firstName: string;
  public lastName: string;

  constructor(age: number, firstName: string, lastName: string) {
    this._age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //getter
  get age() {
    return this._age;
  }
  //setter
  set age(age1: number) {
    if (age1 < 0 || age1 > 200) {
      throw new Error("Age must be between 0 and 200");
    }
    this._age = age1;
  }
}

let person3 = new Person3(12, "the huy", "nguyen");
let checkAge = person3.age;
person3.age = 300;
// person3.setAge(20)
console.log("check age: " + person3); //getter
console.log("age: " + person3.age); //getter
