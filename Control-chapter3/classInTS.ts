

class Person {
    ssn: string;
    firstName: string;
    lastName: string;
    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.ssn} ${this.firstName} ${this.lastName}`;
    }
}

let thehuycoder = new Person('0123', 'thehuycoder', 'nguyenthe');

console.log('CLASS', thehuycoder);
console.log(thehuycoder.getFullName());


// public modifier

// Mỗi lần sử dụng lại class thì sẽ truy cập đến thuộc tính và method của nó

class Employee {
    public emCode: string;
    emName: string;
    constructor(emCode: string, emName: string) {
        this.emCode = emCode;
        this.emName = emName;
    }
}

let emp = new Employee('0123', 'Thehuycoder');

emp.emCode = '0124';
emp.emName = 'TheHuy'
//có thể sửa đổi giá trị sau khi đã được khai báo public
console.log('employ:', emp);

//private 
class Employee1 {
    public emCode: string;
    private emName: string;
    constructor(emCode: string, emName: string) {
        this.emCode = emCode;
        this.emName = emName;
    }
}

let emp1 = new Employee1('0123', 'Thehuycoder');

emp.emCode = '0124';
emp.emName = 'TheHuy'
//có thể sửa đổi giá trị sau khi đã được khai báo public
console.log('employ:', emp);


//protected: kế thừa


