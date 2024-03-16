
type ValueType = number | string | boolean | object;

const Sum = (a: ValueType, b: number | string) => {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
}

console.log('>>>>>>> Sum', Sum('coder', 'thehuy'));