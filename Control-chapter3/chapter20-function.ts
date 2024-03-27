function sum(a: string, b: string): string {
  return a + b;
}

console.log(">check sum", sum("huy", "the"));

//anonnymoous function

const sum2 = (a: number, b: number) => {
  return a + b;
};
console.log(">>>>>>>sum2", typeof sum2(2, 5));

// function type

const sum3 = (a: number, b: number) => {
  return "abc";
};
console.log(">>>>>>>sum3", sum3(2, 5));

//optional params function

const sum4 = (x: number, y: number, z?: number) => {
    if(z) {
        return x + y + z;
    }
    return x + y ;
}

console.log('>>>>>>>check sum4', sum4(1, 4), sum4(2, 4, 5));

//default params function

const sum5 = (x: number, y: number, z = false) => {
  if(z === true) {
    return x + y
  }
  else {
    return x - y
  }
}

console.log('>>>>>>>check sum5', sum5(1, 2));