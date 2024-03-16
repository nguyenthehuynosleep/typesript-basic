
function handleError(errorMessage: string): never {
    throw Error(errorMessage);
}

const never = handleError('just a test error');

console.log(never);