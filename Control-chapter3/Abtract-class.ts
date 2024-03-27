//actract class: trừu tượng

abstract class classAtract {
  public firstName: string;
  public lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  abstract getSalary(): number; //actract method
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}`;
  }
}
class getFullName1 extends classAtract {
    constructor(firstName: string, lastName: string, public hours: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.hours
    }
}

const classname = new getFullName1('thehuy','coder', 20);

console.log('getSalary', classname.getSalary());



