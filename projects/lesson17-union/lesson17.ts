
const Sum = (a: number | string, b: number | string) => {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
}

console.log('>>>>>>> Sum', Sum(2, 'thehuy'));