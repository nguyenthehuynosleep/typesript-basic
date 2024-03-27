// Static là 1 biến động
class Circle {
  // property
  static pi: number = 3.14;
  public test: number = 89;
  // method
  static calculateArea(radius: number): number {
    return this.pi * radius * radius;
  }
  calculateArea1(radius: number): number {
    return 2 * Circle.pi * radius * radius;
  }
}
let circle = new Circle();
console.log("Circle:", Circle.pi);
console.log("Circle:", circle.test);

console.log("Circle:", Circle.calculateArea(24));
console.log("Circle:", circle.calculateArea1(24));
