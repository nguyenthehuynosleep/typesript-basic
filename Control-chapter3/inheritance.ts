class Employee123 {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}`;
  }
}

class Manager extends Employee123 {
  private jobTitle: string;
  constructor(firstName: string, lastName: string, jobTitle: string) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }
  describe(): string {
    return `${super.describe()}--Nguyễn Thế Huy`;
  }
}

let employee = new Manager("Thehuycoder", "Nguyễn Thế", 'Web developer');

console.log(employee.getFullName());
console.log(employee.describe());
