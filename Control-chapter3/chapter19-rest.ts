// const getTotal = (...numbers: number[ ]): number => {
//     let total = 0;
//     numbers.forEach((num) => total += num)
//     return total;
// }

// console.log(getTotal());
// console.log(getTotal(10, 20));
// console.log(getTotal(10, 20, 30));

// *note ... phải để xuống cuối cùng, trong 1 function chúng ta chỉ có 1 toán tử res thôi!
const getTotal1 = (n: number, ...numbers: number[]): number[] => {
  let number = numbers.map((num) => {
    console.log("num: " + num);
    // return n * num;
  });
  return numbers.map((num) => n * num);
};

// console.log(getTotal());
// console.log(getTotal(10, 20));
// console.log(getTotal(10, 20, 30));

console.log(getTotal1(10, 2, 3, 4, 5));

const stringTest = (greeting: string, ...names: string[]): string => {
  return greeting + " " + names.join(" ") + "!";
};

console.log("ArrayStringTest", stringTest("Thehuy", "coder", "nosleep"));
